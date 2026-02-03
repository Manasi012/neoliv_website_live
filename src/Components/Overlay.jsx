import React from "react";

const OverlayImage = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/path/to/background-image.jpg"
        alt="Background Image"
        className="w-full h-auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
        Your Content Goes Here
      </div>
    </div>
  );
};

export default OverlayImage;
