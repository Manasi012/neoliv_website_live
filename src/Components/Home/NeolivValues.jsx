import React from 'react';
import Neolifer_Values from "../../Assets/imgs/Neolifer_Values.jpg";
import MohitVideo from '../../Assets/video/MohitVideo.mp4';



 const NeolivValues = () => {
  return (
  <>
    <div
    className="text-center mt-4 md:my-10 md:mx-96 mx-2"
    id="values"
  >
    <h4 className="md:text-3xl text-4xl text-blue-950 font-medium md:py-5 py-10">
      NeoLiv Values
    </h4>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 md:mt-10 md:mx-24 mx-2 gap-5'>
    <img src={Neolifer_Values} alt="Neolifer_Values" className='w-100' />
    {/* <VideoGallery /> */}
     <video width="100%" height="auto" controls muted autoPlay className='md:mb-0 mb-5'> 
            <source src={MohitVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  </div>

  </>
  )
}
export default NeolivValues;