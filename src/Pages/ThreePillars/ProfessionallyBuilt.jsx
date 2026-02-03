import React from "react";
import { HashLink } from "react-router-hash-link";
import pdfFile2 from '../../Assets/pdf/CEO_Letter_July2023.pdf';


const ProfessionallyBuilt = () => {
  const cardData = [
    {
      description: "Strategic Equity Partner",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslothfr36one-01.png",
    },
    {
      description: "Strategic Advisor",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslotlfxAnarock-01.png",
        pdfUrl: pdfFile2,
    },
    {
      description: "Brand Strategy Partner",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlsmweyv6Creativeland-asiaa.png",
    },
    {
      description: "Consumer Research Partner",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlsloury9Ipsos-01.png",
    },
    {
      description: "Tax Strategy Advisor",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslovek9EY-01.png",
    },
    {
      description: "Legal Framework Advisor",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlsmxl87vShardul-logos.png",
    },
    {
      description: "Investment Banking Partner",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlsmwfothNew-Amsterdama.png",
    },
    {
      description: "Digital Media Partner",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslox9ji834x834-ps-logo.png",
    },
  ];

  return (
    <div>
      {/* <img src={Shadow} alt="" className="md:-mt-[6rem] md:block hidden -mt-[16rem] w-screen -z-10 opacity-100"/> */}

      {/* <div className='py-10 mx-20 text-center space-y-5 absolute top-36'>
            <h3 className='text-4xl text-blue-950'>Professionally Built</h3>
            <p className='text-lg font-medium'>The team that comes with a 100+ years of multi-functional industry experience</p>
            <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4k4pilsvmx170Slide-6d.jpg" alt="" />
        </div> */}

      <HashLink
        to="/#threePillars"
        smooth
        className="scroll-smooth bg-blue-950 text-white z-40  top-[25%] rotate-90 -left-8 font-bold py-1 my-0.5 px-2 fixed flex items-center justify-around "
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
      <div className="">
        <div className="text-center md:py-16 py-6 space-y-4 px-5">
          <h3 className="text-4xl text-blue-950">Professionally Built</h3>
          <p className="text-lg font-medium">
            The team that comes with a 150+ years of multi-functional industry
            experience
          </p>
        </div>
        <div className="md:flex justify-center items-center md:gap-3 gap-0 md:mx-5 lg:mx-10 mx-5 px-5 ">
          <div className="bg-white md:h-[6rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4">
            <p className="text-center">
              Joined Godrej Properties in <br /> 2010, stepped down on <br /> December 31,
              2022
            </p>
          </div>
          <div className="bg-white md:h-[6rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4">
            <p className="text-center">
              MD & CEO of <br />Godrej Properties <br /> since 2017
            </p>
          </div>
          <div className="bg-white md:h-[6rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4">
            <p className="text-center">
            Executed 90+ projects and 200  <br />Mn Sqft of pan <br /> India residential development
            </p>
          </div>
          <div className="bg-white md:h-[6rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4">
            <p className="text-center">
              BE & MBA Strategy <br /> and Marketing 
              (Indian Institute <br /> of Management, Calcutta)
            </p>
          </div>
        </div>

        <div className="md:flex justify-center gap-20 items-center md:mx-20 mx-5 py-10">
          <div>
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw0bv1l8MOHITMALHOTRA.png"
              alt="MohitImg"
              className="mx-auto w-80"
            />

            <div className="flex justify-evenly p-6 gap-4 text-white bg_indigo items-center mx-auto my-5 rounded-xl">
              <img
                src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw0cjsw3Solidlyestablished.png"
                alt="MohitImg"
                className="w-14"
              />
              <h1>
                Solidly established Godrej (GPL) as the #1 player in the
                national market
              </h1>
            </div>
            <div className="flex justify-evenly p-6 gap-4 text-white bg_indigo items-center mx-auto my-5 rounded-xl">
              <img
                src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw0cn22dAdded90.png"
                alt="MohitImg"
                className="w-14"
              />
              <h1>
                Added 90 new projects with 150 Mn Sqft during 12 year career at
                GPL
              </h1>
            </div>
            <div className="flex justify-evenly p-6 gap-4 text-white bg_indigo items-center mx-auto my-5 rounded-xl">
              <img
                src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw0cndkyMultifamilysales.png"
                alt="MohitImg"
                className="w-14"
              />
              <h1>
                Multifamily sales growth +30% CAGR (2017-2022) vs +11% industry
                average
              </h1>
            </div>
          </div>
          <div className="py-8 border-2 border-indigo-700 rounded-xl md:w-2/4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:gap-2 gap-0 md:mx-3 mx-5 ">
              <div className="text-center space-y-2">
                <h3 className="font-medium tracking-tighter">
                  THE WALL STREET JOURNAL
                </h3>
                <hr className="my-2 border border-black" />
                <h4 className="text-2xl">CEO Council</h4>
                <h5 className="text-2xl font-semibold">
                  The World's Most Influential Decision Makers
                </h5>
              </div>
              <div className="text-center space-y-2 text-sm font-medium">
                <p className="leading-7">
                  Hayes Barnard, GoodLeap <br /> Mike Xu, GrubMarket Inc. <br />Dame Emma
                  Walmsley, GSK <br />Scoot McIntyre, Guidehouse <br />
                  <span className="font-bold text-xl block">Mohit Malhotra</span> Jo Ann Jenkins, AARP <br /> Robert Ford,
                  Abbott <br /> Juile Sweet, Accenture
                </p>
              </div>
            </div>
            <hr className="mx-56 md:my-6 my-3 border border-blue-800" />
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-5 gap-0 md:mx-20">
              <div className="text-center md:space-y-2">
                <img
                  src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw645pdrnews1.png"
                  alt="news"
                  className="w-32 mx-auto"
                />
                <p>
                  Won ET 40 Under Forty India's Hottest Business Leaders in 2017
                </p>
              </div>
              <div className="text-center md:space-y-2">
                <img
                  src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw6464l0news2.png"
                  alt="news"
                  className="w-32 mx-auto"
                />
                <p>Recognised as India's Most Trusted CEO in 2018</p>
              </div>
            </div>
            <hr className="mx-56 my-6 border border-blue-800" />
            <div className="grid grid-cols-1 justify-center items-center md:gap-5 gap-0 md:mx-20">
              <div className="text-center space-y-2">
                <img
                  src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw646l5kgodrej.png"
                  alt="news"
                  className="w-32 mx-auto"
                />
                <p>Best Business Within Godrej Group for 3 years as MD & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-10 py-5 md:mx-20 mx-5">
        <h3 className="text-4xl text-center text-blue-950 pb-16">
          Godrej Properties' transformational journey under Mohit Malhotra
        </h3>
        <img
          src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlsmzx8m416iwl4k2aalrfwlwynjoourney.png"
          alt="journey"
          className="w-full"
        />
      </div>

      <div className="my-20 relative">
        <div>
          {/* <img src={leftshawdo} alt="" className="-mt-[57rem] absolute md:top-[45rem] -left-[4rem] w-fit z-10 opacity-100"/> */}
        </div>
        <h3 className="text-4xl text-center text-blue-950 pb-16">
          Partners and advisors of global repute
        </h3>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:mx-20 mx-5">
          {cardData.map((card, index) => (
            <div key={index} className="text-center mb-8">
              <img
                src={card.imageUrl}
                alt={card.description}
                className="w-28 mb-4 rounded-lg mx-auto"
              />
              <p className="text-blue-950 font-semibold mb-2 md:text-md text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionallyBuilt;
