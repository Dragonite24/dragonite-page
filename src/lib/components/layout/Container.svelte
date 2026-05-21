<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    tag?: "div" | "section" | "article" | "main";
    class?: string;
  }

  let { children, tag = "div", class: className = "" }: Props = $props();
</script>

<svelte:element this={tag} class="container content-panel {className}">
  {@render children()}
</svelte:element>
