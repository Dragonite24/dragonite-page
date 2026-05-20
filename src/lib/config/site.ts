import { yearsOfExperienceLabel } from '$lib/data/resume';

export const site = {
	name: 'Semen Kolesnikov',
	title: 'Semen Kolesnikov — Senior Frontend Developer',
	description: `Senior Frontend Developer with ${yearsOfExperienceLabel()} years building scalable React, TypeScript, and Next.js applications—focused on architecture, performance, and maintainable UI systems.`,
	url: 'https://yourusername.github.io/dragonite-page',
	author: 'Semen Kolesnikov',
	locale: 'en',
	email: import.meta.env.PUBLIC_SITE_EMAIL ?? '',
	github: import.meta.env.PUBLIC_SITE_GITHUB ?? '',
	telegram: import.meta.env.PUBLIC_SITE_TELEGRAM ?? ''
} as const;

export type SiteConfig = typeof site;
