import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sanity from "@sanity/astro";
import netlify from '@astrojs/netlify';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
	adapter: netlify(), // Change to vercel!
	output: "hybrid",
	site: 'https://example.com',
	base: "/",
	trailingSlash: "ignore",  
	i18n: {
		defaultLocale: "en",
		locales: ["en", "ar"],
		routing: {
			prefixDefaultLocale: true
		}
	},
	integrations: [
		react(),
		mdx(),
		sitemap(),
		sanity({
			projectId: "bxls77uv",
			dataset: "production",
			studioBasePath: "/en/admin",
			useCdn: false,
			// `false` if you want to ensure fresh data
			apiVersion: "2024-03-25" // Set to date of setup to use the latest API version
		}),
	],

});
