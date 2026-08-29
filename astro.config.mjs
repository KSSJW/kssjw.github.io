// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kssjw.github.io',
	integrations: [
		starlight({
			favicon: '/Favicon.png',
			title: 'FuseLeaf',
			description: 'Rooted in code, blossoming in community.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/KSSJW/kssjw.github.io' }],
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
