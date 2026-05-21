<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { site } from "$lib/config/site";
  import { resolvePath } from "$lib/utils/paths";

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
  ] as const;

  function isActive(path: string, pathname: string): boolean {
    const current = pathname.startsWith(base)
      ? pathname.slice(base.length) || "/"
      : pathname;
    if (path === "/") return current === "/";
    return current === path || current.startsWith(`${path}/`);
  }
</script>

<header class="header">
  <div class="header__inner container">
    <a
      href={resolvePath("/")}
      class="header__logo font-heading"
      aria-label="{site.name} — home"
    >
      {site.name}
    </a>

    <nav class="header__nav" aria-label="Primary">
      <ul class="header__list">
        {#each navItems as item}
          <li>
            <a
              href={resolvePath(item.path)}
              class="link-underline font-mono"
              aria-current={isActive(item.path, $page.url.pathname)
                ? "page"
                : undefined}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    height: var(--header-height);
    display: flex;
    align-items: center;
    background: color-mix(in srgb, var(--color-bg) 78%, transparent);
    backdrop-filter: blur(14px) saturate(1.2);
    border-bottom: 1px solid var(--color-border);
  }

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .header__logo {
    font-size: var(--font-size-md);
    font-weight: 500;
    letter-spacing: var(--letter-spacing-tight);
  }

  .header__list {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  @media (max-width: 480px) {
    .header__list {
      gap: var(--space-2);
    }
  }
</style>
