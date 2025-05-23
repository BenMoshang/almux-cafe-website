<script>
	// Simplified Typography Testing Component
	// Shows only the semantic typography names and examples
</script>

<div class="typography-testing">
	<header>
		<h1 class="display-a">Typography Testing</h1>
		<p class="body">Semantic typography styles from the design system.</p>
	</header>

	<!-- Display Styles -->
	<section>
		<h2 class="title-a">Display Styles</h2>
		<div class="example">
			<span class="label">Display A</span>
			<p class="display-a">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-display-a</code>
		</div>
		<div class="example">
			<span class="label">Display B</span>
			<p class="display-b">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-display-b</code>
		</div>
	</section>

	<!-- Title Styles -->
	<section>
		<h2 class="title-a">Title Styles</h2>
		<div class="example">
			<span class="label">Title A</span>
			<p class="title-a">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-title-a</code>
		</div>
		<div class="example">
			<span class="label">Title B</span>
			<p class="title-b">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-title-b</code>
		</div>
		<div class="example">
			<span class="label">Title C</span>
			<p class="title-c">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-title-c</code>
		</div>
	</section>

	<!-- Heading Styles -->
	<section>
		<h2 class="title-a">Heading Styles</h2>
		<div class="example">
			<span class="label">Heading</span>
			<p class="heading">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-heading</code>
		</div>
		<div class="example">
			<span class="label">Subheading</span>
			<p class="subheading">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-subheading</code>
		</div>
	</section>

	<!-- Body Text Styles -->
	<section>
		<h2 class="title-a">Body Text Styles</h2>
		<div class="example">
			<span class="label">Body</span>
			<p class="body">
				The quick brown fox jumps over the lazy dog. This is the standard body text used for
				paragraphs and general content.
			</p>
			<code>.u-text-body</code>
		</div>
		<div class="example">
			<span class="label">Callout</span>
			<p class="callout">
				The quick brown fox jumps over the lazy dog. This is emphasized body text for quotes or
				highlighted content.
			</p>
			<code>.u-text-callout</code>
		</div>
	</section>

	<!-- Small Text Styles -->
	<section>
		<h2 class="title-a">Small Text Styles</h2>
		<div class="example">
			<span class="label">Label</span>
			<p class="label">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-label</code>
		</div>
		<div class="example">
			<span class="label">Caption</span>
			<p class="caption">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-caption</code>
		</div>
		<div class="example">
			<span class="label">Overline</span>
			<p class="overline">The quick brown fox jumps over the lazy dog</p>
			<code>.u-text-overline</code>
		</div>
	</section>
</div>

<style lang="scss">
	.typography-testing {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.typography-testing header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.typography-testing section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	// Typography classes using @apply-text mixin
	.display-a {
		@include apply-text(display-a);
	}

	.display-b {
		@include apply-text(display-b);
	}

	.title-a {
		@include apply-text(title-a);
	}

	.title-b {
		@include apply-text(title-b);
	}

	.title-c {
		@include apply-text(title-c);
	}

	.heading {
		@include apply-text(heading);
	}

	.subheading {
		@include apply-text(subheading);
	}

	.body {
		@include apply-text(body);
	}

	.callout {
		@include apply-text(callout);
	}

	.label {
		@include apply-text(label);
	}

	.caption {
		@include apply-text(caption);
	}

	.overline {
		@include apply-text(overline);
	}
</style>
