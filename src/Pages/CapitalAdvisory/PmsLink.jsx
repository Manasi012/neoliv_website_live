import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InvestorCharter from "../../Assets/pdf/InvestorCharter.pdf";
import PMSDiscloureDocument from "../../Assets/pdf/PMSDiscloureDocument.pdf";
import InvestorComplaints from "../../Assets/pdf/InvestorComplaints.pdf";
import CommonSOPforreporting from "../../Assets/pdf/CommonSOPforreportingthedemiseofaninvestor.pdf";
import SEBICircularonODR from "../../Assets/pdf/SEBICircularonODR.pdf";
import FinalRevisedNeolivPMSillustration280125 from "../../Assets/pdf/FeesCalculation080825.xlsx";
import ContactModal from "../../Components/ContactModal";
import FileViewer from './FileViewer';

const PmsLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open/close state

  // Toggle modal visibility
  const handleModalToggle = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsModalOpen(!isModalOpen); // Toggle modal open state
  };

  

  // const handleLink = (e) => {
  //   e.preventDefault();
  //   console.log("mansi", e.currentTarget.href)
  //   window.open(
  //     e.currentTarget.href,
  //     "_blank",
  //   );
  // };

  return (
    <>
      <div
        className="text-center md:py-10 md:px-0 px-2"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        {/* <h3 className="text-4xl text-blue-950 py-8">Investor-Information</h3> */}

        <div className="md:mx-40 lg:mx-20 mx-2 px-0 text-left">
          <h2 className="pb-9 pt-2 font-bold text-xl text-center text-blue-950">
            Alternative Investment Fund & Co- Portfolio Management Services
            Investor Information
          </h2>
          <p className="md:my-0 my-5">
            For any queries or assistance kindly
            <a
              href="#"
              onClick={handleModalToggle} // Call handleModalToggle on click
              className="py-2 px-2 underline text-blue-900 font-semibold"
            >
              click here
            </a>
            to connect with us.
          </p>
        </div>

        <div className="md:flex justify-start items-center md:gap-3 gap-0 md:mx-40 lg:mx-20 mx-3 px-0 md:space-y-0 space-y-3">
          {/* <p className="md:py-7 py-2 font-semibold text-left">
          SEBI SCORES website and App links
          </p> */}

          <div className="md:py-10 py-2 font-semibold flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <a
              href="https://scores.sebi.gov.in/"
              className="underline text-blue-900 hover:text-blue-950"
            >
              https://scores.sebi.gov.in/
            </a>
          </div>

          <div className="md:px-4 px-0 md:py-7 py-2 font-semibold flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 512 512"
            >
              <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z" />
            </svg>

            <a
              href="https://apps.apple.com/us/app/sebiscores/id6478849917"
              className="underline hover:text-blue-950 text-blue-900"
            >
              Apple Store
            </a>
          </div>

          <div className="md:px-4 px-0 md:py-7 py-2 font-semibold flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <a
              href="https://play.google.com/store/apps/details?id=com.sebi"
              className="underline hover:text-blue-950 text-blue-900"
            >
              Google Play
            </a>
          </div>
        </div>

        <div className="text-xl text-left font-medium  md:mx-40 lg:mx-20 mx-2 px-0 md:pt-0 pt-8">
          <div className="pb-3">Online Dispute Resolution :</div>
          <p className="font-normal text-[16px] leading-8 text-justify">
            ODR Portal could be accessed, if unsatisfied with the response. Your
            attention is drawn to the SEBI circular no.{" "}
            <a href={SEBICircularonODR} className="text-blue-900 underline">
              SEBI/HO/OIAE/OIAE_IAD-3/P/CIR/2023/195
            </a>{" "}
            dated December 28, 2023, on “Online Resolution of Disputes in the
            Indian Securities Market”. A common Online Dispute Resolution Portal
            (“ODR Portal”) which harnesses conciliation and online arbitration
            for resolution of disputes arising in the Indian Securities Market
            has been established. ODR Portal can be accessed via the following
            link{" "}
            <a className="text-blue-900 underline" href="https://smartodr.in/">
              https://smartodr.in/
            </a>
          </p>
        </div>

        {/* <p className="text-lg font-medium pt-4">
          Investor Charter link as per regulatory guideline -
          <a
            href={InvestorCharter}
            target="_blank"
            className="px-2 py-2 font-semibold text-blue-900"
          >
            "Investor Charter"
          </a>
        </p> */}
        <div className="text-xl text-left font-medium pt-4 md:mx-40 lg:mx-20 md:pt-8 m-2 px-0">
          <p>Disclosure :</p>
        </div>

        <div className="md:flex justify-center items-center md:gap-6 gap-0 md:mx-40 lg:mx-20 mx-2 px-0">
          <div
            className="bg-white md:h-[8rem] box_height md:p-2 p-4 h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-start">
              <img
                src="https://magicpage-dev.propstory.com/ImageUploads/Koltepatil%20Springshire/1nnx52x06m68s741g.svg"
                alt="pdfimage"
                className="md:p-2 w-20"
              />
              <h3 className="font-semibold text-[#112E50] text-md tracking-wide">
                Investor Charter
              </h3>
            </div>
            <div>
              <a href={InvestorCharter} className="hover:underline">
                <div className="flex justify-end gap-2 text-blue-900">
                  <p>Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div
            className="bg-white md:h-[8rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-start">
              <img
                src="https://magicpage-dev.propstory.com/ImageUploads/Koltepatil%20Springshire/1nnx52x06m68s741g.svg"
                alt="pdfimage"
                className="md:p-2 w-20"
              />
              <h3 className="font-semibold text-[#112E50] text-md tracking-wide">
                Investor Complaints
              </h3>
            </div>
            <div>
              <a href={InvestorComplaints} className="hover:underline">
                <div className="flex justify-end gap-2 text-blue-900">
                  <p>Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div
            className="bg-white md:h-[8rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-start">
              <img
                src="https://magicpage-dev.propstory.com/ImageUploads/Koltepatil%20Springshire/1nnx52x06m68s741g.svg"
                alt="pdfimage"
                className="md:p-2 w-20"
              />
              <h3 className="font-semibold text-[#112E50] text-md tracking-wide">
                PMS Disclosure Document
              </h3>
            </div>
            <div>
              <a href={PMSDiscloureDocument} className="hover:underline">
                <div className="flex justify-end gap-2 text-blue-900">
                  <p>Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="md:flex justify-center items-center md:gap-6 gap-0 md:mx-40 lg:mx-20 mx-2 px-0">
          {/* <div
            className="bg-white md:h-[8rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-start">
              <img
                src="https://magicpage-dev.propstory.com/ImageUploads/Koltepatil%20Springshire/1nnx52x06m68s741g.svg"
                alt="pdfimage"
                className="md:p-2 w-20"
              />
              <h3 className="font-semibold text-[#112E50] text-md tracking-wide">
                SEBI Circular on ODR
              </h3>
            </div>
            <div>
              <a
                href={SEBICircularonODR}
                className="hover:underline"
              >
                <div className="flex justify-end gap-2 text-blue-900">
                  <p>Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div> */}

          <div
            className="bg-white md:h-[8rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-start">
              <img
                src="https://magicpage-dev.propstory.com/ImageUploads/Koltepatil%20Springshire/1nnx52x06m68s741g.svg"
                alt="pdfimage"
                className="md:p-2 w-20"
              />
              <h3 className="font-semibold text-[#112E50] text-md tracking-wide">
                Common SOP for reporting the demise of an investor
              </h3>
            </div>
            <div>
              <a href={CommonSOPforreporting} className="hover:underline">
                <div className="flex justify-end gap-2 text-blue-900">
                  <p>Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* FeesCalculation Normal Format */}
         <div
            className="bg-white md:h-[8rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-start">
              <img
                src="https://magicpage-dev.propstory.com/ImageUploads/Koltepatil%20Springshire/1nnx52x06m68s741g.svg"
                alt="pdfimage"
                className="md:p-2 w-20"
              />
              <h3 className="font-semibold text-[#112E50] text-md tracking-wide">
                Fee Calculation Tool
              </h3>
            </div>

            
            <div>
              <a 
                href={FinalRevisedNeolivPMSillustration280125}
              >
                <div className="flex justify-end gap-2 text-blue-900 -mt-0">
                  <p>Download File</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

{/* FeesCalculation Table Format */}
          {/* <div
            className="bg-white md:h-[8rem] box_height md:p-2 p-4  h-auto py-4 md:w-full shadow-2xl rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-start">
              <img
                src="https://magicpage-dev.propstory.com/ImageUploads/Koltepatil%20Springshire/1nnx52x06m68s741g.svg"
                alt="pdfimage"
                className="md:p-2 w-20"
              />
              <h3 className="font-semibold text-[#112E50] text-md tracking-wide">
                Fee Calculation Tool
              </h3>
            </div>
            <div>

              <NavLink to="/feescalculationtool" target="_blank" className="i md:block hidden" onClick={() => sessionStorage.setItem("fees_opened", "true")}
              >
                 <a >
                <div className="flex justify-end gap-2 text-blue-900">
                  <p>Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
              </NavLink>

            
            </div>
          </div> */}

          <div
            className="bg-transparent md:h-[8rem] box_height md:p-2 p-4  h-auto py-4 md:w-full rounded-lg md:my-2 my-4"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          ></div>
        </div>

        {/* Contact Modal Component */}
        <ContactModal isOpen={isModalOpen} onClose={handleModalToggle} />
      </div>
    </>
  );
};

export default PmsLink;
