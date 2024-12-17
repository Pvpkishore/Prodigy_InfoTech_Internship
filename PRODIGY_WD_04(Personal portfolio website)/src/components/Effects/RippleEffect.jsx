// RippleButton.js
import React, { useRef } from "react";
import { gsap } from "gsap";
import "./Ripplebutton.css"; // Ensure this CSS file is created for styles

const RippleButton = React.forwardRef(({ children, className, ...props }, ref) => {
    const rippleRef = useRef(null);

    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const rippleSize = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - rippleSize / 2;
        const y = event.clientY - rect.top - rippleSize / 2;

        gsap.set(rippleRef.current, {
            width: rippleSize,
            height: rippleSize,
            left: x,
            top: y,
            opacity: 1,
            scale: 0,
        });

        gsap.to(rippleRef.current, {
            scale: 2.5,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
        });
    };

    return (
        <button
            ref={ref}
            className={`ripple-button ${className}`}
            onClick={createRipple}
            {...props}
        >
            {children}
            <span ref={rippleRef} className="ripple" />
        </button>
    );
});

export default RippleButton;
