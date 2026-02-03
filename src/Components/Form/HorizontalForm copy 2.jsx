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

  const handleOtpSend = async () => {
    // Validate the phone number to ensure it's an Indian number
    if (!formData.mobile.startsWith("91") || formData.mobile.length !== 12) {
      toast.error("Only Indian phone numbers (+91) are allowed.");
      return;
    }

    setIsSendingOtp(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append("apiKey", "5r2Z46BY5lWluppWbl6cRGxlBaHrL3");
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        configId: "7508fe3c-f22e-4cb7-be73-f9d616d0dc15",
        to: formData.mobile,
      });

      const response = await fetch("https://api.azmarq.com/v1/verify", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      });

      const result = await response.json();
      console.log("OTP API Response:", result);
      if (response.ok) {
        setVerifyId(result.verifyId);
        setIsOtpSent(true);
        toast.success("OTP sent successfully!");
      } else {
        toast.error(result.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending OTP.");
    }
    setIsSendingOtp(false);
  };

  const handleOtpVerify = async () => {
    setIsVerifyingOtp(true);
    try {
      const response = await fetch(
        "https://api.azmarq.com/v1/verify/validate",
        {
          method: "POST",
          headers: {
            apiKey: "5r2Z46BY5lWluppWbl6cRGxlBaHrL3",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ verifyId, otp }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setIsOtpVerified(true);
        toast.success("OTP verified successfully!");
        await handleSubmit(); // Automatically submit the form
      } else {
        toast.error(result.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred while verifying OTP.");
    }
    setIsVerifyingOtp(false);
  };
const trackGoogleAdsConversion = () => {
    if (window.gtag) {
      // Fire the specific conversion pixel
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17689581194/9adRCKXSxrYbEIqthvNB'
      });
      console.log('Google Ads conversion tracked: AW-17689581194/9adRCKXSxrYbEIqthvNB');
    } else {
      console.warn('Google Ads gtag not available');
    }
  };

  const handleSubmit = async () => {
  try {
    const cleanedMobile = formData.mobile.trim();
    const submissionData = {
      ...formData,
      mobile: cleanedMobile.startsWith("91")
        ? cleanedMobile.slice(2)
        : cleanedMobile,
    };

    // Multiple webhook endpoints
    const webhookUrls = [
      "https://hook.eu1.make.com/ln1s5rr8igxy1ni3a744t2i3ppqb41kn", // Original webhook
      "https://hook.eu1.make.com/wsoywka5au8u099ed9wzgck8ymudgzsc"  // New webhook for PS team
    ];

    // Send data to multiple webhooks
    const webhookPromises = webhookUrls.map(url =>
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })
    );

    const responses = await Promise.all(webhookPromises);
    const allSuccessful = responses.every(response => response.ok);

    if (allSuccessful) {
      toast.success("Form submitted successfully!");

      // ✅ Fire Taboola Pixel here
      if (window._tfa) {
        window._tfa.push({ notify: 'event', name: 'lead', id: 1213114 });
        console.log("✅ Taboola Pixel (lead event) fired successfully!");
      } else {
        console.warn("⚠️ Taboola Pixel (_tfa) not found on window object");
      }

      // ✅ (Optional) Fire Google Ads conversion too
      trackGoogleAdsConversion();

      setFormData({
        ...formData,
        name: "",
        email: "",
        mobile: "",
        configuration: "",
        whatsappOptIn: true,
      });
      setIsOtpSent(false);
      setIsOtpVerified(false);
      setOtp("");
    } else {
      const failedWebhooks = [];
      responses.forEach((response, index) => {
        if (!response.ok) {
          failedWebhooks.push(`Webhook ${index + 1}`);
        }
      });

      if (failedWebhooks.length === responses.length) {
        toast.error("Failed to submit form to all webhooks. Please try again.");
      } else {
        toast.warning(`Form submitted successfully, but ${failedWebhooks.join(', ')} failed.`);

        // Still fire pixel if at least one succeeded
        if (window._tfa) {
          window._tfa.push({ notify: 'event', name: 'lead', id: 1213114 });
          console.log("✅ Taboola Pixel fired (partial success)");
        }

        setFormData({
          ...formData,
          name: "",
          email: "",
          mobile: "",
          configuration: "",
          whatsappOptIn: true,
        });
        setIsOtpSent(false);
        setIsOtpVerified(false);
        setOtp("");
      }
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("An error occurred. Please try again later.");
  }
};



  // const handleSubmit = async () => {
  //   try {
  //     const cleanedMobile = formData.mobile.trim();
  //     const submissionData = {
  //       ...formData,
  //       mobile: cleanedMobile.startsWith("91")
  //         ? cleanedMobile.slice(2)
  //         : cleanedMobile,
  //     };

  //     // Multiple webhook endpoints
  //     const webhookUrls = [
  //       "https://hook.eu1.make.com/ln1s5rr8igxy1ni3a744t2i3ppqb41kn", // Original webhook
  //       "https://hook.eu1.make.com/wsoywka5au8u099ed9wzgck8ymudgzsc"  // New webhook
  //     ];

  //     // Send data to multiple webhooks using Promise.all for parallel execution
  //     const webhookPromises = webhookUrls.map(url =>
  //       fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(submissionData),
  //       })
  //     );

  //     const responses = await Promise.all(webhookPromises);
      
  //     // Check if all webhooks were successful
  //     const allSuccessful = responses.every(response => response.ok);
      
  //     if (allSuccessful) {
  //       toast.success("Form submitted successfully to all webhooks!");
  //       setFormData({
  //         ...formData,
  //         name: "",
  //         email: "",
  //         mobile: "",
  //         configuration: "",
  //         whatsappOptIn: true,
  //       });
  //       setIsOtpSent(false);
  //       setIsOtpVerified(false);
  //       setOtp("");
  //     } else {
  //       // Check which webhooks failed
  //       const failedWebhooks = [];
  //       responses.forEach((response, index) => {
  //         if (!response.ok) {
  //           failedWebhooks.push(`Webhook ${index + 1}`);
  //         }
  //       });
        
  //       if (failedWebhooks.length === responses.length) {
  //         toast.error("Failed to submit form to all webhooks. Please try again.");
  //       } else {
  //         toast.warning(`Form submitted successfully, but ${failedWebhooks.join(', ')} failed.`);
  //         // Still reset form if at least one webhook succeeded
  //         setFormData({
  //           ...formData,
  //           name: "",
  //           email: "",
  //           mobile: "",
  //           configuration: "",
  //           whatsappOptIn: true,
  //         });
  //         setIsOtpSent(false);
  //         setIsOtpVerified(false);
  //         setOtp("");
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast.error("An error occurred. Please try again later.");
  //   }
  // };



  return (
    <div id="contact-form" className="flex justify-center items-center md:mx-32 mx-10 my-0 md:mt-5">
      <form className="w-full p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
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
                  {/* Phone number input and Send OTP button */}
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

              {isOtpSent && (
                <>
                  {/* OTP input and Verify OTP button */}
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
                      className="px-4 py-2 border border-white bg-green-600 text-white font-mediumhover:bg-green-700 transition duration-200"
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
          {/* {isOtpVerified && (
            <div
              className="flex justify-center mt-4"
              style={{ margin: "0 auto" }}
            >
              <button
                type="submit"
                className="px-6 py-2 border border-white bg-blue-950 text-white font-medium rounded-xl hover:bg-blue-950 transition duration-200"
              >
                Submit
              </button>
            </div>
          )} */}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default HorizontalForm;
