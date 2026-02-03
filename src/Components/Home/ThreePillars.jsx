import React from "react";
import Accordion from "../Accordian";
import { NavLink } from "react-router-dom";

const ThreePillars = () => {
  return (
    <>
      <div
        className="bg-custom bg-cover bg-center h-auto md:px-8 px-4 py-10"
        id="threePillars"
      >
        <div className="text-center py-10">
          <h4 className="md:text-3xl text-4xl text-white font-medium">
            Our Key Pillars
          </h4>
        </div>

        <div className="hidden md:block" id="Pillars">
          <div className="flex flex-wrap mx-16">
            <div
              className="w-full sm:w-1/2 md:w-1/3 p-4 pe-28 tab_pe"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              <div className="p-6 rounded-lg">
                <h2 className="text-8xl font-extrabold mb-2 text-[#28285a]">
                  1
                </h2>
                <div className="text-3xl text-white font-medium -mt-14 ml-1">
                  <p>
                    Professionally <br />
                    Built
                  </p>
                </div>
                <div className="my-10 text-white text-lg">
                  <ul className="list-disc space-y-10 ml-4">
                    <li>
                      Founded by Mohit Malhotra (ex MD & CEO of Godrej
                      Properties)
                    </li>
                    <li>
                      150+ <span className="tab_span1">years</span> cumulative
                      experience
                    </li>
                    <li>Equity Partnership for Key Management</li>
                  </ul>
                </div>
                <NavLink
                  to="/professionallybuilt"
                  className="inline-flex items-center hover:text-white text-[#000088] font-semibold pt-4 px-4 rounded md:absolute bottom-8 text-lg"
                >
                  Discover
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 ml-2 transition-transform duration-6000 ease-in-out transform-gpu hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>

            <div
              className="w-full sm:w-1/2 md:w-1/3 p-4 pe-28 tab_pe"
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="800"
            >
              <div className="p-6 rounded-lg">
                <h2 className="text-8xl font-extrabold mb-2 text-[#28285a]">
                  2
                </h2>
                <div className="text-3xl text-white font-medium -mt-14 ml-1">
                  <p>
                    Financially <br />
                    Secure
                  </p>
                </div>
                <div className="my-10 text-white text-lg">
                  <ul className="list-disc space-y-10 ml-4">
                    <li>
                      Fund backed model - 360 ONE as Strategic equity investor
                    </li>
                    <li>SEBI approved CAT II domestic equity AIF</li>
                    <li>
                      Amongst top developers of{" "}
                      <span className="tab_span">India</span>
                    </li>
                  </ul>
                </div>
                <NavLink
                  to="/financiallysecure"
                  className="inline-flex items-center hover:text-white text-[#000088] font-semibold pt-4 px-4 rounded md:absolute bottom-8 text-lg"
                >
                  Discover
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 ml-2 transition-transform duration-6000 ease-in-out transform-gpu hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>

            <div
              className="w-full sm:w-1/2 md:w-1/3 p-4 pe-28 tab_pe"
              data-aos="fade-up"
              data-aos-delay="1900"
              data-aos-duration="800"
              id="ComePillars"
            >
              <div className="p-6 rounded-lg">
                <h2 className="text-8xl font-extrabold mb-2 text-[#28285a]">
                  3
                </h2>
                <div className="text-3xl text-white font-medium -mt-14 ml-1">
                  <p>
                    Customer <br />
                    Centric
                  </p>
                </div>
                <div className="my-10 text-white text-lg">
                  <ul className="list-disc space-y-10 ml-4">
                    <li>
                      Futuristic tech-enabled consumer interface and solution
                    </li>
                    <li>Relationship mindset & long-term commitment</li>
                    <li>
                      Product and <span className="tab_span">quality</span>{" "}
                      excellence
                    </li>
                  </ul>
                </div>
                <NavLink
                  to="/customercentric"
                  className="inline-flex items-center text-lg hover:text-white text-[#000088] font-semibold pt-4 px-4 rounded md:absolute bottom-8"
                >
                  Discover
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 ml-2 transition-transform duration-6000 ease-in-out transform-gpu hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default ThreePillars;
