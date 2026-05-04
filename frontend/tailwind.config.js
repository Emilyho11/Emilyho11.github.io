/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main_purple: "#9D81FF",
				dark_blue_background: "#0B0B1A",
				dark_blue: "#2A2F4F",
				back_light_blue: "#D0E4F3",
				light_blue: "#EBF1F5",
				gray: "#D5DADE",
				links: "#54a4fa",
			},
			width: {
				"1/8": "12.5%",
        		"1/10": "10%",
			},
			keyframes: {
				blink: {
				'from, to': { borderColor: 'transparent' },
				'50%': { borderColor: 'black' },
				},
			},
			animation: {
				typing: 'steps(40, end) forwards, blink 0.75s step-end infinite',
			},
		},
	},
	plugins: [],
};
