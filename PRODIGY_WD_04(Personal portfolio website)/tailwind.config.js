/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				poppins: ["Poppins", "serif"],
				space: ["Space Mono", "monospace"],
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#000000",

					"primary-content": "#989898",

					secondary: "#5c6c74",

					"secondary-content": "#dce0e2",

					accent: "#1f2931",

					"accent-content": "#cdd0d2",

					neutral: "#25233D",

					"neutral-content": "#ceced5",

					"base-100": "#f6f6f6",

					"base-200": "#d6d6d6",

					"base-300": "#b7b7b7",

					"base-content": "#151515",

					info: "#0284c7",

					"info-content": "#00060e",

					success: "#16a34a",

					"success-content": "#000a02",

					warning: "#f59e0b",

					"warning-content": "#150900",

					error: "#ef4444",

					"error-content": "#140202",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
