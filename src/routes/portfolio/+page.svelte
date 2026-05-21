<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import {
    education,
    experience,
    skills,
    summary,
    yearsOfExperienceLabel,
  } from "$lib/data/resume";
</script>

<Seo
  title="Portfolio"
  description="Professional experience, education, and skills — Senior Frontend Developer with {yearsOfExperienceLabel()} years building scalable React and TypeScript products."
  canonical="/portfolio"
  noindex
/>

<Container tag="section">
  <header class="page-header">
    <p class="font-mono text-muted">Senior Frontend Developer</p>
    <h1 class="page-header__title">Experience</h1>
    <p class="page-header__description">{summary}</p>
  </header>

  <section class="section" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="section-label font-mono text-muted">
      Professional experience
    </h2>
    <ul class="experience-list" role="list">
      {#each experience as job (job.id)}
        <li class="experience-item">
          <article>
            <header class="experience-item__header">
              <div class="experience-item__heading">
                <h3 class="experience-item__role font-heading">{job.role}</h3>
                <p class="experience-item__company">{job.company}</p>
              </div>
              <div class="experience-item__meta font-mono text-muted">
                <span>{job.location}</span>
                <span aria-hidden="true">·</span>
                <time>{job.period}</time>
              </div>
            </header>
            <p class="experience-item__about">{job.companyDescription}</p>
            <ul class="experience-item__highlights">
              {#each job.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
            {#if job.tags.length > 0}
              <ul
                class="experience-item__tags"
                aria-label="Technologies and focus areas"
              >
                {#each job.tags as tag}
                  <li><span class="tag">{tag}</span></li>
                {/each}
              </ul>
            {/if}
          </article>
        </li>
      {/each}
    </ul>
  </section>

  <section class="section" aria-labelledby="education-heading">
    <h2 id="education-heading" class="section-label font-mono text-muted">
      Education
    </h2>
    <article class="education-block">
      <h3 class="education-block__school font-heading">{education.school}</h3>
      <p class="education-block__degree text-muted">{education.degree}</p>
    </article>
  </section>

  <section class="section" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="section-label font-mono text-muted">
      Skills
    </h2>
    <ul class="skills-list" aria-label="Technical skills">
      {#each skills as skill}
        <li><span class="tag">{skill}</span></li>
      {/each}
    </ul>
  </section>
</Container>

<style>
  .section-label {
    padding-bottom: var(--space-1);
    margin-bottom: var(--space-1);
    border-bottom: 1px solid var(--color-border);
  }

  .experience-list {
    display: flex;
    flex-direction: column;
  }

  .experience-item {
    padding-block: var(--space-3);
    border-top: 1px solid var(--color-border);
  }

  .experience-item:first-child {
    border-top: none;
    padding-top: var(--space-2);
  }

  .experience-item__header {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    margin-bottom: var(--space-2);
  }

  @media (min-width: 600px) {
    .experience-item__header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--space-3);
    }
  }

  .experience-item__role {
    font-size: var(--font-size-xl);
    font-weight: 500;
    line-height: var(--line-height-snug);
  }

  .experience-item__company {
    font-size: var(--font-size-md);
    color: var(--color-muted);
    margin-top: 0.2rem;
  }

  .experience-item__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    font-size: var(--font-size-xs);
    white-space: nowrap;
  }

  .experience-item__about {
    font-size: var(--font-size-sm);
    color: var(--color-muted);
    line-height: var(--line-height-relaxed);
    max-width: 65ch;
    margin-bottom: var(--space-2);
  }

  .experience-item__highlights {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding-left: 1.1rem;
    list-style: disc;
    max-width: 65ch;
  }

  .experience-item__highlights li {
    font-size: var(--font-size-sm);
    color: var(--color-muted);
    line-height: var(--line-height-relaxed);
  }

  .experience-item__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1);
    margin-top: var(--space-2);
  }

  .education-block {
    padding-top: var(--space-2);
  }

  .education-block__school {
    font-size: var(--font-size-lg);
    font-weight: 500;
    line-height: var(--line-height-snug);
  }

  .education-block__degree {
    margin-top: 0.35rem;
    font-size: var(--font-size-sm);
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1);
    padding-top: var(--space-2);
  }
</style>
