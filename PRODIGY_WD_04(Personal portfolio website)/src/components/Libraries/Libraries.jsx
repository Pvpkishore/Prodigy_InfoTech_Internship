import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scikit from "../../assets/logos/icons8-scikit.png";
import seaborn from "../../assets/logos/icons8-seaborn.png";
import numpy from "../../assets/logos/icons8-numpy.svg";
import pandas from "../../assets/logos/icons8-pandas.svg";
import aws from "../../assets/logos/icons8-amazon-aws.png";
import docker from "../../assets/logos/icons8-docker.png";
import git from "../../assets/icons-white/git-icon.svg";
import GlitchText from "../Effects/Glitch";

const Libraries = () => {
	const sections = useRef([]);
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const itemsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tlLib = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 90%",
				end: "top 78%",
				scrub: true,
				markers: false,
			},
		});

		tlLib.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tlLib.fromTo(
			headingRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<" // ensures heading animation starts immediately after section animation starts
		);

		itemsRef.current.forEach((item, index) => {
			tlLib.fromTo(
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

		return () => tlLib.kill();
	}, []);

	const libData = [
		// { title: "Scikit-Learn", icon: scikit },
		// { title: "Seaborn", icon: seaborn },
		// { title: "NumPy", icon: numpy },
		// { title: "Pandas", icon: pandas },
		{ title: "Git", icon: git },
		// { title: "AWS", icon: aws },
		// { title: "Docker", icon: docker },
	];

	return (
		<section id="libraries" ref={sectionRef} className="flex flex-col p-3">
			<h2
				ref={headingRef}
				className="text-2xl md:text-3xl font-bold font-poppins text-primary mb-2 md:mb-6"
			>
			<GlitchText ref={headingRef} text="Libraries & Services I use" />
			</h2>
			<div className="flex flex-wrap justify-start my-2">
				{libData.map((item, index) => (
					<div
						key={index}
						ref={(el) => (itemsRef.current[index] = el)}
						className="flex flex-col items-center mx-4 md:mx-8 mb-4"
						style={{ width: "60px" }}
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

export default Libraries;
