import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Update this URL after deploying the backend to Vercel
const API_BASE = "https://neoliv-backend-otp.vercel.app";

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
  const [showOtpField, setShowOtpField] = useState(false);
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
    // Required field validation
    if (!formData.name.trim()) return toast.error("Please enter your name");
    if (!formData.email.trim()) return toast.error("Please enter your email");
    if (!formData.mobile.trim())
      return toast.error("Please enter your mobile number");
    if (!formData.configuration.trim())
      return toast.error("Please select configuration");

    setIsSendingOtp(true);

    try {
      const response = await fetch(`${API_BASE}/api/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: formData.mobile }),
      });
      const responseData = await response.json();
      // Normalise: treat non-ok HTTP as an error
      if (!response.ok)
        throw new Error(responseData.message || "Failed to send OTP");

      if (responseData.verifyId) {
        toast.success("OTP sent successfully");
        setVerifyId(responseData.verifyId);
        setShowOtpField(true);
        setIsOtpSent(true);
      } else {
        toast.error(responseData.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(error.message || "Something went wrong while sending OTP");
    }

    setIsSendingOtp(false);
  };

  // Verify OTP
  const handleOtpVerify = async () => {
    if (!otp.trim()) return toast.error("Please enter OTP");

    setIsVerifyingOtp(true);
    try {
      const response = await fetch(`${API_BASE}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verifyId, otp }),
      });

      const result = await response.json();

      if (result.status === "VERIFIED") {
        setIsOtpVerified(true);
        toast.success("OTP Verified!");
        handleSubmitLead();
      } else {
        toast.error(result.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error("Error verifying OTP");
    }
    setIsVerifyingOtp(false);
  };

  // Submit Lead
  const handleSubmitLead = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/create-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Lead Data:", data);

      if (response.ok) {
        toast.success("Lead submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          configuration: "",
          whatsappOptIn: true,
          source: "source",
          subsource: "subsource",
          countryCode: "+91",
          country: "India",
          url: window.location.href,
          refererUrl: document.referrer,
        });
        setOtp("");
        setIsOtpSent(false);
        setIsOtpVerified(false);
        setShowOtpField(false);
        setVerifyId("");
      } else {
        toast.error(data.message || "Lead submit failed");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Submit error");
    }
  };

  return (
    <div
      id="contact-form"
      className="flex justify-center items-center md:mx-32 mx-10 my-0 md:mt-5"
    >
      <form
        className="w-full p-4 rounded-lg shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
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

              {isOtpSent && !isOtpVerified && showOtpField && (
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    style={{ width: "100%" }}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border px-4 py-2 rounded-md mb-2 w-full"
                  />
                  <button
                    onClick={handleOtpVerify}
                    disabled={isVerifyingOtp}
                    className="px-4 py-2 border border-white bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition duration-200"
                  >
                    {isVerifyingOtp ? "Verifying OTP..." : "Verify OTP"}
                  </button>
                </div>
              )}

              {isOtpVerified && (
                <button
                  onClick={handleSubmitLead}
                  className="px-6 py-2 bg-blue-700 text-white rounded-xl mt-4"
                >
                  Submit Form
                </button>
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
                            className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block w-full px-4 py-2 text-sm`}
                          >
                            {item}
                          </button>
                        )}
                      </Menu.Item>
                    ),
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