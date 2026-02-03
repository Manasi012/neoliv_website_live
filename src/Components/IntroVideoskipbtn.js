import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ThumbNail from "../Assets/imgs/thumbnail_bg.png";

const IntroVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false);
  const location = useLocation();
  const videoRef = useRef(null);

  useEffect(() => {
    const mobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    if (location.pathname === "/") {
      if (mobile) {
        const checkOrientation = () => {
          setIsPortrait(window.innerHeight > window.innerWidth);
        };
        checkOrientation();
        window.addEventListener("resize", checkOrientation);
      }
      setShowVideo(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const video = videoRef.current;
    if (showVideo && video) {
      video.muted = false;
      video.volume = 1;
      setTimeout(() => {
        video
          .play()
          .catch(() => {
            setNeedsUserInteraction(true); // if autoplay fails
          });
      }, 100);
    }
  }, [showVideo]);

  const handleUserStart = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play();
      setNeedsUserInteraction(false);
    }
  };
const handleVideoEnd = () => {
  const video = videoRef.current;
  if (video) {
    video.muted = true;
    video.pause();
    video.currentTime = 0;
    // Wait a short moment before hiding to ensure audio stops
    setTimeout(() => setShowVideo(false), 50);
  } else {
    setShowVideo(false);
  }
};
  const handleSkip = () => {
    setShowVideo(false);
  };

  if (!showVideo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div
        className="absolute bg-black flex items-center justify-center"
        style={
          isPortrait && isMobile
            ? {
                width: "100vh",
                height: "100vw",
                padding: "env(safe-area-inset-top) 16px env(safe-area-inset-bottom)",
                transform: "rotate(90deg)",
                transformOrigin: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                translate: "-50% -50%",
              }
            : {
                width: "100vw",
                height: "100vh",
                padding: "1vh 1vw", 
                boxSizing: "border-box",
              }
        }
      >
        <video
          ref={videoRef}
          src={
            isMobile
              ? "/Butterfly LI_IG_FB_YT_new.mp4"
              : "/NeolivOpeningVideo_updated.mp4"
          }
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        />

        {needsUserInteraction && (
          <div
            className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={handleUserStart}
            style={
              {
                backgroundImage: `url(${ThumbNail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...(isPortrait && isMobile
                  ? {
                      width: "100vh",
                      height: "100vw",
                      transform: "rotate(0deg)",
                      transformOrigin: "center",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      translate: "-50% -50%",
                    }
                  : {}),
              }
            }
          >
            <div
              style={{
                transform: isPortrait && isMobile ? "rotate(-90deg)" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className="text-white px-6 py-3 rounded-full text-base bounce-glow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-10 h-10"
                >
                  <path d="M4.5 3.5v9l7-4.5-7-4.5z" />
                </svg>
              </button>
              {/* Skip Video Button */}
{/* <button
  onClick={handleVideoEnd}
  className="absolute bg-white bg-opacity-80 text-black md:px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-opacity-100 transition-all duration-300 z-50"
  style={{
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 150%)",
  }}
>
  Skip Video
</button> */}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroVideo;
