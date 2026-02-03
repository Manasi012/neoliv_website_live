import React, { useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import video1 from '../../Assets/imgs/CustomerCentricVideo.mp4';


const CustomerCentric = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnded = () => {
      videoElement.pause();
      setTimeout(() => {
        videoElement.play();
      }, 10000);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  const videoStyle = {
    clipPath: "inset(1px 1px)",
  };

  return (
    <>
      <div>
        <HashLink
          to="/#threePillars"
          smooth
          className="scroll-smooth bg-blue-950 text-white z-50  top-[25%] rotate-90 -left-8 font-bold py-1 my-0.5 px-2 fixed flex items-center justify-around"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Back
        </HashLink>

        {/* <HashLink to="#threePillars">
        <BackButton />
        </HashLink> */}

        {/* <NavLink to="/Neoliv">
        <ScrollLink to="threePillars" smooth={true} duration={500}>
          <BackButton />
        </ScrollLink>
      </NavLink> */}

        <div className="text-center py-10 space-y-5 md:mx-0 mx-2">
          <h3 className="md:text-4xl text-3xl text-blue-950">Customer Centric</h3>
          <p className="text-lg font-medium md:px-0 px-5">
            Customer is at our core through transparent communication,
            tech-enabled interface, relationship manager model and long-term
            commitment.
          </p>
        </div>

        <div className="flex justify-center pb-10">
          <video
            ref={videoRef}
            className="md:w-[50%] w-full"
            autoPlay
            muted
            style={videoStyle}
          >
            <source
              src={video1}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      

      <div className="gap-10 py-10 md:px-2 px-2 space-y-6">
      <div className="md:flex justify-center items-center md:gap-5 gap-0 md:mx-10 mx-5">
        <div className="bg-white text-center md:h-[10rem] box_height2 h-auto py-4 md:w-full px-2 shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-[13px]">Product and Quality</h5>
            <p className='text-center'><br />Consumer Research-led Design and Top-Quality Assurance</p>
            </div>

            <div className="bg-white text-center md:h-[10rem] box_height2 h-auto py-4 md:w-full px-2 shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-[13px]">Personalised customer RM</h5>
            <p className='text-center'><br />NeoLiv will assign Relationship Managers to each customer for dedicated 24x7 service.</p>
            </div>

            <div className="bg-white text-center md:h-[10rem] box_height2 h-auto py-4 md:w-full px-2 shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-[13px]">Property management arm</h5>
            <p className='text-center'><br />NeoLiv has an in-house property management service to ensure minimal maintenance costs.</p>
            </div>

            {/* <div className="bg-white text-center md:h-[10rem] box_height2 h-auto py-4 md:w-full px-2 shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-[13px]">Post handover partnership</h5>
            <p className='text-center'><br />NeoLiv will ensure complete hand-holding till all teething issues are resolved and customers enjoy hassle-free living experience</p>
            </div> */}

<div className="bg-white text-center md:h-[10rem] box_height2 h-auto py-4 md:w-full px-2 shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-[13px]">Post handover partnership</h5>
            <p className='text-center'><br />NeoLiv ensures support until issues are resolved, providing a hassle-free experience.</p>
            </div>

        </div>

      </div>
    </>
  );
};

export default CustomerCentric;
