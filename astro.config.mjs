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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
