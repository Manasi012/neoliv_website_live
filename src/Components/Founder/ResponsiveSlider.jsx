import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ResponsiveSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 17 / 15,
    // slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
      className="md:hidden slider-container bg_light md:px-5 md:-ml-24"
      data-aos="zoom-in"
      data-aos-delay="600"
      data-aos-duration="1000"
    >
      <Slider {...settings} className="hide-arrows">
        <div className="flex justify-center md:justify-start items-center md:items-start md:mx-2 md:px-4">
          <div className="bg-white ml-16 md:h-24 h-32 px-5 py-4 w-full shadow-lg rounded-lg my-5">
            <p className="md:ps-3 text-center">
              Joined Godrej Properties in 2010, stepped down on December 31,
              2022
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center md:items-start mx-2 px-4">
          <div className="bg-white ml-16 md:h-24 h-32 px-5 py-4 w-full shadow-lg rounded-lg my-5">
            <p className="md:ps-3 text-center">
              MD & CEO of Godrej Properties <br /> since 2017
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center md:items-start mx-2 px-4">
          <div className="bg-white ml-16 md:h-24 h-32 px-5 py-4 w-full shadow-lg rounded-lg my-5">
            <p className="md:ps-3 text-center">
              Previously Head of Business Development, Head of Region and
              Executive Director
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center md:items-start mx-2 px-4">
          <div className="bg-white ml-16 md:h-24 h-32 px-5 py-4 w-full shadow-lg rounded-lg my-5">
            <p className="md:ps-3 text-center">
              BE & MBA Strategy and Marketing (Indian Institute of Management,
              Calcutta)
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
