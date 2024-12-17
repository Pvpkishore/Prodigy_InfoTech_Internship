import React, { useRef, useEffect, forwardRef } from "react";
import { gsap } from "gsap";

const GlitchText = forwardRef(({ text }, ref) => {
    // Initialize a timeline for glitch effect
    const hoverTimeline = useRef(null);

    // Function to start glitch effect
    const startGlitchEffect = () => {
        if (hoverTimeline.current) {
            hoverTimeline.current.kill(); // Stop any existing animation
        }

        hoverTimeline.current = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        hoverTimeline.current
            .to(ref.current, {
                duration: 0.1,
                opacity: 0,
                y: Math.random() * 10,
                skewX: Math.random() * 5,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color
                ease: "power1.inOut",
                stagger: 0.1,
            })
            .to(ref.current, {
                duration: 0.1,
                opacity: 1,
                y: 0,
                skewX: 0,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color
                ease: "power1.inOut",
                stagger: 0.1,
            });
    };

    // Function to stop glitch effect and reset to blue color
    const stopGlitchEffect = () => {
        if (hoverTimeline.current) {
            hoverTimeline.current.kill(); // Stop the animation when not hovering
        }
        gsap.to(ref.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            skewX: 0,
            color: "#007BFF", // Reset color to blue (#007BFF)
        });
    };

    // Set initial color to blue when component mounts
    useEffect(() => {
        gsap.set(ref.current, { color: "#007BFF" }); // Initial color blue
    }, []);

    // Return the h1 element with event handlers for hover
    return (
        <h1
            ref={ref} // Attach the ref to the h1 element
            className="glitch-text"
            style={{
                cursor: "pointer", // Change cursor to pointer on hover
            }}
            onMouseEnter={startGlitchEffect} // Start glitch effect on mouse enter
            onMouseLeave={stopGlitchEffect} // Stop glitch effect on mouse leave
        >
            {text}
        </h1>
    );
});

export default GlitchText;
