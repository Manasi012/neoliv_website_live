import React from "react";

const ContactFlap = () => {
  const handleClick = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed md:right-0 md:top-1/2 top-[64%] transform -translate-y-1/2 bg-blue-950 text-white font-bold px-2 py-5 sm:px-3 sm:py-6 md:py-7 md:rounded-l-2xl shadow-lg hover:shadow-xl hover:bg-blue-950 transition-all duration-300 ease-in-out group active:scale-95"
      style={{
        zIndex: 10,
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        letterSpacing: '0.15em',
        lineHeight: '1.1',
        minHeight: '100px',
        fontSize: 'clamp(10px, 2vw, 14px)',
        color: '#fff'
      }}
    >
      {/* Vertical Text */}
      <span 
        className="tracking-wider font-extrabold"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          color: '#fff'
        }}
      >
        CONTACT US
      </span>

      {/* Pulse animation ring */}
      <div className="absolute inset-0 md:rounded-l-2xl rounded-r-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-40 animate-pulse transition-opacity duration-300"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 md:rounded-l-2xl rounded-r-2xl bg-blue-400 opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-300"></div>
      
      {/* Active state inner shadow */}
      <div className="absolute inset-0 md:rounded-l-2xl rounded-r-2xl bg-blue-900 opacity-0 group-active:opacity-20 transition-opacity duration-100"></div>
    </button>
  );
};

export default ContactFlap;
