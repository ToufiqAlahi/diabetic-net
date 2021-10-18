const colors = require('tailwindcss/colors');
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1080px',
			xl: '1440px',
		},
		colors: {
			blue: {
				10: '#F2F3F5',
				20: '#6A87C1',
				30: '#5973B0',
				40: '#2F4171',
				50: '#222e52',
				...colors.blue,
			},
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			bluegray: colors.blueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			orange: colors.orange,
			green: colors.green,
			lime: colors.lime,
			brand: {
				1: '#CD4760',
			},
		},
		fontFamily: {},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '10rem',
			'9xl': '13rem',
			'10xl': '16rem',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
