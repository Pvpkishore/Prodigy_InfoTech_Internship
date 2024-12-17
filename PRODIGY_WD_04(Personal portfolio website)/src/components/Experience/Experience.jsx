import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
	const [activeTabId, setActiveTabId] = useState(0);
	const tabs = useRef([]);
	const panels = useRef([]);
	const sectionRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 90%",
				end: "top 78%",
				scrub: true,
				markers: false, // for debug, remove in production
			},
		});

		tl.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		data.forEach((job, index) => {
			tl.fromTo(
				tabs.current[index],
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5,
				  ease: "power2.out" },
				"-=0.4"
			);
		});

		return () => tl.kill();
	}, []);

	const onTabClicked = (index) => {
		if (index !== activeTabId) {
			animatePanelOut(activeTabId);
			setActiveTabId(index);
			animatePanelIn(index);
		}
	};

	const animatePanelIn = (index) => {
		gsap.fromTo(
			panels.current[index],
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }
		);
	};

	const animatePanelOut = (index) => {
		gsap.to(panels.current[index], {
			opacity: 0,
			y: -20,
			duration: 1,
			ease: "power3.out",
		});
	};

	const data = [
		{
			company: "CoreStack",
			title: "SWE Summer Intern",
			url: "https://www.corestack.io/",
			range: "May 2024 - July 2024",
			html: `
        <ul className="list-disc">
          <li>• Developed data generation programs for Azure CSP schema with over 50 correlated fields.</li>
          <li>• Created programs to randomly generate data and estimate user service billing costs.</li>
          <li>• Implemented FastAPI servers for API endpoints handling billing details, product codes, and date ranges, with data hosted on MongoDB.</li>
          <li>• Enabled pagination with token generation for efficient data retrieval and server caching.</li>
        </ul>
      `,
			buttonText: "CoreStack",
		},
		{
			company: "Hardware Lab - CSED, NITC",
			title: "Summer Intern",
			url: "https://hwlabnitc.github.io/",
			range: "May 2024 - June 2024",
			html: `
        <ul className="list-disc">
          <li>• Wrote MIPS code and created extensive study material for the Hardware Lab course at NITC.</li>
          <li>• Focused on recursion and function parameter passing.</li>
          <li>• Resulted in a more comprehensive and extensive documentation.</li>
        </ul>
      `,
			buttonText: "HW Lab NITC",
		},
	];

	return (
		<section
			id="experience"
			ref={sectionRef}
			className="flex flex-col p-3 py-8"
		>
			<h2 className="text-2xl md:text-3xl font-bold font-poppins text-primary mb-8">
				Where I've Worked
			</h2>
			<div className="flex flex-col md:flex-row max-w-2xl">
				<div
					role="tablist"
					aria-label="Job tabs"
					className="flex flex-col md:mr-8 mb-6 md:mb-0"
				>
					{data.map((job, i) => (
						<button
							key={i}
							onClick={() => onTabClicked(i)}
							ref={(el) => (tabs.current[i] = el)}
							id={`tab-${i}`}
							role="tab"
							aria-selected={activeTabId === i ? true : false}
							aria-controls={`panel-${i}`}
							tabIndex={activeTabId === i ? "0" : "-1"}
							className={`btn-square btn-ghost w-full text-left font-space font-bold text-sm py-2 px-4 min-w-[150px] ${
								activeTabId === i
									? "border-l-4 border-t-0 border-b-0 border-r-0 border-primary"
									: "border-l-4 border-t-0 border-b-0 border-r-0 border-secondary-content"
							}`}
						>
							{job.buttonText}
						</button>
					))}
				</div>

				<div className="relative w-full">
					{data.map((job, i) => (
						<div
							key={i}
							ref={(el) => (panels.current[i] = el)}
							className={`job-panel ${
								activeTabId === i ? "opacity-100" : "opacity-0 hidden"
							}`}
						>
							<h4 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-primary-content font-poppins mb-2">
								{job.title}
								<span className="text-primary ">
									&nbsp;at&nbsp;
									<a
										href={job.url}
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="underline"
									>
										{job.company}
									</a>
								</span>
							</h4>
							<h5 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-roboto font-bold text-primary mb-4">
								{job.range}
							</h5>
							<div
								className="2xl:text-xl xl:text-lg lg:text-base md:text-sm text-sm font-roboto text-primary text-justify"
								dangerouslySetInnerHTML={{ __html: job.html }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
