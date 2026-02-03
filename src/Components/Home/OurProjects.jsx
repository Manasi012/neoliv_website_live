import React from 'react'

export const OurProjects = () => {
  return (
    <>
     <div
        className="text-center md:mt-5 pt-20 aos-init aos-animate relative z-50"
        id="project"
      >
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-10" >
         Our Projects
        </h4>
      </div>

       {/* Desktop layout with overlay card */}
      <div className="hidden md:block relative overflow-hidden shadow-2xl">
        <img
          src="https://neolivgrandpark.in/asset/latestImages/Hero/Hero2-mob.jpg"
          alt="NeoLiv Grand Park"
          className="w-full h-auto max-h-[500px] object-cover"
        />

        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg max-w-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            NeoLiv Grand Park
          </h3>
          <p className="text-gray-600 text-base mb-4">
            30,000^ Sft of Club and Amenities,
            3 Acres^ of Urban Forest and Open Spaces
          </p>
          <a
            href="https://neolivgrandpark.in/" target='_blank'
            className="inline-block px-6 py-2 bg-blue-950 text-white rounded-full shadow hover:bg-blue-900 transition"
          >
            Explore More
          </a>
        </div>
      </div>

      {/* Mobile stacked layout */}
      <div className="block md:hidden space-y-6">
        <div className="overflow-hidden shadow-lg">
          <img
            src="https://neolivgrandpark.in/asset/latestImages/Hero/Hero2-mob.jpg"
            alt="NeoLiv Grand Park"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            NeoLiv Grand Park
          </h3>
          <p className="text-gray-600 text-base mb-4">
             30,000^ Sft of Club and Amenities,
            3 Acres^ of Urban Forest and Open Spaces
          </p>
          <a
            href="https://neolivgrandpark.in/" target='_blank'
            className="inline-block px-6 py-2 bg-blue-950 text-white rounded-full shadow hover:bg-blue-900 transition"
          >
            Explore More
          </a>
        </div>
      </div>
    </>
  )
}
