<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import { site } from "$lib/config/site";
  import { summary } from "$lib/data/resume";
  import { resolvePath } from "$lib/utils/paths";
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
    <h2 id="links-heading" class="section-label font-mono text-muted">Explore</h2>
    <ul class="action-card-list">
      <li>
        <a href={resolvePath("/portfolio")} class="action-card">
          <span class="action-card__content">
            <span class="action-card__title font-heading">Portfolio</span>
            <span class="action-card__meta font-mono text-muted"
              >Experience, education &amp; skills</span
            >
          </span>
          <span class="action-card__arrow" aria-hidden="true">→</span>
        </a>
      </li>
      <li>
        <a href={resolvePath("/blog")} class="action-card">
          <span class="action-card__content">
            <span class="action-card__title font-heading">Blog</span>
            <span class="action-card__meta font-mono text-muted"
              >Essays &amp; notes</span
            >
          </span>
          <span class="action-card__arrow" aria-hidden="true">→</span>
        </a>
      </li>
    </ul>
  </section>
</Container>
