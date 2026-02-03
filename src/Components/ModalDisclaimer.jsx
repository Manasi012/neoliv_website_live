import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const ModalDisclaimer = () => {
  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const agreedPreviously = sessionStorage.getItem("agreed");
    const modalExceptions = [
      "/disclaimer",
      "/pms",
      "/feescalculation",
      "/upcominglaunches",
      "/feescalculationtool"
    ];
    
    const openedPages = ["pms_opened", "feescalculation_opened", "upcominglaunches_opened", "feescalculationtool_opened"]
      .some((key) => sessionStorage.getItem(key));
  
    if (modalExceptions.includes(location.pathname) || openedPages) {
      setShowModal(false);
    } else if (!agreedPreviously) {
      setShowModal(true);
    }
  }, [location.pathname]);
  
  

  const handleAgree = () => {
    // Set the user's agreement state
    sessionStorage.setItem("agreed", "true");
    setAgreed(true);
    // Hide the modal
    setShowModal(false);
  };

  return (
    <>
      {showModal && !agreed && (
        <div className="fixed z-30 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="my-2 text-center">
                    <h3
                      className="text-xl font-bold py-2 leading-6"
                      id="modal-title"
                    >
                      Disclaimer
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        This website is owned and operated by NeoLiv Real Estate
                        Private Limited (Company). The website, and all
                        contents, materials, information, products and services
                        provided on the website are for general purposes only
                        and are provided on an “as is” and “as available” basis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 md:flex justify-evenly">
                <NavLink to="/disclaimer" target="_blank">
                  <button className="mt-3 w-full inline-flex justify-center rounded-md underline shadow-sm px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Read More
                  </button>
                </NavLink>

                <button
                  onClick={handleAgree}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg_indigo text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  I Agree
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDisclaimer;