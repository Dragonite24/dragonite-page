declare module '*.mdx' {
	import type { Component } from 'svelte';
	import type { BlogPostFrontmatter } from '$lib/types/blog';

	export const metadata: BlogPostFrontmatter;
	export default Component;
}

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
