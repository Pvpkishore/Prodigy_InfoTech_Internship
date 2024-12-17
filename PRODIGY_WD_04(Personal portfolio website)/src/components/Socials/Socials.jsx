import React, { useEffect, useRef } from "react";
import leetcode from "../../assets/icons-white/icons8-Leetcode-white.png";
import linkedin from "../../assets/icons-white/icons8-linkedin-white.png";
import github from "../../assets/icons-white/github-white-icon.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Socials = () => {
	const socialsRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			socialsRef.current,
			{ y: "100%", opacity: 0 },
			{
				y: "0%",
				opacity: 1,
				scrollTrigger: {
					trigger: socialsRef.current,
					start: "top 95%",
					end: "top 30%",
					scrub: true,
				},
				duration: 1,
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<div
			ref={socialsRef}
			className="max-sm:hidden w-[5vw] h-screen bg-slate-950 flex flex-col justify-end items-center pl-4 sm:pl-2"
		>
			<a href="https://www.linkedin.com/in/ponnala-venkata-padma-kishor-76679326a/">
				<img src={linkedin} alt="LinkedIn" className="w-8 h-8 m-2" />
			</a>
			<a href="https://github.com/Pvpkishore">
				<img src={github} alt="GitHub" className="w-8 h-8 m-2" />
			</a>
			<a href="https://leetcode.com/u/PONNALA-VENKATA-PADMA-KISHORE/">
				<img src={leetcode} alt="LeetCode" className="w-auto h-8 m-2" />
			</a>
			<div className="w-full flex justify-center">
				<div className="bottom-0 h-[11vh] w-0.5 bg-blue-400"></div>
			</div>
		</div>
	);
};

export default Socials;
