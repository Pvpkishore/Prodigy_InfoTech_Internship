import React from "react";

const Footer = () => {
	return (
		<footer className="footer footer-left bg-slate-950 text-base-content p-4 my-5 border-secondary-content border-t-4">
			<aside>
				<p className="text-xs md:text-sm font-poppins text-white font ">
					Copyright © {new Date().getFullYear()} - All right reserved by pvpkishore
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
