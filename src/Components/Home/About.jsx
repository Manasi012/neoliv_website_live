import React from "react";
import {useRef} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Founder from "../../Assets/imgs/Founder.png";
import Platform from "../../Assets/imgs/platfoem.png";
import Security from '../../Assets/imgs/Security.png';
import project from '../../Assets/imgs/project.png';
import build from '../../Assets/imgs/build.png';
import presence from '../../Assets/imgs/presence.png';
import leftshawdo from '../../Assets/imgs/leftshawdo.png';

const About = () => {

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 17/15,
    // slidesToShow:1,
        slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
<>
    
    <div className="md:p-32 padding-sm px-6 pt-28 md:pb-10 pb-20 relative" id="about">
      <div>
      <img src={leftshawdo} alt="" className="-mt-[57rem] absolute -left-[44rem] -top-96 w-full -z-10 opacity-100"/>
</div>
      <div className="text-center space-y-10 text-blue-950 pb-14">
        {/* <h4 className="tracking-wide">ABOUT US</h4> */}
        <h2 className="text-4xl">Who Are We?</h2>
      </div>

      <div className="hidden md:block">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] z-20 border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Founder <br />Credentials</h2>
              <img src={Founder} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Founded by <span className="font-medium">Mohit Malhotra, ex MD & CEO of Godrej Properties</span>,
                who transformed Godrej Properties into a market leader in his 12
                years journey
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Integrated
                <br />
                Platform
              </h2>
              <img src={Platform} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                A unique&nbsp; integrated residential <br /> platform with both fund
                management business and its own development arm
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Financial
                <br />
                Strength
              </h2>
              <img src={Security} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <p>
            The platform has secured funding from <span className="font-medium">UHNI family offices and 360 ONE</span> - India’s leading wealth management firm with more than <span className="font-medium">INR 6 Lakh crore</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Delivery <br />Assurance </h2>
              <img src={project} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                All projects are backed by SEBI approved equity AIF Fund
                ensuring financial security and assurance of timely delivery
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font"  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Professionally
                <br />
                Built
              </h2>
              <img src={build} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Built by industry experts with 150+ years of experience of
                capital raise, land investments & 200 Mn Sq ft project execution
                in Indian real estate space
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Multi-City <br />Presence</h2>
              <img src={presence} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Opened offices and setup teams in Mumbai and Delhi NCR with
                focus on premium residential projects in both markets
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="slider-container text-center md:hidden">
      <Slider   {...settings}>
      <div className="px-2 ml-10">
      <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Founder <br />Credentials</h2>
              <img src={Founder} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <p>
                Founded by <span className="font-medium">Mohit Malhotra, ex MD & CEO of Godrej Properties</span>,
                who transformed Godrej Properties into a market leader in his 12
                years journey
              </p>
            </div>
          </div>
      </div>
         <div className="px-2 ml-10">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Integrated
                <br />
                Platform
              </h2>
              <img src={Platform} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                A unique integrated <br /> residential platform with both fund
                management business and its own development arm
              </p>
            </div>
          </div>
         </div>
         <div className="px-5 ml-8">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Financial
                <br />
                Strength
              </h2>
              <img src={Security} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <p>
            The platform has secured funding from <span className="font-medium">UHNI family offices and 360 ONE</span> - India’s leading wealth management firm with more than <span className="font-medium">INR 6 Lakh crore</span>
              </p>
            </div>
          </div>
         </div>
         <div className="px-5 ml-8">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Delivery <br /> Assurance</h2>
              <img src={project} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                All projects are backed by SEBI approved equity AIF Fund
                ensuring financial security and assurance of timely delivery
              </p>
            </div>
        </div>
         </div>
       <div className="px-5 ml-8">
       <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Professionally
                <br />
                Built
              </h2>
              <img src={build} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Built by industry experts with 150+ years of experience of
                capital raise, land investments & 200 Mn Sq ft project execution
                in Indian real estate space
              </p>
            </div>
          </div>
       </div>
       
         <div className="px-5 ml-8">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Multi-City <br />Presence</h2>
              <img src={presence} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
              Opened offices and setup teams in Mumbai and Delhi NCR with
                focus on premium residential projects in both markets
              </p>
            </div>
          </div>
         </div>
      </Slider>
    </div>
      
      {/* <div className="py-10">
      <p className='text-center md:px-44 px-2 tab_padding md:py-8 py-4 text-gray-600 leading-10 font-medium text-xl' data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">"The residential real estate sector in India has been affected with distrust & conflict-driven relationships. The whole experience is stressful and far from being a joyous relationship. Moreover, lack of transparency, secure funding, and corporate governance issues have resulted in loss of credibility."</p>
      </div> */}
   

    </div>
    </>
  );
};

export default About;
