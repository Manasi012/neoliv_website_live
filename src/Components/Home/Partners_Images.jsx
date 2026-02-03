import React from "react";
import PPTSlides from "../../Assets/imgs/PPTSLIDE0807.png";


const Partners_Images = () => {
  return (
    <>
      <div className="text-center md:pt-20 pt-10">
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium md:mb-14">
          Seasoned Industry Professionals
        </h4>
      </div>
      <div className="md:pt-0 pt-10 md:mx-20 mx-5 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="justify-self-center">
            <img
              src={PPTSlides}
              alt="partners image"
              className="w-full"
            />
          </div>
          {/* <div className="justify-self-center">
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilx1heto2partner1.jpg"
              alt="partners image"
              className="w-full border border-blue-950"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Partners_Images;
