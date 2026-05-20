import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => {
			if (filename.split(/[/\\]/).includes('node_modules')) return undefined;
			// mdsvex output still uses legacy $$props until full runes support
			if (filename.endsWith('.mdx')) return false;
			return true;
		}
	},
	kit: {
		alias: {
			$styles: 'src/styles'
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : '/dragonite-page'
		}
	}
};

export default config;
