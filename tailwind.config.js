const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	safelist: ['bg-TypeScript', 'bg-null'],
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
			animation: {
				'spin-slow': 'spin 2s linear infinite',
			},
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				gray: colors.slate,
				primary: colors.sky,
				TypeScript: '#007acc',
				null: '#000000',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
};
