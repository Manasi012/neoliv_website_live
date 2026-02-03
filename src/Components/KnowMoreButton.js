import React from 'react'

export const KnowMoreButton = ({ href }) => {
  return (
    <div className='w-auto'>
        <button
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            class="flex px-4 justify-center my-4 md:py-2 tablet_button items-center w-auto rounded-full border border-indigo-500 bg-indigo-500 text-white aos-init aos-animate"
          >
            <a href={href} className="know-more-button cursor-pointer w-[7rem]">Know More</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 md:h-7 h-10 ml-2 transition-transform duration-6000 ease-in-out transform-gpu hover:scale-110"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
    </div>
  )
}
