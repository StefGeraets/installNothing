import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope Variable', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('@tailwindcss/typography')
	]
};
