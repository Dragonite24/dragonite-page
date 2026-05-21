<script lang="ts">
  import { page } from "$app/state";
  import Seo from "$lib/components/Seo.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import { resolvePath } from "$lib/utils/paths";

  const is404 = $derived(page.status === 404);

  const message = $derived(
    is404 ? "Page not found" : (page.error?.message ?? "Something went wrong"),
  );
</script>

<Seo title="Page not found" noindex />

<Container tag="section">
  <header class="page-header">
    <p class="font-mono text-muted">{page.status}</p>
    <h1 class="page-header__title">{message}</h1>
    {#if is404}
      <p class="page-header__description">
        The page you’re looking for doesn’t exist or was moved.
      </p>
    {/if}
  </header>
  <p>
    <a href={resolvePath("/")} class="link-underline">Back to home</a>
  </p>
</Container>
