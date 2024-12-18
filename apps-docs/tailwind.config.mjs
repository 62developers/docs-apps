import colors, { black, neutral, orange, red, slate, white } from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: colors.red,
				slate: colors.slate,
				neutral: colors.neutral,
				black: colors.black,
				white: colors.white,
				orange: colors.orange,
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: colors.indigo,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.zinc,
			},
			fontFamily: {
				sans: ['"Atkinson Hyperlegible"'],
				mono: ['"IBM Plex Mono"'],
			},
		},
	},
	plugins: [starlightPlugin()],
};
