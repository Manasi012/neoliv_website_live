import React, { useState, useRef, useEffect } from "react";
import firebase from "./firebase";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PropTypes from "prop-types";

/* global grecaptcha */

const Authcopy = ({ onOtpVerified }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    if (!recaptchaRef.current) {
      recaptchaRef.current = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
    }
  }, []);

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    const formattedPhoneNumber = phoneNumber.startsWith("+")
      ? phoneNumber
      : `+${phoneNumber}`;

    const verifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA solved:", response);
        },
        "expired-callback": () => {
          console.error("reCAPTCHA expired. Please retry.");
        },
      }
    );

    firebase
      .auth()
      .signInWithPhoneNumber(formattedPhoneNumber, verifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setIsOtpSent(true); // Hide phone number input and show OTP input
        setLoading(false); // Stop loading after sending
        alert("OTP sent successfully!");
      })
      .catch((error) => {
        console.log("Error sending OTP:", error);
        setLoading(false); // Stop loading on error
      });
  };

  const handleVerifyOTP = () => {
    if (!verificationCode) {
      alert("Please enter the OTP.");
      return;
    }

    setLoading(true);
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );

    firebase
    .auth()
    .signInWithCredential(credential)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user);
      alert("OTP verified successfully!");
      setLoading(false);
      onOtpVerified(phoneNumber); // Pass the phone number to parent component
    })
    .catch((error) => {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP. Please try again.");
      setLoading(false);
    });
};

  return (
    <div className="p-0">
      <div ref={recaptchaRef} id="recaptcha-container"></div>

      {!isOtpSent && (
        <>
          {/* Phone number input and Send OTP button */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 pt-0">
            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={setPhoneNumber}
              inputStyle={{
                width: "100%",
                border: "none",
                padding: "20px",
                borderRadius: "0",
                paddingLeft: "3rem",
              }}
              className="mt-0"
              dropdownStyle={{ color: "#000" }}
              containerClass="phone-input"
              inputClass="phone-input-field"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="px-4 py-2 border md:mb-0 mb-4 border-white bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-200"
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        </>
      )}

      {isOtpSent && (
        <>
          {/* OTP input and Verify OTP button */}
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter OTP"
              value={verificationCode}
              style={{ width: "100%" }}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="border px-4 py-2 rounded-md mb-2 w-full md:w-1/3"
            />
            <button
              onClick={handleVerifyOTP}
              className="px-4 py-2 border border-white bg-green-600 text-white font-mediumhover:bg-green-700 transition duration-200"
              disabled={loading}
            >
              {loading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

Authcopy.propTypes = {
  onOtpVerified: PropTypes.func.isRequired,
};

export default Authcopy;
