import type { Component } from 'svelte';

export interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
	draft?: boolean;
}

export interface BlogPost extends BlogPostMeta {
	Component: Component;
}

/** Frontmatter shape for MDX files in `src/content/blog/`. */
export interface BlogPostFrontmatter {
	title: string;
	description: string;
	date: string;
	tags?: string[];
	draft?: boolean;
}
