import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import react from "../../assets/icons-white/react-js-icon.svg";
import node from "../../assets/icons-white/node-js-icon.svg";
// import fast from "../../assets/logos/icons8-fastapi.png";
import tailwind from "../../assets/icons-white/tailwind-css-icon.svg";
import express from "../../assets/icons-white/icons8-express-js.png";
import bootstrap from "../../assets/icons-white/bootstrap-5-logo-icon.svg";
import mongo from "../../assets/icons-white/mongodb-icon.svg";
import mysql from "../../assets/logos/icons8-mysql.png";
import GlitchText from "../Effects/Glitch";



const Frameworks = () => {
	const sections = useRef([]);
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const itemsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tlFrame = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 90%",
				end: "top 78%",
				scrub: true,
				markers: false,
			},
		});

		tlFrame.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tlFrame.fromTo(
			headingRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<" // ensures heading animation starts immediately after section animation starts
		);

		itemsRef.current.forEach((item, index) => {
			tlFrame.fromTo(
				item,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: "power2.out",
					delay: index * 0.1,
				},
				"<" // ensures items animate after heading animation starts
			);
		});

		return () => tlFrame.kill();
	}, []);

	const frameData = [
		{ title: "Express.Js", icon: express },
		{ title: "React.Js", icon: react },
		{ title: "Node.js", icon: node },
		// { title: "FastAPI", icon: fast },
		{ title: "Tailwind CSS", icon: tailwind },
		{ title: "Bootstrap", icon: bootstrap },
		{ title: "MongoDB", icon: mongo },
		// { title: "MySQL", icon: mysql },
	];

	return (
		<section id="frameworks" ref={sectionRef} className="flex flex-col p-3">
			<h2
				ref={headingRef}
				className="text-2xl md:text-3xl font-bold font-poppins text-primary mb-2 md:mb-6"
			>
			<GlitchText ref={headingRef} text="Frameworks and Databases I like" />
			</h2>
			<div className="flex flex-wrap justify-start my-2">
				{frameData.map((item, index) => (
					<div
						key={index}
						ref={(el) => (itemsRef.current[index] = el)}
						className="flex flex-col items-center mx-4 md:mx-8 mb-4"
						style={{ width: "60px"}}
					>
						<img
							src={item.icon}
							alt={item.title}
							className="w-auto h-8 md:h-10 lg:h-12 mx-2 object-contain transition-transform transform hover:scale-110 hover:drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]"
							style={{ maxWidth: "100%" }}
						/>
						<h3 className="text-sm md:text-lg font-semibold mt-2 text-secondary text-center">
							{item.title}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default Frameworks;
