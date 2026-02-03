import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import pdfFile4 from '../../Assets/pdf/NeoLivPressRelease-March2024.pdf';
import pdfFile5 from '../../Assets/pdf/NEOLIVLaunchEvent.pdf';

const cardData = [
    {
    description: "June 2023: 360 ONE Launch event",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg",
    buttonText: "Events",
    pdfUrl: pdfFile5,
  },
  {
    description: "March 2024- First close of USD 150 mn Fund",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg",
    buttonText: "Events",
    pdfUrl:pdfFile4,
  },

];

function Events() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
    setSelectedPdf(pdfUrl);
  };

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 17 / 15,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 17 / 15,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10">
      <Slider className="md:mx-64" {...settings}>
        {cardData.map((card, index) => (
          <div className="md:px-2 my-6 md:ml-0 ml-8 px-3" key={index}>
            <Card
              description={card.description}
              imageUrl={card.imageUrl}
              buttonText={card.buttonText}
              onClick={() => handleCardClick(card.pdfUrl)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Events;
