const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: '3rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				gray: colors.neutral,
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
