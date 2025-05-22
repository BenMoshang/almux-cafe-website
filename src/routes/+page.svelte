<script>
	import TypographyTesting from '../lib/TypographyTesting.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<section class="typography-showcase u-mt-spacing-l u-p-inset-m">
	<h2 class="u-text-title-b">Typography Testing</h2>
	<p class="u-text-body">View all available typography styles from the design system:</p>
	<TypographyTesting />
</section>

<style>
	.typography-showcase {
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		background: #f9f9f9;
	}
</style>
