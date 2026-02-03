import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import pdfFile1 from '../../Assets/pdf/NeoLivUpdate-April2023.pdf';
import pdfFile2 from '../../Assets/pdf/CEO_Letter_July2023.pdf';
import pdfFile3 from '../../Assets/pdf/NeoLivCEOLetterNovember2023.pdf';


const cardData = [
    {
    description: "November 2023",
    buttonText: "Ceo NewsLetter",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg",
    pdfUrl: pdfFile3,
  },
    {
    description: "July 2023",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg",
    buttonText: "Ceo NewsLetter",
    pdfUrl: pdfFile2,
  },

  {
    description: "April 2023",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg",
    buttonText: "Ceo NewsLetter",
    pdfUrl: pdfFile1,
  },

];

function CeoLetter() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      <Slider className="md:mx-10" {...settings}>
        {cardData.map((card, index) => (
          <div
            className="md:px-2 my-6 md:ml-0 ml-8 px-3 text-center"
            key={index}
          >
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

export default CeoLetter;
