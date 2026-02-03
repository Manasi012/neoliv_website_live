import React from "react";
import { HashLink } from "react-router-hash-link";

const FinanciallySecure = () => {
  return (
    <>
      {/* <Bluenavbar />
      <Header /> */}
      <div>
        <HashLink
          to="/#threePillars"
          smooth
          className="scroll-smooth bg-blue-950 text-white z-40  top-[25%] rotate-90 -left-8 font-bold py-1 my-0.5 px-2 fixed flex items-center justify-around "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Back
        </HashLink>
      </div>
      <div
        className="text-center md:py-10 py-6 space-y-4 md:px-0 px-5"
        data-aos="zoom-out"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        {/* <div>
        
      <img src={leftshawdo} alt="" className="-mt-[52rem] absolute md:top-[45rem] -left-[4rem] w-fit z-10 opacity-100"/>
</div> */}

        <h3 className="text-4xl text-blue-950">Financially Secure</h3>
        <p className="text-lg font-medium">
          SEBI approved domestic equity AIF backed by reputed financial
          institutions and ultra HNI’s
        </p>
      </div>
      <div className="md:flex justify-center items-center md:gap-3 gap-0 md:mx-5 mx-2 px-5 ">
        <div
          className="bg-white box_height1 md:h-44 md:p-4 p-4 text-center h-auto py-4 md:w-full shadow-xl rounded-lg md:my-2 my-4"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <br />
          <h3 className="font-bold mb-4 text-[#112E50] text-sm">
            HIGHEST DEGREE OF GOVERNANCE
          </h3>
          <p className="text-center font-medium text-[15px]">
            100% assurance of transparent, SEBI regulated & monitored <br />
            funding.
          </p>
        </div>

        <div
          className="bg-white box_height1 md:h-44 md:p-4 p-4 text-center h-auto py-4 md:w-full shadow-xl rounded-lg md:my-2 my-4"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <br />
          <h3 className="font-bold mb-4 text-[#112E50] text-sm">
            SAFE & SECURE INVESTMENT
          </h3>
          <p className="text-center font-medium text-[15px]">
            Funds can be invested only on licensed land parcels thus eliminating
            approval risks.
          </p>
        </div>

        <div
          className="bg-white box_height1 md:h-44 md:p-4 p-4 text-center h-auto py-4 md:w-full shadow-xl rounded-lg md:my-2 my-4"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <br />
          <h3 className="font-bold mb-4 text-[#112E50] text-sm">
            IN HOUSE DEVELOPMENT ARM
          </h3>
          <p className="text-center font-medium text-[15px]">
            Management team of industry experts with execution expertise of 200
            Mn Sq ft, 90 projects pan India.
          </p>
        </div>

        <div
          className="bg-white box_height1 md:h-44 md:p-4 p-4 text-center h-auto py-4 md:w-full shadow-xl rounded-lg md:my-2 my-4"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <br />
          <h3 className="font-bold mb-4 text-[#112E50] text-sm">
            ON TIME DELIVERY ASSURANCE
          </h3>
          <p className="text-center font-medium text-[15px]">
            Provision of higher equity funding (5X than market norms) for
            timely, high-quality delivery of projects.
          </p>
        </div>
      </div>
      <div className="md:flex justify-center items-center md:mx-20 gap-10 mx-5">
        <div
          className="md:w-3/4 w-full my-6"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwyqxy9zPage13.jpg"
            alt="finance"
            className="desktop_image"
          />
        </div>
      </div>

      <div
        className="text-center md:py-16 py-10 tab_pe space-y-4 md:px-20 px-5 bg-[#f3f3f8]"
        data-aos="zoom-out"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <h3 className="text-4xl text-blue-950">Statregic Equity Inverstor</h3>
        <p className="text-lg font-medium">
          India’s leading wealth and alternates focused asset firm 360 ONE
          manages more than USD 65 Bn AUM and helps over 6800 UHNI families to
          manage, grow and preserve their wealth and legacy.
        </p>
        <div className="md:flex justify-center items-center md:px-10">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k3lwlscycaltKaran%20Bhagat%20With%20Nameh.png"
            alt="360"
            className="md:w-[40%] w-full"
            data-aos="zoom-out"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <p className="text-xl font-[400] text-indigo-500 leading-9">
            <span className="font-bold text-3xl">"</span>Over the past few
            years, there has been a vacuum created in the residential fund and
            development space, where we see strong demand as the country’s
            middle-income segment continues to grow. We are pleased to be
            working with the NEOLIV team who bring on board a highly credible
            track record of capital raise, business development, governance,
            execution and customer satisfaction to further capitalize on
            opportunities in this space and believe this investment will deliver
            strong risk-adjusted returns for all beneficiaries.
            <span className="font-bold text-2xl">"</span>
          </p>
        </div>
      </div>

      <div className="md:mx-20 mx-5 my-16">
        <h3 className="text-4xl text-blue-950">
          Amongst the top developers of India with keen interest from large
          global and domestic investors
        </h3>

        <div className="hidden md:block">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwrn4j4qIcons-Merge-01.png"
            alt="mergeicons"
            className="w-full pt-6"
          />
        </div>

        <div className="md:hidden">
          <div className="md:flex justify-evenly gap-0 py-5">
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwrmfdzgAmong-india.png"
              alt="India"
              className="w-80"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            />
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwrmfuwdResidentialSector.png"
              alt="India"
              className="w-80 -mt-14"
              data-aos="fade-down"
              data-aos-delay="700"
              data-aos-duration="1000"
            />
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwrmm1s1100Equity.png"
              alt="India"
              className="w-80 -mt-14"
              data-aos="fade-down"
              data-aos-delay="900"
              data-aos-duration="1000"
            />

            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwrmhhrmZeroLeverage.png"
              alt="India"
              className="w-80 -mt-14"
              data-aos="fade-down"
              data-aos-delay="1100"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanciallySecure;
