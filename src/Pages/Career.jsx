import React from "react";
import career from "..//Assets/imgs/careers.jpg";
import careermob from "..//Assets/imgs/careermmob.jpg";
import BackButton from "../Components/BackButton";

// This is the updated page

const Career = () => {
  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div className="relative md:block  hidden">
        <img src={career} alt="sustainability" className="md:w-screen w-full" />
        </div>

        <div className="relative md:hidden">
        <img src={careermob} alt="sustainability" className="md:w-screen w-full" />
        </div>

        <div className="py-10 text-center">
          <div className="flex justify-center">
          <button
            onClick={() => (window.location.href = "mailto:admin@neoliv.in")}
            className="flex items-center bg_indigo   md:px-6 px-2 md:py-3 py-2 rounded-xl text-white md:text-lg text-sm font-medium"
          >
            Connect With Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          </div>
        </div>
    </div>
  );
};

export default Career;
