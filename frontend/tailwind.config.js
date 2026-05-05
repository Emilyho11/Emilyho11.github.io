/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main_purple: "#9D81FF",
				light_purple: "#B6A8DF",
				buttons_purple: "#74669c",
				dark_blue_background: "#0B0B1A",
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
