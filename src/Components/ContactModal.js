import React, { useEffect } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Scroll to the top of the page when modal opens
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-2 flex items-center justify-center w-full z-50 md:-ms-0 -ms-2 bg-gray-400 bg-opacity-75 h-[100vh] shadow-lg">
      <div className="relative bg-white p-8 rounded-lg md:w-1/3 w-full md:mx-0 mx-4">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 font-bold text-2xl"
          onClick={onClose} // Calls onClose to close the modal
          aria-label="Close modal"
        >
          &times; {/* Using the &times; character for the close icon */}
        </button>
        <div className="text-left">
          <h4 className="font-semibold pb-3">Registered Office</h4>
          <p>NeoLiv Capital Advisory Private Limited</p>
          <p>403, 4th Floor, Tower B, The Capital, G Block, Bandra Kurla Complex, Bandra (East), Mumbai - 400051. Maharashtra, India</p>
        </div>
        <div className="text-left my-4">
          <h4 className="font-semibold pb-2">Call us at</h4>
          <p><a href="tel:022-47805701">022-47805701</a></p>
        </div>
        <div className="text-left mt-4">
          <h4 className="font-semibold pb-2">Write to us</h4>
          <p><a href="mailto:investors@neoliv.in"><span className='font-semibold'>For Alternative Investment Fund :</span> <span className='hover:underline hover:text-blue-950'>investors@neoliv.in</span></a></p>
          <p className='pt-3'><a href="mailto:investors.copms@neoliv.in"><span className='font-semibold'>For Co- Portfolio Management Services :</span><span className='hover:underline hover:text-blue-950'> investors.copms@neoliv.in</span> </a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
