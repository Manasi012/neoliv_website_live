import React from "react";
import { NavLink } from "react-router-dom";
import MyPDF from "../../Assets/pdf/SEBI Certificate.pdf";

const Bluenavbar = () => {
  return (
    <div className="bg_indigo w-screen h-9 text-white">
      <ul className="flex md:justify-end items-center justify-center pt-2 md:me-24 space-x-7">
        <li>
          <a href={MyPDF} target="_blank" rel="noopener noreferrer">
            SEBI Approval
          </a>
        </li>
        <li>
          <NavLink to="/sustainability">Sustainability</NavLink>
        </li>
        <li>
          <NavLink to="/career">Careers</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Bluenavbar;
