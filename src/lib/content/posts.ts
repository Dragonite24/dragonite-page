import type { BlogPost, BlogPostFrontmatter, BlogPostMeta } from '$lib/types/blog';
import type { Component } from 'svelte';

type MdxModule = {
	metadata: BlogPostFrontmatter;
	default: Component;
};

const modules = import.meta.glob<MdxModule>('/src/content/blog/*.mdx', { eager: true });

function slugFromPath(path: string): string {
	const filename = path.split('/').pop() ?? '';
	return filename.replace(/\.mdx$/, '');
}

function toMeta(slug: string, frontmatter: BlogPostFrontmatter): BlogPostMeta {
	return {
		slug,
		title: frontmatter.title,
		description: frontmatter.description,
		date: frontmatter.date,
		tags: frontmatter.tags ?? [],
		draft: frontmatter.draft ?? false
	};
}

function getAllPosts(): BlogPost[] {
	return Object.entries(modules).map(([path, mod]) => ({
		...toMeta(slugFromPath(path), mod.metadata),
		Component: mod.default
	}));
}

export function getSortedPosts(): BlogPostMeta[] {
	return getAllPosts()
		.filter((post) => !post.draft)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.map(({ slug, title, description, date, tags, draft }) => ({
			slug,
			title,
			description,
			date,
			tags,
			draft
		}));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	const post = getAllPosts().find((p) => p.slug === slug);
	if (!post || post.draft) return undefined;
	return post;
}
