<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import "$styles/reset.css";
  import "$styles/global.css";

  let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#fafafa" />
	<meta name="color-scheme" content="light" />
	<link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&family=Space+Grotesk:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<a href="#main-content" class="sr-only skip-link">Skip to main content</a>

<div class="app">
  <Header />
  <main id="main-content" class="app__main">
    {@render children()}
  </main>
  <Footer />
</div>
