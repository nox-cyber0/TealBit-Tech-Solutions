import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			prefix: 'nextui',
			addCommomColors: true,
			defaultTheme: 'light',
			defaultExtendTheme: 'light',
			laayout: {},
			themes: {
				light: {
					colors: {
						background: '#F6FAFE',
						foreground: '#1E293B',
						primary: {
							foreground: '#F6FAFE',
							DEFAULT: '#008080',
						},
					},
				},
				dark: {
					colors: {
						background: '#1E293B',
						foreground: '#F6FAFE',
						primary: {
							foreground: '#1E293B',
							DEFAULT: '#008080',
						},
					},
				},
			},
		}),
	],
};
