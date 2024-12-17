import React from "react";
import Hero from "../Hero/Hero";
import Experience from "../Experience/Experience";
import Stack from "../Stack/Stack";
import Featured from "../MajorProjects/MajorProjects";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import MovingLightBackground from "../Effects/MovingLightEffect";

const BodyCont = () => {
	return (
		<MovingLightBackground>
		<div className="w-[95vw] md:w-[90vw] m-auto bg-slate-950  min-h-svh overflow-hidden">
			<div className="w-11/12 m-auto bg-slate-950   ">
				<Hero />
				{/* <Experience /> */}
				<Stack />
				<Featured />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
		</MovingLightBackground>
	);
};

export default BodyCont;
