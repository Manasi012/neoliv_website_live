import React from "react";
import FinalLogo from "../Assets/imgs/NeoLivInsignia.png";

const Insignia = () => {
  return (
    <div className="bg-white flex justify-center relative">
      <img
        src={FinalLogo}
        alt="Insignia"
        className="md:w-2/6 w-full -top-[28rem] opacity-70 absolute"
      />
    </div>
  );
};

export default Insignia;
