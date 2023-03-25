const { default: plugin } = require('tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{ js, jsx, ts, tsx }'
	],
	theme: {
		fontSize: {
			'text-xs': '11px',
			'text-sm': '13px',
			'text-md': '15px',
			'text-xl': '17px',
			'text-2xl': '20px',
			'text-3xl': '24px',
			'text-4xl': '28px',
			'text-5xl': '40px'
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif']
		},
		colors: {
			white: '#fff',
			black: '#2F2F2F',
			gray: '#C1C1C1',
			whiteLight: '#FFF0E6',
			secondary: '#E9E9E9'
		},
		extend: {
			colors: {
				orange: '#EC3B22'
			}
		}
	},
	plugins: [
		//require('@tailwindcss/forms')
		//plugin(function ({ addUtilities }) {
		//	addUtilities({
		//		'.flex-center': {
		//			display: 'flex',
		//			alignItems: 'center'
		//		}
		//	})
		//})
	]
}
