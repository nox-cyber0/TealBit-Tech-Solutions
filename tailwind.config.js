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
			addCommonColors: true,
			defaultTheme: 'light',
			defaultExtendTheme: 'light',
			layout: {},
			themes: {
				light: {
					colors: {
						background: '#F8FAFC',
						foreground: '#0F172A',
						primary: {
							foreground: '#F8FAFC',
							DEFAULT: '#008080',
						},
						secondary: {
							background: '#F6FAFE',
							foreground: '#1E293B',
							DEFAULT: '#004044',
						},
					},
				},
				dark: {
					colors: {
						background: '#0F172A',
						foreground: '#64748B',
						primary: {
							foreground: '#0F172A',
							DEFAULT: '#008080',
						},
						secondary: {
							background: '#1E293B',
							foreground: '#F6FAFE',
							DEFAULT: '#004044',
						},
					},
				},
			},
		}),
	],
};

// 1E293B
