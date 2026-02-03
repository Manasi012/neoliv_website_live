import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HorizontalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    source: "source",
    subsource: "subsource",
    countryCode: "+91",
    country: "India",
    configuration: "",
    url: window.location.href,
    refererUrl: document.referrer,
    whatsappOptIn: true,
  });

  const [otp, setOtp] = useState("");
  const [verifyId, setVerifyId] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, whatsappOptIn: e.target.checked });
  };

  const handleConfigurationChange = (value) => {
    setFormData({ ...formData, configuration: value });
  };

  // Send OTP
  const handleOtpSend = async () => {
    if (!formData.mobile.startsWith("91") || formData.mobile.length !== 12) {
      toast.error("Only Indian phone numbers (+91) are allowed.");
      return;
    }

    setIsSendingOtp(true);
    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: formData.mobile }),
      });

      const result = await response.json();
      if (response.ok) {
        setVerifyId(result.verifyId);
        setIsOtpSent(true);
        toast.success("OTP sent successfully!");
      } else {
        toast.error(result.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Server error while sending OTP.");
    }
    setIsSendingOtp(false);
  };

  // Verify OTP
  const handleOtpVerify = async () => {
    setIsVerifyingOtp(true);
    try {
      const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refId: verifyId, otp }),
      });

      const result = await response.json();
      if (response.ok) {
        setIsOtpVerified(true);
        toast.success("OTP verified successfully!");
        await handleSubmitLead();
      } else {
        toast.error(result.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error while verifying OTP.");
    }
    setIsVerifyingOtp(false);
  };

  // Submit Lead
  const handleSubmitLead = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Lead created successfully!");
        setFormData({
          ...formData,
          name: "",
          email: "",
          mobile: "",
          configuration: "",
          whatsappOptIn: true,
        });
        setOtp("");
        setIsOtpSent(false);
        setIsOtpVerified(false);
      } else {
        toast.error(data.message || "Failed to create lead.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error while creating lead.");
    }
  };

  return (
    <div id="contact-form" className="flex justify-center items-center md:mx-32 mx-10 my-0 md:mt-5">
      <form className="w-full p-4 rounded-lg shadow-md" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-wrap -mx-4 pb-10">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border-0 border-b border-blue-950 focus:outline-none focus:ring focus:border-blue-500 mb-4"
              required
            />
            <div className="p-0">
              {!isOtpSent && (
                <>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 pt-0">
                    <PhoneInput
                      country={"in"}
                      value={formData.mobile}
                      onChange={(value) =>
                        setFormData({ ...formData, mobile: value })
                      }
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
                      className="px-4 py-2 border md:mb-0 mb-4 border-white bg-blue-700 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-200"
                      onClick={handleOtpSend}
                      disabled={isSendingOtp}
                    >
                      {isSendingOtp ? "Sending OTP..." : "Send OTP"}
                    </button>
                  </div>
                </>
              )}

              {isOtpSent && !isOtpVerified && (
                <>
                  <div className="flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      style={{ width: "100%" }}
                      onChange={(e) => setOtp(e.target.value)}
                      className="border px-4 py-2 rounded-md mb-2 w-full md:w-1/3"
                    />
                    <button
                      onClick={handleOtpVerify}
                      disabled={isVerifyingOtp}
                      className="px-4 py-2 border border-white bg-green-600 text-white font-medium hover:bg-green-700 transition duration-200"
                    >
                      {isVerifyingOtp ? "Verifying OTP..." : "Verify OTP"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border-0 border-b border-blue-950 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
            <Menu
              as="div"
              className="relative inline-block text-left w-full mb-4"
            >
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-4 py-[11px] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {formData.configuration || "Select Configuration"}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </Menu.Button>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-full font-medium origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  {["Residential Township Plots", "Residential villas"].map(
                    (item) => (
                      <Menu.Item key={item}>
                        {({ active }) => (
                          <button
                            onClick={() => handleConfigurationChange(item)}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } block w-full px-4 py-2 text-sm`}
                          >
                            {item}
                          </button>
                        )}
                      </Menu.Item>
                    )
                  )}
                </div>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="whatsappOptIn"
                name="whatsappOptIn"
                checked={formData.whatsappOptIn}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="whatsappOptIn" className="text-white">
                Opt for WhatsApp notifications
              </label>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default HorizontalForm;
