<script lang="ts">
  import type { BlogPostMeta } from "$lib/types/blog";
  import { formatDisplayDate } from "$lib/seo";
  import { resolvePath } from "$lib/utils/paths";

  interface Props {
    post: BlogPostMeta;
  }

  let { post }: Props = $props();
</script>

<article class="article-card">
  <a href={resolvePath(`/blog/${post.slug}`)} class="action-card article-card__link">
    <span class="action-card__content">
      <header class="article-card__header">
        <time
          class="article-card__date font-mono text-muted"
          datetime={post.date}
        >
          {formatDisplayDate(post.date)}
        </time>
        <h2 class="action-card__title font-heading">{post.title}</h2>
      </header>
      <p class="article-card__description">{post.description}</p>
      {#if post.tags.length > 0}
        <ul class="article-card__tags" aria-label="Tags">
          {#each post.tags as tag}
            <li><span class="tag">{tag}</span></li>
          {/each}
        </ul>
      {/if}
    </span>
    <span class="action-card__arrow" aria-hidden="true">→</span>
  </a>
</article>

<style>
  .article-card__link {
    align-items: flex-start;
  }

  .article-card__link .action-card__title {
    font-size: var(--font-size-xl);
  }

  .article-card__header {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .article-card__date {
    font-size: var(--font-size-xs);
  }

  .article-card__description {
    font-size: var(--font-size-sm);
    color: var(--color-muted);
    line-height: var(--line-height-relaxed);
    max-width: 55ch;
  }

  .article-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1);
    margin-top: var(--space-1);
  }
</style>
