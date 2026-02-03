import React, { useState } from "react";
import Logo from "../../Assets/imgs/neoliv_logo.png";
import { HashLink } from "react-router-hash-link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import InvestorComplaint from "../../Assets/pdf/InvestorComplaint.pdf";


const Header = () => {
  let [isOpen, SetisOpen] = useState(false);

  return (
    <div className="pt-5 w-screen z-50">
      <div className="md:px-10 px-7 md:flex justify-between items-center md:mx-6">
        <div className="w-48 desktop_logo">
          <NavLink to="/" className="underline hover:underline cursor-pointer">
            <img src={Logo} alt="Neoliv Logo" />
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
              className="w-6 h-6"
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
              className="w-6 h-6"
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-blue-950 md:bg-white md:static md:z-auto z-20 left-0 w-full desktop_ul md:w-auto md:pl-0 pl-8 lg:font-extrabold me-8 transition-all duration-500 ease-out ${
            isOpen ? "top-[5rem]" : "top-[-490px]"
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
              className="text-white md:text-black hover:text-blue-700 duration-500"
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
              className="text-white md:text-black hover:text-blue-700 duration-500"
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
              className="text-white md:text-black hover:text-blue-700 duration-500"
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
              className="text-white md:text-black hover:text-blue-700 duration-500"
            >
              NEWS & INSIGHTS
            </HashLink>
          </li>
          <li
            className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full padding_menu justify-center gap-x-1.5 rounded-md  text-white md:text-black padding_menu duration-500">
                  FUND PORTAL
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="menu_list_mob absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="https://www.camsonline.com/Investors/Transactions/KYC/About-KYC" target="_blank"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Investor
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://www.camsonline.com/Investors/Transactions/KYC/About-KYC" target="_blank"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      InLiv Real Estate Fund Investor Login
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href={InvestorComplaint} target="_blank" rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      InLiv Real Estate Fund - Investor Grievance Redressal
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>



        </ul>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default Header;
