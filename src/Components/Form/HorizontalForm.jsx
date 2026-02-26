import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE = "https://neoliv-backend-otp.vercel.app";

const HorizontalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    configuration: "",
    city: "",
    project: "",
    whatsappOptIn: true,
    source: "source",
    subsource: "subsource",
    countryCode: "+91",
    country: "India",
    url: window.location.href,
    refererUrl: document.referrer,
  });

  const [selectedConfiguration, setSelectedConfiguration] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [verifyId, setVerifyId] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const projectData = {
    NCR: "Neoliv Grand Park",
    Mumbai: "Neoliv Grand Forest Prive",
  };

  // Timer
  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    if (timer === 0) setCanResend(true);
    return () => clearInterval(interval);
  }, [isOtpSent, timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpArray];
    newOtp[index] = value;
    setOtpArray(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleOtpSend = async () => {
    if (!formData.name.trim()) return toast.error("Enter your name");
    if (!formData.email.trim()) return toast.error("Enter your email");
    if (!formData.mobile.trim()) return toast.error("Enter mobile number");
    if (!selectedConfiguration) return toast.error("Select configuration");
    if (!selectedCity) return toast.error("Select Project");

    setIsSendingOtp(true);

    try {
      const response = await fetch(`${API_BASE}/api/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: formData.mobile }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error();

      toast.success("OTP sent successfully!");
      setVerifyId(data.verifyId);
      setShowOtpField(true);
      setIsOtpSent(true);
      setTimer(30);
      setCanResend(false);
    } catch {
      toast.error("OTP send failed");
    }

    setIsSendingOtp(false);
  };

  const handleOtpVerify = async () => {
    const finalOtp = otpArray.join("");
    if (finalOtp.length !== 6)
      return toast.error("Enter complete OTP");

    setIsVerifyingOtp(true);

    try {
      const response = await fetch(`${API_BASE}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verifyId, otp: finalOtp }),
      });

      const result = await response.json();

      if (result.status === "VERIFIED") {
        toast.success("OTP Verified!");
        setIsOtpVerified(true);
        handleSubmitLead();
      } else {
        toast.error("Invalid OTP");
      }
    } catch {
      toast.error("Verification error");
    }

    setIsVerifyingOtp(false);
  };

  const handleSubmitLead = async () => {
    try {
      const dataToSubmit = {
        ...formData,
        configuration: selectedConfiguration,
        city: selectedCity,
        project: projectData[selectedCity],
      };

      const response = await fetch(`${API_BASE}/api/create-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        toast.success("Lead Submitted Successfully!");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          configuration: "",
          city: "",
          project: "",
          whatsappOptIn: true,
          source: "source",
          subsource: "subsource",
          countryCode: "+91",
          country: "India",
          url: window.location.href,
          refererUrl: document.referrer,
        });

        setSelectedCity("");
        setSelectedConfiguration("");
        setOtpArray(["", "", "", "", "", ""]);
        setIsOtpSent(false);
        setIsOtpVerified(false);
        setShowOtpField(false);
      }
    } catch {
      toast.error("Submission error");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue-950 to-indigo-950 px-6 py-12" id="contact-form">
      <form
        className="w-full max-w-5xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="px-5 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none"
          />

       

          <PhoneInput
            country={"in"}
            value={formData.mobile}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, mobile: value }))
            }
            inputStyle={{
              width: "100%",
              borderRadius: "12px",
              border: "none",
              padding: "20px 10px",
              paddingLeft: "3rem",
              background: "rgba(255,255,255,0.2)",
              color: "white",
            }}
          />

           {/* Location */}
          <Menu as="div" className="relative w-full">
            <Menu.Button className="w-full flex justify-between items-center px-5 py-2 rounded-xl bg-white/20 text-white">
              {selectedCity || "Select Project"}
              <ChevronDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute mt-2 w-full bg-white rounded-xl shadow-xl z-20">
              {["NCR", "Mumbai"].map((city) => (
                <Menu.Item key={city}>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCity(city);
                        setFormData((prev) => ({
                          ...prev,
                          city,
                          project: projectData[city],
                        }));
                      }}
                      className={`w-full px-4 py-3 text-left ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      {city}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>

          {selectedCity && (
            <div className="px-4 py-3 rounded-xl bg-white/15 text-white text-sm border border-white/20">
              Project:{" "}
              <span className="font-semibold">
                {projectData[selectedCity]}
              </span>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">

             <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            className="px-5 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none"
          />

          {/* Configuration */}
          <Menu as="div" className="relative w-full">
            <Menu.Button className="w-full flex justify-between items-center px-5 py-2 rounded-xl bg-white/20 text-white">
              {selectedConfiguration || "Select Configuration"}
              <ChevronDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute mt-2 w-full bg-white rounded-xl shadow-xl z-20">
              {["Residential Township Plots", "Residential Villas"].map(
                (item) => (
                  <Menu.Item key={item}>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedConfiguration(item);
                          setFormData((prev) => ({
                            ...prev,
                            configuration: item,
                          }));
                        }}
                        className={`w-full px-4 py-3 text-left ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                )
              )}
            </Menu.Items>
          </Menu>

         
<div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none">
  <input
    type="checkbox"
    checked={formData.whatsappOptIn}
    onChange={(e) =>
      setFormData((prev) => ({
        ...prev,
        whatsappOptIn: e.target.checked,
      }))
    }
    className="w-4 h-4 accent-green-500 cursor-pointer"
  />

  <label className="text-white text-sm cursor-pointer">
   Opt for notifications 
  </label>
</div>
        
        </div>

        

        {/* OTP SECTION */}
        {isOtpSent && showOtpField && !isOtpVerified && (
          <div className="md:col-span-2 flex flex-col items-center gap-6">
       
            <div className="flex gap-3">
              {otpArray.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  maxLength="1"
                  value={digit}
                  onChange={(e) =>
                    handleOtpChange(e.target.value, index)
                  }
                  onKeyDown={(e) =>
                    handleOtpKeyDown(e, index)
                  }
                  className="w-10 h-10 text-center text-lg font-semibold rounded-xl bg-white/20 text-white border border-white/30 focus:border-white outline-none"
                />
              ))}
            </div>

            {!canResend ? (
              <p className="text-white text-sm">
                Resend OTP in {timer}s
              </p>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setTimer(30);
                  setCanResend(false);
                  handleOtpSend();
                }}
                className="text-blue-400 text-sm font-semibold"
              >
                Resend OTP
              </button>
            )}

            <button
              type="button"
              onClick={handleOtpVerify}
              className="p-4 bg-blue-950 rounded-3xl text-white border-white font-bold"
            >
              {isVerifyingOtp ? "Verifying..." : "Verify & Submit"}
            </button>
          </div>
        )}

        {!isOtpSent && (
          <div className="md:col-span-2 flex justify-center">
            <button
              type="button"
              onClick={handleOtpSend}
              className="py-3 px-7 bg-blue-950 border border-white rounded-3xl text-white font-bold"
            >
              {isSendingOtp ? "Sending..." : "Send OTP"}
            </button>
          </div>
        )}
      </form>

      <ToastContainer />
    </div>
  );
};

export default HorizontalForm;