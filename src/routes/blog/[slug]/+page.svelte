<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import { formatDisplayDate, formatIsoDate } from '$lib/seo';
	import { resolvePath } from '$lib/utils/paths';

	let { data } = $props();
	const meta = $derived(data.meta);
	const PostContent = $derived(data.Component);
</script>

<Seo
	title={meta.title}
	description={meta.description}
	canonical="/blog/{meta.slug}"
	type="article"
	publishedTime={formatIsoDate(meta.date)}
	tags={meta.tags}
/>

<Container tag="article">
	<header class="page-header">
		<time class="font-mono text-muted" datetime={meta.date}>
			{formatDisplayDate(meta.date)}
		</time>
		<h1 class="page-header__title">{meta.title}</h1>
		<p class="page-header__description">{meta.description}</p>
		{#if meta.tags.length > 0}
			<ul class="post-tags" aria-label="Tags">
				{#each meta.tags as tag}
					<li><span class="tag">{tag}</span></li>
				{/each}
			</ul>
		{/if}
	</header>

	<div class="prose post-body">
		<PostContent />
	</div>

	<footer class="post-footer">
		<a href={resolvePath('/blog')} class="link-underline font-mono">← All posts</a>
	</footer>
</Container>

<style>
	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
		margin-top: var(--space-2);
	}

	.post-footer {
		margin-top: var(--space-5);
		padding-top: var(--space-3);
		border-top: 1px solid var(--color-border);
	}
</style>
