import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Headercopy = () => {
  let [isOpen, SetisOpen] = useState(false);

  return (
    <div className="pt-5 w-screen z-30 absolute">
      <div className="md:px-10 px-7 md:mt-0  md:flex justify-between items-center md:mx-6">
        <div className="w-48 desktop_logo">
          <NavLink to="/" className="underline hover:underline cursor-pointer">
            {/* <img src={Logo} alt="Neoliv Logo" /> */}
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwt7392bneoliv_logo%20%20white.png"
              alt="logo"
            />
          </NavLink>
        </div>

        <div
          onClick={() => SetisOpen(!isOpen)}
          className="absolute right-8 top-8 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-neutral-950 md:bg-transparent md:static md:z-auto z-20 desktop_ul left-0 w-full md:w-auto md:pl-0 pl-8 lg:font-extrabold me-8 transition-all duration-500 ease-out ${
            isOpen ? "top-[6rem]" : "top-[-490px]"
          }`}
        >
          <li
            className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            <HashLink
              to="/#about"
              smooth
              className="text-white  hover:text-blue-700 duration-500 scroll-smooth"
            >
              ABOUT US
            </HashLink>
          </li>
          <li
            className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            <HashLink
              to="/#threePillars"
              smooth
              className="text-white  hover:text-blue-700 duration-500 scroll-smooth"
            >
              NEOLIV PILLARS
            </HashLink>
          </li>
          <li
            className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            <HashLink
              to="/#team"
              smooth
              className="text-white  hover:text-blue-700 duration-500 scroll-smooth"
            >
              TEAM
            </HashLink>
          </li>
          <li
            className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            <HashLink
              to="/#news&insights"
              smooth
              className="text-white  hover:text-blue-700 duration-500 scroll-smooth"
            >
              NEWS & INSIGHTS
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headercopy;
