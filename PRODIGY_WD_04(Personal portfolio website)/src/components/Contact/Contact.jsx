import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlitchText from "../Effects/Glitch";

const Languages = () => {
	const sectionRef = useRef(null);
	const mailRef = useRef(null);
	const headingRef=  useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 90%",
				end: "top 78%",
				scrub: true,
				markers: false,
			},
		});

		tl.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		)
		tl.fromTo(
            headingRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<"
        );

		tl.fromTo(
			mailRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<"
		);
	}, []);

	return (
		<section
			ref={sectionRef}
			id="contact"
			className="flex flex-col p-3 bg-slate-950 min-h-[20vh]"
		>
			<h2 ref={sectionRef} className="text-2xl md:text-3xl font-bold font-poppins text-slate-200 mb-1">
				<GlitchText ref={headingRef} text="Get in touch" />
			</h2>
			<div className=" m-3 max-w-[70%]">
				<h1 className="text-purple-200  text-md md:text-xl font-poppins mt-2">
					Send me an email at
				</h1>
				<a
					ref={mailRef}
					href="mailto:pvpkishore09@gmail.com"
					className="text-lg md:text-2xl font-space font-bold text-slate-300 hover:underline "
				>
					<div className="flex flex-row ">
						<lord-icon
							src="https://cdn.lordicon.com/ozlkyfxg.json"
							trigger="hover"
							stroke="bold"
							colors="primary:#e4e4e4,secondary:#2516c7"
							style={{ width: "40px", height: "40px" }} // Corrected style syntax
						></lord-icon>
						pvpkishore09@gmail.com
					</div>

				</a>
				<h1 className="max-w-[100%] text-secondary text-md md:text-xl font-poppins ">
				I'm always open to discussing new projects, creative ideas, or opportunities to be a part of your vision.
				Feel free to reach out to me using the my email
				</h1>
			</div>
		</section>
	);
};

export default Languages;
