import React from "react";

const Herosection = () => {
  return (
    <>
      <div className="relative">
        <div className="hidden md:block">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilx4c8otadesktop_neoliv_final.jpg"
            alt="bannerimage"
            className="w-full h-screen sm_screen banner_tab"
          />
        </div>
        <div className="md:hidden">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilx4dj0dxmobile_neoliv_final.jpg"
            alt="bannerimage"
            className="w-full h-screen"
          />
        </div>
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:mx-10">
          {/* <h1
            className="text-white uppercase md:text-xl md:-mt-[29rem]  -mt-[29rem] md:leading-[50px] leading-normal font-medium text-sm px-2 tablet_headline"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            India’s foremost integrated fund led residential real estate
            developer
          </h1> */}
          <div className="absolute md:-bottom-8 bottom-2">
            <p
              className="text-center md:px-0 px-3 tablet_para py-20 text-white md:leading-7 leading-5 font-medium md:text-[16px] text-sm"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              We are a unique integrated residential real estate platform with
              both fund management business and an in house development arm
              founded by Mohit Malhotra (ex MD & CEO of Godrej Properties), top
              industry experts and 360 ONE (Formerly IIFL Wealth)- India’s
              leading wealth management firm with more than INR 6 Lakh crore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
