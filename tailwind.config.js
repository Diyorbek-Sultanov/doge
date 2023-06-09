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
			secondary: '#E9E9E9',
			sliderSec: '#EEEEEE',
			error: '#ff0000'
		},
		extend: {
			colors: {
				orange: '#EC3B22',
				imgBg: 'rgba(#EC3B22, .3)'
			},
			boxShadow: {
				catShadow: '0px 24px 84px rgba(0, 0, 0, 0.12)'
			},
			backgroundColor: {
				favorit: 'rgba(0, 0, 0, 0.09)',
				modal: 'rgba(0, 0, 0, .6)'
			},
			gridTemplateColumns: {
				productDetailGrid: '9fr 3fr',
				productInfoGrid: '1fr 4fr 4fr',
				productTabGrid: '4fr 4fr',
				cartGrid: '8fr 4fr'
			}
		}
	},
	plugins: []
}
