import React from "react";
import Birdsfly from "../../Assets/imgs/birdsfly.png";
import FinalLogo from "../../Assets/imgs/NeoLivInsignia.png";
// import MiddleShawdo from "../Assets/imgs/MiddleShawdo.png";

const OurPurpose = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-40  tab_margin px-3 relative">
      <div>
        {/* <img src={MiddleShawdo} alt="" className="absolute md:-top-80 w-screen -top-52" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000"/> */}
      </div>
      <div
        className="md:w-1/2"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <img
          src={Birdsfly}
          alt="purpose"
          className="w-full md:h-[500px] h-auto"
        />
      </div>
      <div
        className="md:w-1/2 md:h-[500px] h-[440px] relative md:p-20 px-8 py-0 bg_indigo md:-ml-4 md:rounded-none rounded-xl md:-m-0 -mt-5 text-white"
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <img
          src={FinalLogo}
          alt="FinalLogo"
          className="absolute md:-left-[6.5rem] mobile-center md:top-80 opacity-30 md:w-52 w-40"
        />

        <h2
          className="text-4xl md:mt-0 mt-32 font-normal absolute md:-left-[5rem] left-16 md:top-14 opacity-30 md:w-52 w-40"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          Our&nbsp;&nbsp;Purpose
        </h2>
        <p
          className="md:pt-40 pt-20 pb-4 md:me-56 tab_me lg:me-0 text-xl leading-8 absolute md:top-7 top-36"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          {/* To re-ignite the joy of home owning and living experience, by being
          the most customer-centric developer in India */}
          To build joyful communities and living experiences through people, quality and service excellence
        </p>
      </div>
    </div>
  );
};

export default OurPurpose;
