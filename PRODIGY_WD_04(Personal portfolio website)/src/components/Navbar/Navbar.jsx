import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import resume from "../../assets/resume/Pvpkishore_SoftwareDevloper_resume.pdf";
import ElasticText from "../Effects/Elastic";


const Navbar = () => {
	const logoRef = useRef(null);
	const menuItemsRef = useRef([]);
	const [isOpen, setIsOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	// Sticky Navbar effect on scroll
	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// GSAP animations for logo and menu items
	useEffect(() => {
		gsap.fromTo(
			logoRef.current,
			{ y: -50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power3.out" }
		);
		gsap.fromTo(
			menuItemsRef.current,
			{ y: -50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15 }
		);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div
			className={`top-0  navbar justify-center bg-slate-950 fixed w-full transition-all duration-300 ease-in-out ${isSticky ? "shadow-md shadow-slate-900  bg-opacity-100  " : ""
				} z-50`}
		>
			<div className="navbar-start ">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden text-sm "
						onClick={toggleMenu}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>

					</div>
					<ul
						tabIndex={0}
						className={`menu menu-sm dropdown-content bg-slate-900 rounded-box z-10 mt-3 w-52 p-2 shadow font-space font-semibold text-secondary ${isOpen ? "block" : "hidden"
							}`}
					>
						{["Experience", "Skills", "Projects", "Contact"].map((section, index) => (
							<li key={section}>
								<Link
									to={section.toLowerCase()}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500 + index * 100}
									className="text-sm bg-gradient-to-r from-blue-300 via-sky-400 to-blue-400  inline-block text-transparent bg-clip-text"
									onClick={toggleMenu}
								>
									{section}
								</Link>
							</li>
						))}
						<li>
							<a
								href={resume}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-outline border border-blue-400 hover:border-blue-400 hover:text-slate-100 btn-md font-bold text-md text-blue-300 hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-400 "
								onClick={toggleMenu}
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
				<ElasticText ref={logoRef} text="Pvp Kishore" className="text-2xl font-poppins font-bold ml-6" />
			</div>
			<div className="navbar-center hidden lg:flex justify-center"></div>
			<div className="navbar-end">
				<ul className="menu menu-horizontal px-1 font-space font-semibold text-slate-200  hidden sm:flex">
					{["Experience", "Skills", "Projects", "Contact"].map((section, index) => (
						<li ref={(el) => (menuItemsRef.current[index] = el)} key={section}>
							<Link
								to={section.toLowerCase()}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500 + index * 100}
								className="text-sm px-3 ml-1 py-2 rounded-md transition-all duration-200  hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-400 hover:text-slate-900"
								onClick={toggleMenu}
							>
								{section}
							</Link>
						</li>
					))}
					<li ref={(el) => (menuItemsRef.current[4] = el)}>
						<a
							href={resume}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-outline border border-blue-900  font-poppins text-slate-300 text-sm ml-3 hover:bg-primary transition-all duration-200  hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-400 hover:text-slate-900"
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
