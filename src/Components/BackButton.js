import React from "react";

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <button
       className="bg-blue-950 text-white z-40 top-[60%] rotate-90 -left-8 font-bold py-1 my-0.5 px-2 fixed flex items-center justify-around "
       onClick={goBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 me-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Back
      </button>

      {/* <button
        className="bg-blue-950 border border-white text-white z-40 font-bold py-2 px-5 rounded-lg fixed m-5 flex items-center justify-around md:hidden bottom-0"
        onClick={goBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Back
      </button> */}
    </>
  );
};

export default BackButton;
