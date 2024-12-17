import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import githubIcon from "../../assets/icons-white/github-white-icon.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlitchText from "../Effects/Glitch";

const Projects = () => {
	const [showMore, setShowMore] = useState(false);
	const projectsRef = useRef(null);
	const titleRef = useRef(null);
	const revealProjects = useRef([]);

	const GRID_LIMIT = 3; // Maximum projects to show initially
	const projects = [
		// {
		// 	frontmatter: {
		// 		title: "AI talking Chatbot",
		// 		html: "<p>The AI Talking Bot App is an intelligent chatbot built using Express.js, React.js, and OpenAI. It engages users in natural, dynamic conversations powered by AI, offering responses based on advanced language models. The backend handles API requests with Express.js, while the frontend, developed in React.js</p>",
		// 		tech: ["Express.js", "React.js", "Open AI"],
		// 	},
		// 	github: "https://github.com/Pvpkishore/Keeper-App",
		// 	external: "",
		// },
		{
			frontmatter: {
				title: "Lets chat",
				html: "<p>The Real-Time Chat App, built using Node.js, JavaScript, and WebSocket.io, enables instant messaging between users. It supports real-time communication with smooth, interactive chat features, allowing users to send and receive messages instantly.</p>",
				tech: ["Express.js", "Javascript", "socket.io"],
			},
			github: "https://github.com/Pvpkishore/Lets-chat",
			// external: "https://github-profile-finder-kishore.vercel.app/",
		},
		{
			frontmatter: {
				title: "GitHub profile Finder",
				html: "<p>The GitHub Profile Finder project uses the GitHub API, HTML, CSS, and JavaScript to search for GitHub users by their username. It retrieves and displays information such as the user's profile picture, bio, repositories, followers, and following count.</p>",
				tech: ["Javascript","API","Html/Tailwind css"],
			},
			github: "https://github.com/Pvpkishore/Github-profile-finder",
			external: "https://github-profile-finder-kishore.vercel.app/",
		},
		{
			frontmatter: {
				title: "WeatherX",
				html: "<p>WeatherX is a JavaScript-based web application that fetches real-time weather details for any city using a weather API. Built with HTML, CSS, and JavaScript, the app provides a clean interface to display temperature, conditions, and other weather data, offering a user-friendly experience.</p>",
				tech: [
					"Javascript",
					"Rapid API",
					"HTML/CSS",
				],
			},
			github: "https://github.com/Pvpkishore/Wheather-Api",
			external: "https://wheather-api-kishores.vercel.app/",
		},
		{
			frontmatter: {
				title: "MusicX",
				html: "<p>MusicX is a web application built using JavaScript, HTML, and CSS, designed to offer users a seamless music streaming experience. The app features a sleek interface where users can browse, play, and manage their favorite tracks, highlighting my skills in frontend development and interactive media applications</p>",
				tech: ["Javascript", "HTML/CSS"],
			},
			github: "https://github.com/Pvpkishore/Music-App",
			external: "https://pvpkishore.github.io/Music-App/",
		},
		{
			frontmatter: {
				title: "Project web",
				html: "<p>Project Web is a sleek and responsive portfolio platform that showcases all of my development projects in one place.Each project includes descriptions, and links to GitHub repositories or live demos. It's designed to give users a clear overview of my skills I've worked on, from web apps to AI-powered solutions.</p>",
				tech: ["Javascript", "HTML/Tailwind CSS", "Gsap"],
			},
			github: "https://github.com/Pvpkishore/Projects_List",
			external: "https://my-projects-kishore.vercel.app/",
		},

	];

	const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectsRef.current,
				start: "top 90%",
				end: "top 78%",
				scrub: true,
				markers: false,
			},
		});

		tl.fromTo(
			projectsRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tl.fromTo(
			titleRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<"
		);

		revealProjects.current.forEach((item, index) => {
			tl.fromTo(
				item,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
				`<${index * 0.2}`
			);
		});
	}, []);

	return (
		<section className="py-3 bg-slate-950 p-3">
			<h2
				ref={titleRef}
				className="text-2xl md:text-3xl font-bold font-poppins text-primary mb-8"
			>
              <GlitchText ref={titleRef} text="Other Projects" />
			</h2>
			<div ref={projectsRef} className="container md:mx-auto px-4">
				<div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
					{projectsToShow.map(({ frontmatter, github, external }, i) => (
						<div
							key={i}
							ref={(el) => (revealProjects.current[i] = el)}
							className="text-primary p-1 md:p-6 border-b-4 border-secondary-content "
						>
							<div className="flex justify-start items-center mb-2 ">
								{github && (
									<a
										className="mr-2"
										href={github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src={githubIcon}
											alt="GitHub Icon"
											className="w-8 h-8"
										/>
									</a>
								)}
								{external && (
									<a
										className="mx-2"
										href={external}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="btn btn-outline btn-sm border border-blue-900  font-poppins text-slate-300 hover:bg-primary transition-all duration-200  hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-400 hover:text-slate-900">Visit</button>
									</a>
								)}
							</div>
							<div className="flex">
								{external ? (
									<a
										href={external}
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="text-violet-200 font-poppins font-semibold text-lg hover:text-red-100"
									>
										{frontmatter.title}
									</a>
								) : (
									<span className="text-primary font-poppins font-semibold text-lg">
										{frontmatter.title}
									</span>
								)}
							</div>
							<div
								className="text-sm md:text-lg leading-relaxed mb-4 font-roboto text-gray-300 text-justify"
								dangerouslySetInnerHTML={{ __html: frontmatter.html }}
							/>
							{frontmatter.tech && (
								<ul className="flex flex-wrap mb-4">
									{frontmatter.tech.map((item, i) => (
										<li
											key={i}
											className="text-xs md:text-sm font-space font-bold text-purple-100 mr-2 mb-1"
										>
											{item}
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>

				<button
					onClick={() => setShowMore(!showMore)}
					className="btn btn-outline btn-md border border-blue-900  text-slate-300 hover:bg-primary transition-all duration-200  hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-400 hover:text-slate-900 font-poppins mt-8 mx-auto block"
				>
					Show {showMore ? "Less" : "More"}
				</button>
			</div>
		</section>
	);
};

Projects.propTypes = {
	// No props required
};

export default Projects;
