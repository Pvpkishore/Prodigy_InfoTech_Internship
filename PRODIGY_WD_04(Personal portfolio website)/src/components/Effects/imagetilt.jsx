import React, { useRef } from "react";
import { gsap } from "gsap";

const TiltImage = ({ src, alt, width = 300, height = 300 }) => {
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = ((y - centerY) / centerY) * 15; // Adjust tilt sensitivity
        const tiltY = ((x - centerX) / centerX) * -15;

        gsap.to(imageRef.current, {
            rotateX: tiltX,
            rotateY: tiltY,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    return (
        <div
            style={{
                perspective: 1000, // Adds 3D perspective
                display: "inline-block",
                width: `${width}px`,
                height: `${height}px`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d", // Enables 3D transform
                    transition: "transform 0.2s ease-out",
                }}
            />
        </div>
    );
};

export default TiltImage;
