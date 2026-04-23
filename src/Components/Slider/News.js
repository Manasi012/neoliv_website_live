import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import pdfFile7 from '../../Assets/pdf/vccircle.pdf';
import pdfFile8 from '../../Assets/pdf/financial.pdf';
import pdfFile9 from '../../Assets/video/MohitMalhotraonNDTVPropertyShow.mp4';
import pdfFile10 from '../../Assets/video/dainik_bhaskar.mp4';
import pdfFile11 from '../../Assets/video/MM_TV18.mp4';
import pdfFile13 from '../../Assets/pdf/UpdatedPressReleaseReport_NeoLiv.pdf';
import pdfFile14 from '../../Assets/pdf/Alibaug_Pdf.pdf';
import pdfFilePR from '../../Assets/pdf/FinalPressreleasereport.pdf';
import pdfFileArticle1 from '../../Assets/pdf/NeoLivRs600crProject.pdf';
import pdfFileArticle2 from '../../Assets/pdf/Real-estate-startup.pdf';




const cardData = [
    {
    description: "NeoLiv inks management agreement for 47-acre mixed-use villa project in Khopoli, near Mumbai",
    imageUrl: "https://magicpage-dev.propstory.com/ImageUploads/Image_Upload/1nnx5eapkmhkaux83.webp",
    buttonText: "News",
    newsUrl: "https://www.hindustantimes.com/real-estate/neoliv-inks-management-agreement-for-47-acre-mixed-use-villa-project-in-khopoli-near-mumbai-101757578772374.html#google_vignette"
  },

   {
    description: "About Rs. 600 cr project in Khopoli",
    imageUrl:
      "https://magicpage-dev.propstory.com/ImageUploads/Image_Upload/1nnx5eapkmhkaux83.webp",
    buttonText: "News",
    pdfUrl: pdfFileArticle1,
  },

  {
    description: "Real estate startup Neoliv plots ₹1,000 crore sales in first year of operations",
    imageUrl:
      "https://magicpage-dev.propstory.com/ImageUploads/Image_Upload/1nnx5eapkmhkaux83.webp",
    buttonText: "News",
    pdfUrl: pdfFileArticle2,
  },

    {
    description: "NeoLiv sells 263 residential plots for over Rs 300 crore in Haryana",
    imageUrl:
      "https://propstory.in/Neoliv/press-release-image.jpg",
    buttonText: "News",
    pdfUrl: pdfFilePR,
  },

  {
    description: "NeoLiv ties up with Royal Green Realty to develop Rs 600 cr housing project",
    imageUrl:
      "https://propstory.in/Neoliv/press-release-image.jpg",
    buttonText: "News",
    pdfUrl: pdfFile13,
  },
  {
    description: "NeoLiv inks pact to acquire 12 acres in Alibaug to develop mixed-use villa project",
    imageUrl:
      "https://propstory.in/Neoliv/press-release-image.jpg",
    buttonText: "News",
    pdfUrl: pdfFile14,
  },

  {
    description: "Mohit Malhotra’s official confirmation on....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdejjvcccircle.png",
    buttonText: "News",
    pdfUrl: pdfFile7,
  },
  {
    description: "Mohit Malhotra, sharing his expert opinion....",
    buttonText: "News",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdj34NDTV.jpg",
    iframeUrl: pdfFile9, // Add the iframe URL
  },
  {
    description: "Mohit Malhotra (ex MD and CEO of Godrej Prop....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdw2yDainik-Bhaskar.jpg",
    buttonText: "News",
    iframeUrl: pdfFile10,
  },
  {
    description: "Mohit Malhotra’s official confirmation on....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbe3liTV-18.jpg",
    buttonText: "News",
    iframeUrl: pdfFile11,
  },
  {
    description: "Mohit Malhotra, the former managing director....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbeb10Financial-Express.jpg",
    buttonText: "News",
    pdfUrl: pdfFile8,
  },


];

function News() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleCardClick = (pdfUrl, iframeUrl, newsUrl) => {
  // Priority: newsUrl > pdfUrl > iframeUrl
  const urlToOpen = newsUrl || pdfUrl || iframeUrl;
  if (urlToOpen) {
    window.open(urlToOpen, "_blank");
    setSelectedUrl(urlToOpen);
  }
};

  const CustomPrevArrow = ({ onClick }) => (
    <div className="hidden md:block">
      <button
        className="absolute md:top-40 -inset-12 z-40 top-1/2 transform -translate-y-1/2 hover:text-blue-950 rounded-full w-10 h-10 flex justify-center text-blue-950 items-center"
        onClick={onClick}
      >
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
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </button>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="hidden md:block">
      <button
        className="absolute md:top-40 -right-12 z-40 transform -translate-y-1/2 hover:text-blue-950 rounded-full w-10 h-10 flex justify-center items-center"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-blue-950"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    prevArrow: <CustomPrevArrow />, // Custom prev arrow
    nextArrow: <CustomNextArrow />, // Custom next arrow
  };
  return (
    <div className="slider-container py-10 text-center relative">
      <Slider className="md:mx-20" {...settings}>
        {cardData.map((card, index) => (
          <div className="md:px-2 my-6 md:ml-0 ml-8 px-3" key={index}>
            <Card
              description={card.description}
              imageUrl={card.imageUrl}
              buttonText={card.buttonText}
              onClick={() => handleCardClick(card.pdfUrl, card.iframeUrl, card.newsUrl)} // Pass both URLs to the click handler
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default News;
