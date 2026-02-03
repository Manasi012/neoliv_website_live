import React from "react";
import FounderImage from "../../Assets/imgs/founder_bg.png";
import Founder_responsive from "./Founder_responsive";
import ResponsiveSlider from "./ResponsiveSlider";

const Founder = () => {
  return (
    <>
      <div className="md:px-16 px-3 bg_light md:pt-24 mt-20 tabp_2">
        <div className="grid grid-cols-1 md:grid-cols-1 items-center pt-20 md:pb-8">
          <div className="mx-auto">
            <div className="text-center">
              <p className="md:-mt-14">
                <span className="text-blue-950 font-semibold">
                  FOUNDER & CEO
                </span>
              </p>
              <h4 className="text-indigo-500 font-semibold text-3xl py-4">
                Mohit Malhotra
              </h4>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="md:flex justify-center items-center md:gap-5 tab_margin gap-0 md:mx-10 mx-5">
            <div
              className="bg-white md:h-[7rem] h-auto py-4 px-3 bg_box_tab md:w-full shadow-xl rounded-lg my-2"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <p className="text-center">
                Joined Godrej Properties in 2010, stepped down on December 31,
                2022
              </p>
            </div>
            <div
              className="bg-white md:h-[7rem] h-auto py-4 px-3 bg_box_tab md:w-full shadow-xl rounded-lg my-2"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <p className="text-center">
                MD & CEO of <br /> Godrej Properties <br /> since 2017
              </p>
            </div>
            <div
              className="bg-white md:h-[7rem] h-auto py-4 px-3 bg_box_tab md:w-full shadow-xl rounded-lg my-2"
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <p className="text-center">
                Executed 90+ projects and 200 Mn Sqft of pan India residential
                development
              </p>
            </div>
            <div
              className="bg-white md:h-[7rem] h-auto py-4 px-3  bg_box_tab md:w-full shadow-xl rounded-lg my-2"
              data-aos="zoom-in"
              data-aos-delay="900"
              data-aos-duration="1000"
            >
              <p className="text-center">
                BE & MBA Strategy and Marketing (Indian Institute of Management,
                Calcutta)
              </p>
            </div>
          </div>
        </div>
        <ResponsiveSlider />
      </div>

      <div className="hidden md:block bg-[#F4F4FB]">
        <div
          className="flex justify-center bg_light md:py-5 py-0"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            src={FounderImage}
            alt="FounderImage"
            className="md:w-[50%] w-full"
          />
        </div>
      </div>

      <div className="md:hidden">
        <Founder_responsive />
      </div>
    </>
  );
};

export default Founder;
