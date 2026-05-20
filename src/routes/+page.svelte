<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import { site } from '$lib/config/site';
	import { summary } from '$lib/data/resume';
	import { resolvePath } from '$lib/utils/paths';
</script>

<Seo />

<Container tag="section">
	<header class="page-header">
		<p class="font-mono text-muted">Senior Frontend Developer</p>
		<h1 class="page-header__title">{site.name}</h1>
		<p class="page-header__description">{site.description}</p>
	</header>

	<section class="section" aria-labelledby="intro-heading">
		<h2 id="intro-heading" class="sr-only">Introduction</h2>
		<p class="prose">{summary}</p>
	</section>

	<section class="section" aria-labelledby="links-heading">
		<h2 id="links-heading" class="font-mono text-muted">Explore</h2>
		<ul class="home-links">
			<li>
				<a href={resolvePath('/portfolio')} class="home-links__item link-underline">
					<span class="home-links__label font-heading">Portfolio</span>
					<span class="home-links__meta font-mono text-muted">Experience, education &amp; skills</span>
				</a>
			</li>
			<li>
				<a href={resolvePath('/blog')} class="home-links__item link-underline">
					<span class="home-links__label font-heading">Blog</span>
					<span class="home-links__meta font-mono text-muted">Essays &amp; notes</span>
				</a>
			</li>
		</ul>
	</section>
</Container>

<style>
	.home-links {
		display: flex;
		flex-direction: column;
	}

	.home-links__item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding-block: var(--space-3);
		border-top: 1px solid var(--color-border);
	}

	.home-links__label {
		font-size: var(--font-size-lg);
		font-weight: 500;
	}

	.home-links__meta {
		font-size: var(--font-size-xs);
	}
</style>
