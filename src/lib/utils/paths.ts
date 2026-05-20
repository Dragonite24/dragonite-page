import { base } from '$app/paths';

/** Resolve an app path against the configured `paths.base` (e.g. GitHub Pages). */
export function resolvePath(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
}
