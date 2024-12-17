import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EmailCont = () => {
	const emailRef = useRef(null);
	
		useEffect(() => {
			gsap.fromTo(
				emailRef.current,
				{ y: "100%", opacity: 0 },
				{
					y: "0%",
					opacity: 1,
					scrollTrigger: {
						trigger: emailRef.current,
						start: "top 95%",
						end: "top 25%",
						scrub: true,
					},
					duration: 1,
					ease: "power2.out",
				}
			);
		}, []);

	return (
		<div
			ref={emailRef}
			className="max-sm:hidden w-[5vw] h-screen bg-slate-950 flex flex-col justify-end items-center pr-4 sm:pr-2"
		>
			<a
				className="text-sky-200 transform font-poppins rotate-90 text-xl mb-32"
				href="mailto:pvpkishore09@gmail.com"
			>
				pvpkishore09@gmail.com
			</a>
			<div className="w-full flex justify-center">
				<div className="bottom-0 h-[11vh] w-0.5 bg-blue-400"></div>
			</div>
		</div>
	);
};

export default EmailCont;
