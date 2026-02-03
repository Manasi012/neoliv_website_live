import React from "react";
import MumbaiMmr from "..//Assets/imgs/MumbaiMmr.jpg";
import DelhiNcr from "..//Assets/imgs/DelhiNcr.jpg";
import { KnowMoreButton } from "../Components/KnowMoreButton";

export const UpcomingLaunches = () => {
  return (
    <>
      <div className="py-10 text-center">
        <h3
          className="md:text-4xl text-3xl text-blue-950"
          data-aos="zoom-out"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          Upcoming Launches
        </h3>
      </div>
      <div className="md:mx-40 lg:mx-20 mx-2 pb-10  px-0">
        <div
          className="md:flex block items-center"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <img src={MumbaiMmr} alt="MumbaiMmr" className="md:w-[45%] md:pe-6" />
          <div className="text-left">
            <h3 className="font-bold text-2xl text-blue-950 md:pt-0 pt-5">
              Mumbai/MMR
            </h3>
            <p className="py-3 text-lg">
              A 20 acre master planned community within 10 minutes of Kihim
              Beach offering Plots and Villas.
            </p>
            <a
              href={`mailto:chaitanya.rajwade@neoliv.in?subject=Alibaug%20Project&body=Hello%20Team,%0A%0APlease%20share%20more%20details%20with%20me%20at%20my%20mobile%20no..%0A%0AThanks%0A%0A[name].`}
              className="w-[6rem] flex"
            >
              <KnowMoreButton />
            </a>
          </div>
        </div>

        <div
          className="md:flex block items-center mt-10"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <img src={DelhiNcr} alt="MumbaiMmr" className="md:w-[45%] md:pe-6" />
          <div className="text-left">
            <h3 className="font-bold text-2xl text-blue-950 md:pt-0 pt-5">
              Delhi/NCR
            </h3>
            <p className="py-3 text-lg">
              A 20 acre master planned community within 15 minutes of Delhi
              Border offering Customised Plots.
            </p>
            <a
              href={`mailto:ashish.saxena@neoliv.in?subject=Sonipat%20Project&body=Hello%20Team,%0A%0APlease%20share%20more%20details%20with%20me%20at%20my%20mobile%20no..%0A%0AThanks%0A%0A[name].`}
              className="w-[6rem] flex"
            >
              <KnowMoreButton />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
