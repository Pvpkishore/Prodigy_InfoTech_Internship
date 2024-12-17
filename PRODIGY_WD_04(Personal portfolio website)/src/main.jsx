import React from "react";
import ReactDOM from "react-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar/Navbar";
import BodyCont from "./components/Body/Body";
import Socials from "./components/Socials/Socials";
import EmailCont from "./components/Email/Email";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="w-[100vw] m-auto relative z-50 mt-5 bg-slate-950 rounded-full">
			<Navbar />
		</div>
		<div className="flex flex-row bg-slate-950">
			<div className="fixed top-0 left-0 h-full z-0">
				<Socials />
			</div>
			<div className="flex-1 ">
				<BodyCont />
			</div>
			<div className="fixed top-0 right-0 h-full z-0">
				<EmailCont />
			</div>
		</div>
		<Analytics />
	</React.StrictMode>
);
