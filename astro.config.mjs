// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kssjw.github.io',
	integrations: [
		starlight({
			customCss: ['./src/styles/custom.css'],
			favicon: '/Favicon.png',
			title: 'FuseLeaf Studio',
			description: 'Rooted in code, blossoming in community.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/KSSJW/kssjw.github.io' },
				{ icon: 'email', label: 'Email', href: 'mailto:contact@fuseleaf.org' },
			],
			sidebar: [
				{
					label: 'Guide',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'guide/welcome' },
					],
				},
				{
					label: 'Organization',
					items: [{ autogenerate: { directory: 'organization' } }],
				},
				{
					label: 'Projects',
					items: [{ autogenerate: { directory: 'projects' } }],
				},
				{
					label: 'Engineering',
					items: [{ autogenerate: { directory: 'engineering' } }],
				},
				{
					label: 'Governance',
					items: [{ autogenerate: { directory: 'governance' } }],
				},
				{
					label: 'Closing',
					items: [{ autogenerate: { directory: 'closing' } }],
				},
			],
		}),
	],
});
