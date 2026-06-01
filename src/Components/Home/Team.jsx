import React from "react";
import { useState } from "react";
import Mohit from "../../Assets/imgs/mohit28.png";
import ReadMore from "../ReadMore";

const Team = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <>
      <div
        className="md:mt-10 md:mx-24 mx-2 text-center pt-20 aos-init aos-animate relative z-50"
        id="team"
      >
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-10">
          Key Management Team
        </h4>
      </div>
      <div className="flex flex-col md:flex-row md:mx-52 tab_margin pt-10 md:px-0 px-4">
        <div
          className="md:w-1/2  md:z-40 z-0"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={Mohit} alt="mohit" className="md:w-3/4 w-full rounded-xl" />
        </div>
        <div
          className="md:w-5/6 md:rounded-xl md:z-10 z-0 py-16 px-10 md:pl-40 -mt-4 bg_indigo md:mt-44 md:-ml-56 text-white"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl p-0 font-medium">Mohit Malhotra</h2>
          <p className="m-0 pt-2">Founder & CEO</p>
          <ReadMore />
          {/* <button onClick={toggleImageVisibility} className="border cursor-pointer px-5 py-2 rounded-full" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000">See ALL MEMBERS</button> */}
        </div>
      </div>

      {/* <div className="w-full md:p-10 p-3 z-40">
          {isImageVisible && <img src={partners_neoliv} alt="mohit" className="w-full transition-height duration-5000" />}
        </div> */}

      <div className="flex flex-col md:flex-row md:mx-52 md:py-24 pt-10 tab_margin tab_left">
        <div
          className="md:w-1/2 p-12 bg-blue-950 -ml-4 space-y-9 text-white rounded-l-2xl"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <h2
            className="md:text-[22px] text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            Partnership Model
          </h2>
          <ul className="md:pt-10 md:pe-10 pe-2 md:ml-0 ml-4 font-normal list-disc leading-8 space-y-7">
            <li
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              NeoLiv inducts senior leadership talent as equity partners in{" "}
              <span className="tab_span1">the firm.</span>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="1000"
            >
              Partnership unites the team through a greater alignment of
              interest and integrates an entrepreneurial culture throughout{" "}
              <span className="tab_span1">the platform.</span>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1700"
              data-aos-duration="1000"
            >
              10 equity partners with vast industry experience in the business
              to date.
            </li>
          </ul>
        </div>

        <div
          className="md:w-1/2 p-12 bg-white border border-indigo-300 shadow-lg md:z-20 z-0 -ml-4 space-y-9 text-blue-950"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <h2 className="md:text-[22px] text-3xl font-bold">
            Depth of Experience
          </h2>
          <ul className="md:pt-10 md:pe-5 pe-2 md:ml-0 ml-4 font-normal list-disc leading-8 space-y-7">
            <li
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              Held leadership positions in listed Indian and International real
              estate developers.
            </li>
            {/* <li data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000">
    Collective 100+ years in capital raise, business development, corporate governance, project execution and customer satisfaction.
    </li> */}
            <li
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="1000"
            >
              The platform has secured funding from UHNI family offices and 360
              ONE - India’s leading wealth management firm with more
              than INR 6 Lakh crore
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1700"
              data-aos-duration="1000"
            >
              Strong relationship with land-owners, distribution channel,
              banking & liaisoning agencies.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Team;
