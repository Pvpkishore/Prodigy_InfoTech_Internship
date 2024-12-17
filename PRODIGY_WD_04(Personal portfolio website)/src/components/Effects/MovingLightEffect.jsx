import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MovingLightBackground = ({ children }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;

    // Create a repeating gradient light animation
    gsap.to(overlay, {
      backgroundPosition: "200% 0",
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div
      style={{
        position: "relative", // To allow overlay positioning
        overflow: "hidden",
      }}
    >
      {/* Background Overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1, // Ensure it's behind the content
          background: "linear-gradient(90deg, #000, #e91e63, #000)",
          backgroundSize: "200% 100%",
          pointerEvents: "none",
        }}
      ></div>

      {/* Website Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // Ensure content is above the background
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MovingLightBackground;
