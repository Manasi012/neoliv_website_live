import React, { useState, useRef } from "react";
import firebase from "./firebase";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const recaptchaRef = useRef(null);

  // Validate and format the phone number to E.164
  const formatPhoneNumber = (number) => {
    return number.startsWith("+") ? number : `+${number}`;
  };

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    // Clear and initialize reCAPTCHA container
    if (recaptchaRef.current) {
      recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>';
    }

    const verifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA solved:", response);
        },
        "expired-callback": () => {
          console.log("reCAPTCHA expired; please refresh the page.");
        },
      }
    );

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    console.log(formattedPhoneNumber);

    firebase
      .auth()
      .signInWithPhoneNumber(formattedPhoneNumber, verifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        alert("OTP has been sent to your mobile number");
      })
      .catch((error) => {
        console.error("Error in sending OTP:", error);
        alert("Error in sending OTP: " + error.message);
      });
  };

  return (
    <div>
      <div ref={recaptchaRef}></div>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 pt-5">
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
      <div>
        <button
          type="button"
          className="px-2 py-2 border border-white bg-blue-950 text-white font-medium rounded-xl hover:bg-blue-950 transition duration-200"
          onClick={handleSendOtp}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default Auth;
