import React, { useState } from "react";

const CoPmsUpiModal = ({ qrImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const upiId = "neoliv.co.pms@validibl";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    alert("UPI ID copied to clipboard!");
  };

  return (
    <>
      {/* Replace this button with your MenuItem NavLink */}
      <button
        onClick={() => setIsOpen(true)}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
      >
        Co-PMS UPI Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl md:p-8 p-3 w-[90%] max-w-lg relative transform transition-all duration-300 scale-100 animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 text-xl"
            >
              ✕
            </button>

            {/* Header Section */}
            <div className="text-center mb-8">
              {/* <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div> */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2 md:mt-0 mt-8">Co-PMS UPI Details</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>

            {/* Client Text */}
            <div className="bg-gray-50 rounded-xl md:p-6 p-3">
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                <span className="font-semibold text-gray-800">NeoLiv Capital Advisory Private Limited</span> has 
                <span className="font-semibold text-green-600"> SEBI verified and validated</span> UPI handle{" "}
                <strong className="cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-200 bg-blue-50 px-2 py-1 rounded">
                  {upiId}
                </strong>
                . We encourage you to use this payment method as a safe and secure way to make the payment for your Co-PMS Investments.
              </p>
            </div>

            {/* QR Code Section */}
            <div className="text-center mb-6 mt-2">
              <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-2xl shadow-md">
                <img
                  src={qrImage}
                  alt="Co-PMS UPI QR"
                  className="w-48 h-48 object-contain rounded-lg"
                />
              </div>
              {/* <p className="text-xs text-gray-500 mt-3">Scan this QR code with any UPI app to make payment</p> */}
            </div>

            {/* Security Badge */}
            {/* <div className="flex items-center justify-center gap-2 text-xs text-green-700 bg-green-50 rounded-lg p-3 border border-green-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">SEBI Verified & Secure Payment Method</span>
            </div> */}

            {/* UPI ID + Copy */}
            {/* <div className="flex justify-center items-center gap-2 py-3">
              <span className="bg-gray-100 px-3 py-1 rounded text-gray-800 font-medium">
                {upiId}
              </span>
              <button
                onClick={handleCopy}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Copy
              </button>
            </div> */}

            {/* Download QR (Optional) */}
            {/* <div className="text-center mt-3">
              <a
                href={qrImage}
                download="CoPMS_UPI_QR.png"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Download QR Code
              </a>
            </div> */}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CoPmsUpiModal;
