<script lang="ts">
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import { getSortedPosts } from "$lib/content/posts";

  const posts = getSortedPosts();
</script>

<Seo
  title="Blog"
  description="Essays and notes on design, engineering, and building for the web."
  canonical="/blog"
/>

<Container tag="section">
  <header class="page-header">
    <p class="font-mono text-muted">Writing</p>
    <h1 class="page-header__title">Blog</h1>
    <p class="page-header__description">
      Longer thoughts on craft, constraints, and the quiet details that make
      interfaces feel intentional.
    </p>
  </header>

  <div class="blog-list" role="feed" aria-label="Blog posts">
    {#each posts as post (post.slug)}
      <ArticleCard {post} />
    {/each}
  </div>
</Container>

<style>
  .blog-list {
    display: flex;
    flex-direction: column;
  }

  .blog-list :global(.article-card:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
</style>
