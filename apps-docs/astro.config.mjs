// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: '62 Docs',
        logo: {
          src: './src/assets/2.svg',
          dark: './src/assets/2.svg',
          replacesTitle: true,
        },
        social: {
            github: 'https://github.com/withastro/starlight',
        },
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
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'Fivem',
                items: [
                    { label: 'Fivem Docs', slug: 'fivem/example'},
                ],
            },
        ],
        customCss: ['./src/tailwind.css'],
		}), tailwind({ applyBaseStyles: true }), mdx()],
});