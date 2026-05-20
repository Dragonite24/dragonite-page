<script lang="ts">
	import { site } from '$lib/config/site';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer__inner container">
		<p class="footer__copy font-mono text-muted">
			<span aria-hidden="true">©</span> {year} {site.name}
		</p>
		<nav class="footer__nav" aria-label="Footer">
			<ul class="footer__list">
				<li>
					<a href={site.github} class="link-underline font-mono" rel="noopener noreferrer" target="_blank">
						GitHub
					</a>
				</li>
				<li>
					<a href="mailto:{site.email}" class="link-underline font-mono">
						Email
					</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>

<style>
	.footer {
		margin-top: auto;
		padding-block: var(--space-4);
		border-top: 1px solid var(--color-border);
	}

	.footer__inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	@media (min-width: 480px) {
		.footer__inner {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}

	.footer__list {
		display: flex;
		gap: var(--space-3);
	}
</style>
