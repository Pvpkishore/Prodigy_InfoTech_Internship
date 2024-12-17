import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ElasticText = ({ text, className }) => {
    // Create an array of refs for each letter
    const lettersRef = useRef([]);

    useEffect(() => {
        // Animate each letter with a stretch effect on load
        lettersRef.current.forEach((letter, i) => {
            gsap.fromTo(
                letter,
                { scaleY: 2, opacity: 0 }, // Start with stretched vertically
                {
                    scaleY: 1,                // Compress back to normal
                    opacity: 1,
                    duration: 1,
                    ease: 'elastic.out(1, 0.3)', // Elastic bounce effect
                    delay: i * 0.1            // Stagger animation for each letter
                }
            );
        });
    }, []);

    return (
        <h1 className={`flex ${className}`}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    ref={(el) => (lettersRef.current[index] = el)}
                    style={{ display: 'inline-block' }}
                    className='bg-gradient-to-r from-blue-300 via-sky-400 to-blue-400  inline-block text-transparent bg-clip-text select-none  '
                >
                    {char}
                </span>
            ))}
        </h1>
    );
};

export default ElasticText;
