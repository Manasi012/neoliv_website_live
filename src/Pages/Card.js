import React from "react";

const Card = ({ imageUrl, description, date, linkUrl }) => {
  const handleCardClick = () => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div
      className="card tab_card text-light border border-blue-950 rounded-lg p-4 md:h-[27rem] h-96  shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <img src={imageUrl} className="card-img" alt="Card" />
      <div className="card-body text-center space-y-3 py-2">
        <p className="card-text font-medium">{date}</p>
        <h5 className="card-title font-medium md:px-6 px-0 py-4">
          {description}
        </h5>
      </div>
    </div>
  );
};

export default Card;
