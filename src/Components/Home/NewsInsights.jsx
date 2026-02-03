import React from "react";
import { useState } from "react";
import AllNews from "../Slider/AllNews";
import CeoLetter from "../Slider/CeoLetter";
import Events from "../Slider/Events";
import News from "../Slider/News";

const NewsInsights = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div
        className="text-center mt-4 pb-3 md:mt-10"
        id="news&insights"
      >
        {/* <h4 className="md:text-4xl text-4xl text-blue-950 font-medium">
          News & Insights
        </h4> */}
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pt-5">
          News & Insights
        </h4>
      </div>

      <div>
        {/* Tab Pills */}
        <div className="flex md:space-x-7 space-x-1 md:mx-96 mx-2 pt-8 justify-center">
          <button
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            className={`flex-1 md:py-2 tablet_button rounded-full border border-indigo-500  ${
              activeTab === 1 ? "bg-indigo-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab(1)}
          >
            All
          </button>
          <button
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
            className={`flex-1 md:py-2 px-2 tablet_button rounded-full border border-indigo-500  ${
              activeTab === 2 ? "bg-indigo-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab(2)}
          >
            CEO's&nbsp;Letter
          </button>
          <button
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="1000"
            className={`flex-1 md:py-2 tablet_button rounded-full border border-indigo-500  ${
              activeTab === 3 ? "bg-indigo-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab(3)}
          >
            Events
          </button>
          <button
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="1000"
            className={`flex-1 md:py-2 tablet_button rounded-full border border-indigo-500  ${
              activeTab === 4 ? "bg-indigo-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab(4)}
          >
            News
          </button>
        </div>

        <div className="rounded-b-lg p-4">
          {activeTab === 1 && (
            <div>
              <AllNews />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <CeoLetter />
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <Events />
            </div>
          )}
          {activeTab === 4 && (
            <div>
              {/* <h1 className='text-center text-3xl text-blue-900 font-bold py-10'>News</h1> */}
              <News />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsInsights;
