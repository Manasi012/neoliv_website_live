import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';


const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" className="border-b bg-white rounded-3xl">
      <button
        className="flex justify-between items-center rounded-3xl w-full px-8 py-6 bg-white focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-950">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
</svg>

 : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-950">
 <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

}
      </button>
      {isOpen && <div className="px-10 py-10">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-2 mt-8 space-y-8 relative">
      <AccordionItem data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="bg-white"
        title={<h2 className="text-7xl text-left font-extrabold mb-2 text-[#CCCCCC]">1 <span className='text-xl -mt-14 -ml-10 text-black font-semibold'>Professionally Built</span></h2>
      }  
      
        content={
          <>
           <ul className='list-disc space-y-14 font-medium text-xl ml-4'>
                <li>
                Founded by Mohit Malhotra former MD & CEO of Godrej Properties
                </li>
                <li>
                150+ years cumulative experience
                </li>
                <li>
                Equity partnership for key management
                </li>
            </ul>
            <NavLink to="/professionallybuilt" className="inline-flex items-center hover:text-white text-indigo-800 font-semibold pt-4 px-4 rounded md:absolute bottom-0">
      Discover
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 transition-transform duration-6000 ease-in-out transform-gpu hover:scale-110">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </NavLink>
          </>
        }
        isOpen={openIndex === 0}
        toggleAccordion={() => toggleAccordion(0)}
      />

<AccordionItem data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" className="bg-white"
        title={<h2 className="text-7xl text-left font-extrabold mb-2 text-[#CCCCCC]">2<span className='text-xl -mt-14 -ml-10 text-black font-semibold'>Financially Secure</span></h2>
      }
        content={
          <>
           <ul className='list-disc space-y-14 font-medium text-xl ml-4'>
                <li>
                Fund backed model 360 One as equity investor
                </li>
                <li>
                SEBI approved CAT II domestic equity AIF
                </li>
                <li>
                Amongst top developers of India
                </li>
            </ul>
            <NavLink to="/financiallysecure" className="inline-flex items-center hover:text-white text-indigo-800 font-semibold pt-4 px-4 rounded md:absolute bottom-0">
      Discover
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 transition-transform duration-6000 ease-in-out transform-gpu hover:scale-110">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </NavLink>
          </>
        }
        isOpen={openIndex === 1}
        toggleAccordion={() => toggleAccordion(1)}
      />

<AccordionItem   data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000" className="bg-white"
 title={<h2 className="text-7xl text-left font-extrabold mb-2 text-[#CCCCCC]">3<span className='text-xl -mt-14 -ml-10 text-black font-semibold'>Customer Centric</span></h2>
}
        content={
          <>
           <ul className='list-disc space-y-14 font-medium text-xl ml-4'>
                <li>
                Tech-enabled interface
                </li>
                <li>
                Product and quality excellence
                </li>
                <li>
                Relationship mindset & long-term commitment
                </li>
            </ul>
            <NavLink to="/customercentric" className="inline-flex items-center hover:text-white text-indigo-800 font-semibold pt-4 px-4 rounded md:absolute bottom-0">
      Discover
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 transition-transform duration-6000 ease-in-out transform-gpu hover:scale-110">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </NavLink>
          </>
        }
        isOpen={openIndex === 2}
        toggleAccordion={() => toggleAccordion(2)}
      />

    </div>
  );
};

export default Accordion;
