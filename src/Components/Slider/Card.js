import React from "react";

const Card = ({ imageUrl, description, buttonText, newsUrl, onClick }) => {

  return (
    <div
      className="max-w-sm cursor-pointer md:h-[19rem] h-[19rem] rounded  overflow-hidden shadow-lg relative"
      onClick={onClick}
      data-aos="zoom-in"
      data-aos-delay="800"
      data-aos-duration="800"
    >
      <img
        className="w-full border border-gray-300"
        src={imageUrl}
        alt="Card"
      />
      <button className="absolute -mt-10 left-5 bg_indigo text-white font-bold py-1 px-3 rounded-xl text-[13px]">
        {buttonText}
      </button>
      <div className="px-6 py-4">
        <p className="font-medium hover:underline">{description}</p>
      </div>
    </div>
  );
};

export default Card;
