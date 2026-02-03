import React from 'react';
import sustainability from '..//Assets/imgs/sustainability.jpg';
import sustainabilitymob from '..//Assets/imgs/sustainability-mob.jpg';
import leftshawdo from '../Assets/imgs/leftshawdo.png';
import BackButton from '../Components/BackButton'



const Sustainability = () => {
  return (
    <div>
      {/* <Bluenavbar />
      <Header /> */}
 <div>
  <BackButton />
  </div>
      <div className='relative hidden md:block'>
        <img src={sustainability} alt="sustainability" className='md:w-screen w-full h-auto'/>
        {/* <h3 className='text-white md:text-5xl text-2xl absolute top-[45%] font-bold md:ml-32 ml-2 tracking-wider'>Commitment To ESG</h3> */}
      </div>

      <div className='relative md:hidden'>
        <img src={sustainabilitymob} alt="sustainability" className='md:w-screen w-full h-auto'/>
      </div>


      <div className='relative py-5 md:mx-20 mx-6'>
          {/* <img src={leftshawdo} alt="" className="-mt-[42rem] absolute -left-[44rem] -top-96 w-screen opacity-100"/> */}
          <p className='text-center md:px-14 px-0 md:py-8 py-4 text-indigo-500 md:leading-10 leading-7 font-medium md:text-xl text-sm' data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">We, at NeoLiv, believe in and are committed to Environmental, Social, and Governance standards. We are committed to forging an extraordinary future for India by building communities that are sustainably future-focused as well as environmentally and socially responsible. In doing so, we aim to apply our insights across our portfolio and make a lasting, positive impact on the communities we build.
          
          NeoLiv intends to incorporate ESG strategy materially in our investment and development process with the aim of creating long-term sustainable communities and assets that thrive and outlive all of us. We are committed to doing so through evolving market research, data analytics, and insights that will inform and guide our corporate decisions.
          </p>
    </div>


    </div>
  )
}

export default Sustainability
