import React from "react";
import Bluelogo from "../../Assets/imgs/neoliv_logo_blue.png";
import LocationIcon from "../../Assets/imgs/locationicon.png";
import HorizontalForm from "../Form/HorizontalForm";
import Auth from "../Form/Auth";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 w-screen">
        <div className="py-3 md:flex md:justify-between justify-center items-center">
          <div
            className="md:w-52 md:ml-20"
            data-aos="zoom-out"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <img src={Bluelogo} alt="" />
          </div>
          <div
            className="md:me-40 flex text-center justify-center md:px-0 px-0 text-white"
            data-aos="zoom-out"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <h6 className="md:text-lg text-3xl">
              India’s foremost fund led developer
            </h6>
          </div>
        </div>
        <hr className="md:mx-32 mx-10 mt-12 md:mt-0 md:me-40" />

        <div className="text-white flex md:justify-start justify-center md:pt-5 pt-20">
          <div
            className="md:ml-32"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl md:pb-0 pb-10">Plots in Gated Township</h3>
          </div>
        </div>

        <HorizontalForm />

        {/* <Auth /> */}
      

        <div className="text-white flex md:justify-start justify-center md:pt-5 pt-20">
          <div
            className="md:ml-32"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl md:pb-0 pb-10">Our Addresses</h3>
          </div>
        </div>

        <div className="flex flex-wrap justify-between text-white md:mx-20">
          <div
            className="w-full tab_footer md:w-[44%] footer_box md:p-10 p-6 rounded-lg md:mx-10 md:m-10 mx-5"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div className="flex items-center">
              <img src={LocationIcon} alt="" />
              <h1 className="ps-3">Mumbai MMR</h1>
            </div>
            <div className="md:flex">
              <div className="pt-5 md:pb-0 pb-5">
                <p className="md:pe-10 md:ps-3">
                  403, 4th Floor, Tower B, The Capital, G Block, Bandra Kurla
                  Complex, Bandra (East), <br /> Mumbai - 400051. Maharashtra,
                  India
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15084.041004440882!2d72.861825!3d19.0632869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e63255a32f%3A0xb36949f4649e6f15!2sThe%20Capital!5e0!3m2!1sen!2sin!4v1717046568892!5m2!1sen!2sin"
                width="100%"
                height="180"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div
            className="w-full tab_footer tab_left_margin md:w-[44%] footer_box md:p-10 p-6 rounded-lg md:mx-10 mx-5 m-10 md:ml-0"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <div className="flex items-center">
              <img src={LocationIcon} alt="" />
              <h1 className="ps-3">Delhi NCR</h1>
            </div>
            <div className="md:flex">
              <div className="pt-5 md:pb-0 pb-5">
                <p className="md:pe-10 md:ps-3">
                  Level 6, Two Horizon Centre, Golf Course Road, DLF Phase 5,
                  Gurugram, Haryana-122002, India
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.798526687844!2d77.0962813!3d28.4509347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b58a137a1b%3A0x769c85e8414cd673!2sCorporatedge%20Two%20Horizon%20Centre!5e0!3m2!1sen!2sin!4v1717046727666!5m2!1sen!2sin"
                width="100%"
                height="180"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
