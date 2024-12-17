import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "../../assets/icons-white/github-white-icon.svg";
import passop from  "../../assets/images/projects/PassOp.png";
import GitHubGlazer from "../../assets/images/projects/GitG.png";
import Bookstore from "../../assets/images/projects/Bookstore.png"
import GlitchText from "../Effects/Glitch";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
	const revealTitle = useRef(null);
	const sectionRef = useRef(null);
	const revealProjects = useRef([]);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 90%",
				end: "top 78%",
				scrub: true,
				markers: false,
			},
		});

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 67%",
				end: "top 20%",
				scrub: true,
				markers: false,
			},
		});

		tl.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tl.fromTo(
			revealTitle.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<"
		);

		revealProjects.current.forEach((item, index) => {
			tl2.fromTo(
				item,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
				`<${index * 0.2}`
			);
		});

		return () => tl.kill();
	}, []);

	// Sample data
	const featuredProjects = [
		{
			frontmatter: {
				external: "https://passop-kishore.vercel.app/",
				title: "PassOP",
				tech: [
					"React js",
					"Mongo DB",
					"Node.Js",
					"Express js",
					"Tailwind css",
				],
				github: "https://github.com/Pvpkishore/PassOP-MERN-",
				cover: {
					src: passop,
					alt: "Passop",
				},
			},
			html: "<p>Passop is a secure password manager that allows users to store website URLs, usernames, and passwords. It offers features to easily add, edit, or delete entries, providing a safe and efficient way to manage sensitive login credentials.</p>",
		},
		// {
		// 	frontmatter: {
		// 		external: "https://youtube-videoconverter.onrender.com/",
		// 	    title: "youtube video converter",
		// 		tech: ["Html/css","javascript","NodeJs","Bootstrap"],
		// 		github: "https://github.com/Pvpkishore/Youtube-videoconverter",
		// 		cover: {
		// 			src:  Videoconverter,
		// 			alt: " Videoconverter"
		// 		},
		// 	},
		//     html: "<p>The YouTube downloader converts YouTube URLs into downloadable files, ensuring seamless video retrieval and user interaction with efficient server-side logic and session management for a smooth experience.</p>",
		// },
		{
			frontmatter: {
				// external: "https://passop-kishore.vercel.app/",
				title: "Book Store",
				tech: [
					"React js",
					"Mongo DB",
					"Node.Js",
					"Express js",
					"Tailwind css",
				],
				github: "https://github.com/Pvpkishore/Bookstore-Mern",
				cover: {
					src: Bookstore,
					alt: "Bookstore",
				},
			},
			html: "<p>Book den is mern project which have different books to access for free books and for paid books you need to access with login authentication</p>",
		},
		{
			frontmatter: {
				external: "https://github-glazer-kishore.vercel.app/",
			    title: "GitHub Glazer",
				tech: ["Typescript","React","OpenAI","Tailwindcss"],
				github: "https://github.com/Pvpkishore/GitHub_glazer",
				cover: {
					src: GitHubGlazer,
					alt: "GitHubGlazer"
				},
			},		
			html: "<p>Built with Typescript and React on Vite and using the OpenAI API for generating words of encouragement, the Github Glazer app is perfect to encourage you on your path to be an amazing software developer.</p>",	
		},
	];

	return (
		<section ref={sectionRef} id="projects" className="py-3 bg-slate-950 p-3">
			<h2
				ref={revealTitle}
				className="text-2xl md:text-3xl font-bold font-poppins text-primary mb-8"
			>
				<GlitchText ref={revealTitle} text="Some Things I've Built"/>
			</h2>
			<div className="container mx-auto px-4">
				<div>
					{featuredProjects.map(({ frontmatter, html }, i) => (
						<div
							key={i}
							className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-8"
						>
							<div className="col-span-7 md:col-span-6 my-auto relative group border-l-4 border-secondary p-1">
								<a
									href={
										frontmatter.external
											? frontmatter.external
											: frontmatter.github
											? frontmatter.github
											: "#"
									}
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="block"
								>
									<img
										src={frontmatter.cover.src}
										alt={frontmatter.cover.alt}
										className="w-full "
									/>
									<div className="absolute inset-0 bg-secondary-content opacity-40 group-hover:opacity-20 transition-opacity duration-300 "></div>
								</a>
							</div>

							<div
								ref={(el) => (revealProjects.current[i] = el)}
								className="col-span-7 md:col-span-6 "
							>
								<div className="p-1 md:p-6 border-r-2 md:border-r-4 border-secondary-content transition-transform transform hover:translate-y-[-5px]">
									<h4 className="text-sm md:text-base font-space font-bold  text-purple-100   mb-2">
										Featured Project
									</h4>
									<h5 className="text-xl md:text-2xl text-gray-100 font-poppins font-semibold md:mb-4 mb-2">
										{frontmatter.external ? (
											<a
												href={frontmatter.external}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="hover:text-red-100 "
											>
												{frontmatter.title}
											</a>
										) : (
											frontmatter.title
										)}
									</h5>
									<div
										className="text-sm md:text-lg leading-relaxed font-roboto mb-2 md:mb-4 text-justify text-gray-300 "
										dangerouslySetInnerHTML={{ __html: html }}
									/>
									{frontmatter.tech && (
										<ul className="flex flex-wrap mb-4">
											{frontmatter.tech.map((tech, i) => (
												<li
													key={i}
													className="font-space font-semibold text-xs md:text-smish text-purple-100  mr-2 mb-2 whitespace-nowrap"
												>
													{tech}
												</li>
											))}
										</ul>
									)}
									<div className="flex items-center">
										{frontmatter.github && (
											<a
												href={frontmatter.github}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="text-lightestSlate hover:text-primary mr-4"
												aria-label="GitHub Link"
											>
												<img
													className="lg:w-12 lg:h-12 md:w-10 md:h-10 h-8 w-8 fill-white"
													src={github}
													alt="GitHub"
												/>
											</a>
										)}
										{frontmatter.external && (
											<a
												href={frontmatter.external}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="text-lightestSlate hover:text-primary"
												aria-label="External Link"
											>
												<button className="btn btn-outline btn-md border border-blue-900  font-poppins text-slate-300 hover:bg-primary transition-all duration-200  hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-400 hover:text-slate-900">
													Preview
												</button>
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

Featured.propTypes = {
	data: PropTypes.array.isRequired, // Adjust PropTypes if needed
};

export default Featured;
