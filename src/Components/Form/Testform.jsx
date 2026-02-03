import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HorizontalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    bhkType: "1BHK",
    source: "source",
    subsource: "subsource",
    countryCode: "+91",
    country: "India",
    url: window.location.href,
    refererUrl: document.referrer,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value, countryData) => {
    setFormData({
      ...formData,
      mobile: value,
      countryCode: countryData.countryCode.toUpperCase(),
      country: countryData.name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      bhk_type: formData.bhkType,
      source: formData.source,
      subsource: formData.subsource,
      country_code: formData.countryCode,
      country: formData.country,
      url: formData.url,
      referer_url: formData.refererUrl,
    };

    try {
      const response = await fetch(
        "https://hook.eu1.make.com/ln1s5rr8igxy1ni3a744t2i3ppqb41kn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          name: "",
          email: "",
          mobile: "",
          source: "source",
          subsource: "subsource",
          countryCode: "+91",
          country: "India",
          url: window.location.href,
          refererUrl: document.referrer,
        });
      } else {
        toast.error("Failed to submit the form", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      toast.error("There was an error submitting the form", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="flex justify-center items-center md:mx-32 mx-10 my-0 md:mt-5">
      <form
        className="w-full md:p-4 py-10 px-4 footer_box rounded-lg shadow-md space-y-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border-0 border-b border-blue-950 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="flex-1 mb-4 md:mb-0">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border-0 border-b border-blue-950 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="flex-1 mb-4 md:mb-0">
            <PhoneInput
              country={"in"}
              value={formData.mobile}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                border: "none",
                padding: "20px",
                borderRadius: "0",
                paddingLeft: "3rem",
              }}
               
              dropdownStyle={{ color: "#000" }}
              containerClass="phone-input"
              inputClass="phone-input-field"
            />
          </div>

           {/* Radio Buttons for 1BHK and 2BHK */}
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="bhkType"
              value="1BHK"
              checked={formData.bhkType === "1BHK"}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="text-white font-semibold">1BHK</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="bhkType"
              value="2BHK"
              checked={formData.bhkType === "2BHK"}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="text-white font-semibold">2BHK</span>
          </label>
        </div>

          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <button
              type="submit"
              className="px-6 py-2 border border-white bg-blue-950 text-white font-medium rounded-xl hover:bg-blue-950 transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default HorizontalForm;
