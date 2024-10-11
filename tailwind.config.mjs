/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '100px',
			// => @media (min-width: 640px) { ... }

			'md': '401px',
			// => @media (min-width: 768px) { ... }
		},
		extend: {},
	},
	plugins: [],
}
