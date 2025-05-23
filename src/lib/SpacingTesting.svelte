<script>
	// Spacing Testing Component
	// This component showcases all available spacing utilities from the design system
	// Updated to reflect the latest design system architecture and responsive spacing
</script>

<div class="spacing-testing">
	<header class="section">
		<h1 class="u-text-display-a">Spacing System Testing</h1>
		<p class="u-text-body">
			This page demonstrates all available spacing utilities in the design system, featuring
			responsive scaling using CSS clamp() and semantic spacing tokens.
		</p>
	</header>

	<!-- Design System Overview -->
	<section class="section overview">
		<h2 class="u-text-title-a">Spacing System Features</h2>
		<div class="feature-grid">
			<div class="feature-card">
				<h3 class="u-text-title-c">Responsive Spacing</h3>
				<p class="u-text-body">
					All spacing values use CSS clamp() for fluid scaling between mobile and desktop sizes.
				</p>
			</div>
			<div class="feature-card">
				<h3 class="u-text-title-c">Semantic Tokens</h3>
				<p class="u-text-body">
					Meaningful spacing names that reflect content purpose and hierarchy.
				</p>
			</div>
			<div class="feature-card">
				<h3 class="u-text-title-c">Utility Classes</h3>
				<p class="u-text-body">
					Generated utility classes and SCSS mixins for flexible implementation.
				</p>
			</div>
			<div class="feature-card">
				<h3 class="u-text-title-c">Logical Properties</h3>
				<p class="u-text-body">
					Modern CSS logical properties for better internationalization support.
				</p>
			</div>
		</div>
	</section>

	<!-- Spacing Scale Demonstration -->
	<section class="section">
		<h2 class="u-text-title-a">Spacing Scale</h2>
		<p class="u-text-body u-mb-spacing-m">
			The spacing system uses a consistent scale that provides visual rhythm and hierarchy. Each
			spacing value is responsive and scales fluidly between mobile and desktop.
		</p>

		<div class="spacing-scale-demo">
			<h3 class="u-text-title-c u-mb-spacing-s">Visual Scale</h3>
			<div class="scale-examples">
				<div class="scale-item">
					<div class="scale-visual scale-gutter-xs"></div>
					<span class="scale-label">gutter-xs</span>
					<code class="scale-code">.u-p-gutter-xs</code>
				</div>
				<div class="scale-item">
					<div class="scale-visual scale-gutter-s"></div>
					<span class="scale-label">gutter-s</span>
					<code class="scale-code">.u-p-gutter-s</code>
				</div>
				<div class="scale-item">
					<div class="scale-visual scale-gutter-m"></div>
					<span class="scale-label">gutter-m</span>
					<code class="scale-code">.u-p-gutter-m</code>
				</div>
				<div class="scale-item">
					<div class="scale-visual scale-gutter-l"></div>
					<span class="scale-label">gutter-l</span>
					<code class="scale-code">.u-p-gutter-l</code>
				</div>
				<div class="scale-item">
					<div class="scale-visual scale-gutter-xl"></div>
					<span class="scale-label">gutter-xl</span>
					<code class="scale-code">.u-p-gutter-xl</code>
				</div>
			</div>
		</div>
	</section>

	<!-- Padding Utilities -->
	<section class="section">
		<h2 class="u-text-title-a">Padding Utilities</h2>
		<div class="utility-examples">
			<div class="utility-group">
				<h3 class="u-text-title-c">All Sides</h3>
				<div class="examples-grid">
					<div class="padding-example">
						<div class="demo-box u-p-spacing-xs">
							<span class="demo-content">padding: spacing-xs</span>
						</div>
						<div class="code-examples">
							<code>.u-p-spacing-xs</code>
							<code>@include apply-padding('spacing-xs')</code>
						</div>
					</div>
					<div class="padding-example">
						<div class="demo-box u-p-spacing-s">
							<span class="demo-content">padding: spacing-s</span>
						</div>
						<div class="code-examples">
							<code>.u-p-spacing-s</code>
							<code>@include apply-padding('spacing-s')</code>
						</div>
					</div>
					<div class="padding-example">
						<div class="demo-box u-p-spacing-m">
							<span class="demo-content">padding: spacing-m</span>
						</div>
						<div class="code-examples">
							<code>.u-p-spacing-m</code>
							<code>@include apply-padding('spacing-m')</code>
						</div>
					</div>
				</div>
			</div>

			<div class="utility-group">
				<h3 class="u-text-title-c">Directional Padding</h3>
				<div class="examples-grid">
					<div class="padding-example">
						<div class="demo-box u-pt-spacing-l">
							<span class="demo-content">padding-top: spacing-l</span>
						</div>
						<div class="code-examples">
							<code>.u-pt-spacing-l</code>
							<code>@include apply-padding('spacing-l', top)</code>
						</div>
					</div>
					<div class="padding-example">
						<div class="demo-box u-px-spacing-m">
							<span class="demo-content">padding-inline: spacing-m</span>
						</div>
						<div class="code-examples">
							<code>.u-px-spacing-m</code>
							<code>@include apply-padding('spacing-m', inline)</code>
						</div>
					</div>
					<div class="padding-example">
						<div class="demo-box u-py-spacing-s">
							<span class="demo-content">padding-block: spacing-s</span>
						</div>
						<div class="code-examples">
							<code>.u-py-spacing-s</code>
							<code>@include apply-padding('spacing-s', block)</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Margin Utilities -->
	<section class="section">
		<h2 class="u-text-title-a">Margin Utilities</h2>
		<div class="utility-examples">
			<div class="utility-group">
				<h3 class="u-text-title-c">All Sides</h3>
				<div class="examples-grid">
					<div class="margin-example">
						<div class="margin-container">
							<div class="demo-box u-m-spacing-xs">
								<span class="demo-content">margin: spacing-xs</span>
							</div>
						</div>
						<div class="code-examples">
							<code>.u-m-spacing-xs</code>
							<code>@include apply-margin('spacing-xs')</code>
						</div>
					</div>
					<div class="margin-example">
						<div class="margin-container">
							<div class="demo-box u-m-spacing-s">
								<span class="demo-content">margin: spacing-s</span>
							</div>
						</div>
						<div class="code-examples">
							<code>.u-m-spacing-s</code>
							<code>@include apply-margin('spacing-s')</code>
						</div>
					</div>
					<div class="margin-example">
						<div class="margin-container">
							<div class="demo-box u-m-spacing-m">
								<span class="demo-content">margin: spacing-m</span>
							</div>
						</div>
						<div class="code-examples">
							<code>.u-m-spacing-m</code>
							<code>@include apply-margin('spacing-m')</code>
						</div>
					</div>
				</div>
			</div>

			<div class="utility-group">
				<h3 class="u-text-title-c">Directional Margin</h3>
				<div class="examples-grid">
					<div class="margin-example">
						<div class="margin-container">
							<div class="demo-box u-mb-spacing-l">
								<span class="demo-content">margin-bottom: spacing-l</span>
							</div>
						</div>
						<div class="code-examples">
							<code>.u-mb-spacing-l</code>
							<code>@include apply-margin('spacing-l', bottom)</code>
						</div>
					</div>
					<div class="margin-example">
						<div class="margin-container">
							<div class="demo-box u-mx-spacing-m">
								<span class="demo-content">margin-inline: spacing-m</span>
							</div>
						</div>
						<div class="code-examples">
							<code>.u-mx-spacing-m</code>
							<code>@include apply-margin('spacing-m', inline)</code>
						</div>
					</div>
					<div class="margin-example">
						<div class="margin-container">
							<div class="demo-box u-my-spacing-s">
								<span class="demo-content">margin-block: spacing-s</span>
							</div>
						</div>
						<div class="code-examples">
							<code>.u-my-spacing-s</code>
							<code>@include apply-margin('spacing-s', block)</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Gap Utilities -->
	<section class="section">
		<h2 class="u-text-title-a">Gap Utilities (Flexbox & Grid)</h2>
		<div class="utility-examples">
			<div class="utility-group">
				<h3 class="u-text-title-c">Flexbox Gap</h3>
				<div class="examples-grid">
					<div class="gap-example">
						<div class="flex-container u-gap-spacing-xs">
							<div class="flex-item">Item 1</div>
							<div class="flex-item">Item 2</div>
							<div class="flex-item">Item 3</div>
						</div>
						<div class="code-examples">
							<code>.u-gap-spacing-xs</code>
							<code>@include apply-gap('spacing-xs')</code>
						</div>
					</div>
					<div class="gap-example">
						<div class="flex-container u-gap-spacing-s">
							<div class="flex-item">Item 1</div>
							<div class="flex-item">Item 2</div>
							<div class="flex-item">Item 3</div>
						</div>
						<div class="code-examples">
							<code>.u-gap-spacing-s</code>
							<code>@include apply-gap('spacing-s')</code>
						</div>
					</div>
					<div class="gap-example">
						<div class="flex-container u-gap-spacing-m">
							<div class="flex-item">Item 1</div>
							<div class="flex-item">Item 2</div>
							<div class="flex-item">Item 3</div>
						</div>
						<div class="code-examples">
							<code>.u-gap-spacing-m</code>
							<code>@include apply-gap('spacing-m')</code>
						</div>
					</div>
				</div>
			</div>

			<div class="utility-group">
				<h3 class="u-text-title-c">Grid Gap</h3>
				<div class="examples-grid">
					<div class="gap-example">
						<div class="grid-container u-gap-gutter-s">
							<div class="grid-item">1</div>
							<div class="grid-item">2</div>
							<div class="grid-item">3</div>
							<div class="grid-item">4</div>
						</div>
						<div class="code-examples">
							<code>.u-gap-gutter-s</code>
							<code>@include apply-gap('gutter-s')</code>
						</div>
					</div>
					<div class="gap-example">
						<div class="grid-container u-row-gap-spacing-m u-col-gap-gutter-m">
							<div class="grid-item">1</div>
							<div class="grid-item">2</div>
							<div class="grid-item">3</div>
							<div class="grid-item">4</div>
						</div>
						<div class="code-examples">
							<code>.u-row-gap-spacing-m</code>
							<code>.u-col-gap-gutter-m</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Responsive Behavior -->
	<section class="section">
		<h2 class="u-text-title-a">Responsive Spacing Demonstration</h2>
		<div class="responsive-demo">
			<div class="viewport-simulator">
				<h3 class="u-text-title-c">Resize Demo</h3>
				<p class="u-text-body">
					Resize your browser window to see how spacing scales fluidly. All spacing uses CSS clamp()
					to interpolate between mobile and desktop sizes based on viewport width.
				</p>
				<div class="responsive-example u-p-gutter-l u-mb-spacing-xl">
					<h4 class="u-text-title-b u-mb-spacing-s">This content has responsive spacing</h4>
					<p class="u-text-body u-mb-spacing-m">
						The padding around this container and margins between elements scale responsively. The
						design system uses clamp() functions that create fluid spacing that adapts to any screen
						size.
					</p>
					<div class="button-group u-gap-spacing-s">
						<button class="demo-button u-p-spacing-s">Button 1</button>
						<button class="demo-button u-p-spacing-s">Button 2</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Real-World Usage Examples -->
	<section class="section">
		<h2 class="u-text-title-a">Real-World Usage Examples</h2>
		<div class="usage-examples">
			<div class="example-card u-p-gutter-m u-mb-spacing-l">
				<h3 class="u-text-title-b u-mb-spacing-s">Card Layout</h3>
				<span class="u-text-overline u-mb-spacing-xs">Featured Content</span>
				<p class="u-text-body u-mb-spacing-m">
					This card demonstrates real-world spacing usage. The padding uses gutter-m for comfortable
					content spacing, while margins between elements create visual hierarchy.
				</p>
				<div class="card-actions u-gap-spacing-s">
					<button class="action-button u-px-spacing-m u-py-spacing-xs">Read More</button>
					<button class="action-button secondary u-px-spacing-m u-py-spacing-xs">Share</button>
				</div>
			</div>

			<div class="example-card u-p-gutter-m u-mb-spacing-l">
				<h3 class="u-text-title-b u-mb-spacing-s">Menu Item</h3>
				<div class="menu-content u-gap-spacing-m">
					<div class="menu-info">
						<h4 class="u-text-title-c u-mb-spacing-xs">Artisan Coffee Blend</h4>
						<p class="u-text-body u-mb-spacing-xs">
							Rich, full-bodied coffee with notes of chocolate and caramel.
						</p>
						<span class="u-text-caption">Available hot or iced</span>
					</div>
					<div class="menu-price">
						<span class="u-text-label">$4.50</span>
					</div>
				</div>
			</div>

			<div class="example-card u-p-gutter-l">
				<h3 class="u-text-title-b u-mb-spacing-m">Form Layout</h3>
				<form class="demo-form u-gap-spacing-m">
					<div class="form-group">
						<label class="u-text-label u-mb-spacing-xs">Name</label>
						<input type="text" class="form-input u-p-spacing-s" placeholder="Your name" />
					</div>
					<div class="form-group">
						<label class="u-text-label u-mb-spacing-xs">Email</label>
						<input type="email" class="form-input u-p-spacing-s" placeholder="your@email.com" />
					</div>
					<div class="form-group">
						<label class="u-text-label u-mb-spacing-xs">Message</label>
						<textarea class="form-input u-p-spacing-s" rows="4" placeholder="Your message"
						></textarea>
					</div>
					<button type="submit" class="form-submit u-px-spacing-l u-py-spacing-m"
						>Send Message</button
					>
				</form>
			</div>
		</div>
	</section>

	<!-- Integration Guide -->
	<section class="section">
		<h2 class="u-text-title-a">Design System Integration</h2>
		<div class="integration-info">
			<div class="info-card">
				<h3 class="u-text-title-c">SCSS Mixins</h3>
				<p class="u-text-body">Use semantic spacing mixins in your components:</p>
				<pre class="code-block"><code
						>.my-component include apply-padding('gutter-m');
  @include apply-margin('spacing-l', bottom);
  @include apply-gap('spacing-s');
}</code
					></pre>
			</div>

			<div class="info-card">
				<h3 class="u-text-title-c">Utility Classes</h3>
				<p class="u-text-body">Apply spacing directly in templates:</p>
				<pre class="code-block"><code
						>&lt;div class="u-p-gutter-m u-mb-spacing-l"&gt;
  &lt;h2 class="u-mb-spacing-s"&gt;Title&lt;/h2&gt;
  &lt;div class="u-gap-spacing-m"&gt;Content&lt;/div&gt;
&lt;/div&gt;</code
					></pre>
			</div>

			<div class="info-card">
				<h3 class="u-text-title-c">Responsive Values</h3>
				<p class="u-text-body">All spacing uses CSS clamp() for fluid scaling:</p>
				<pre class="code-block"><code
						>padding: clamp(
  1rem,        /* min */
  0.5rem + 2vw, /* preferred */
  2rem         /* max */
);</code
					></pre>
			</div>

			<div class="info-card">
				<h3 class="u-text-title-c">Spacing Tokens</h3>
				<p class="u-text-body">Available spacing tokens in the system:</p>
				<pre class="code-block"><code
						>// Gutters (layout spacing)
gutter-xs, gutter-s, gutter-m,
gutter-l, gutter-xl

// Content spacing
spacing-xs, spacing-s, spacing-m,
spacing-l, spacing-xl</code
					></pre>
			</div>
		</div>
	</section>
</div>

<style>
	.spacing-testing {
		max-width: 80rem;
		margin: 0 auto;
		padding: 2rem;
		font-family: 'Nunito Sans', Arial, sans-serif;
	}

	.section {
		margin-bottom: 4rem;
	}

	/* Overview section */
	.overview {
		background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
		color: white;
		border-radius: 16px;
		padding: 3rem;
		margin-bottom: 4rem;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		padding: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.feature-card h3 {
		margin-top: 0;
		margin-bottom: 1rem;
		color: white;
	}

	.feature-card p {
		margin: 0;
		color: rgba(255, 255, 255, 0.9);
	}

	/* Spacing Scale Demo */
	.spacing-scale-demo {
		background: #f8f9fa;
		border: 2px solid #dee2e6;
		border-radius: 12px;
		padding: 2rem;
	}

	.scale-examples {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}

	.scale-item {
		text-align: center;
	}

	.scale-visual {
		background: #3b82f6;
		margin: 0 auto 1rem auto;
		border-radius: 4px;
	}

	.scale-gutter-xs {
		width: 0.5rem;
		height: 0.5rem;
	}
	.scale-gutter-s {
		width: 1rem;
		height: 1rem;
	}
	.scale-gutter-m {
		width: 1.5rem;
		height: 1.5rem;
	}
	.scale-gutter-l {
		width: 2rem;
		height: 2rem;
	}
	.scale-gutter-xl {
		width: 3rem;
		height: 3rem;
	}

	.scale-label {
		display: block;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.scale-code {
		display: block;
		background: #e2e8f0;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
		font-size: 0.875rem;
	}

	/* Utility Examples */
	.utility-examples {
		display: grid;
		gap: 3rem;
	}

	.utility-group h3 {
		margin-bottom: 1.5rem;
	}

	.examples-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.demo-box {
		background: #e0f2fe;
		border: 2px solid #0891b2;
		border-radius: 8px;
		min-height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.demo-content {
		font-weight: 600;
		text-align: center;
		color: #0c4a6e;
	}

	.margin-container {
		background: #fef3c7;
		border: 2px dashed #d97706;
		border-radius: 8px;
		padding: 1rem;
	}

	.margin-example .demo-box {
		background: #ddd6fe;
		border-color: #7c3aed;
	}

	.margin-example .demo-content {
		color: #581c87;
	}

	/* Flexbox examples */
	.flex-container {
		display: flex;
		flex-wrap: wrap;
		background: #f1f5f9;
		border: 2px solid #64748b;
		border-radius: 8px;
		padding: 1rem;
	}

	.flex-item {
		background: #3b82f6;
		color: white;
		padding: 1rem;
		border-radius: 4px;
		font-weight: 600;
	}

	/* Grid examples */
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		background: #f1f5f9;
		border: 2px solid #64748b;
		border-radius: 8px;
		padding: 1rem;
	}

	.grid-item {
		background: #10b981;
		color: white;
		padding: 1rem;
		border-radius: 4px;
		font-weight: 600;
		text-align: center;
	}

	/* Code examples */
	.code-examples {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.code-examples code {
		display: block;
		background: #e2e8f0;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		font-family: 'Courier New', monospace;
		font-size: 0.875rem;
		border: 1px solid #cbd5e1;
	}

	.code-block {
		background: #2d3748;
		color: #e2e8f0;
		padding: 1rem;
		border-radius: 8px;
		font-family: 'Courier New', monospace;
		font-size: 0.875rem;
		line-height: 1.5;
		overflow-x: auto;
		margin: 1rem 0 0 0;
	}

	/* Responsive demo */
	.responsive-demo {
		background: #f0fdf4;
		border: 2px dashed #22c55e;
		border-radius: 12px;
		padding: 2rem;
	}

	.viewport-simulator {
		text-align: center;
	}

	.responsive-example {
		background: white;
		border: 1px solid #d1d5db;
		border-radius: 8px;
		text-align: left;
		margin-top: 2rem;
	}

	.button-group {
		display: flex;
		flex-wrap: wrap;
	}

	.demo-button {
		background: #3b82f6;
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.demo-button:hover {
		background: #2563eb;
	}

	/* Usage examples */
	.usage-examples {
		display: grid;
		gap: 2rem;
	}

	.example-card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	}

	.example-card h3 {
		margin-top: 0;
	}

	.menu-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.menu-info {
		flex: 1;
	}

	.menu-price {
		font-size: 1.25rem;
		font-weight: 700;
		color: #059669;
	}

	.action-button {
		background: #3b82f6;
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.action-button:hover {
		background: #2563eb;
	}

	.action-button.secondary {
		background: #6b7280;
	}

	.action-button.secondary:hover {
		background: #4b5563;
	}

	/* Form examples */
	.demo-form {
		display: flex;
		flex-direction: column;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-input {
		border: 1px solid #d1d5db;
		border-radius: 6px;
		font-family: inherit;
		font-size: 1rem;
	}

	.form-input:focus {
		outline: none;
		border-color: #3b82f6;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}

	.form-submit {
		background: #059669;
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
		align-self: flex-start;
	}

	.form-submit:hover {
		background: #047857;
	}

	/* Integration info */
	.integration-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.info-card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.info-card h3 {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.info-card p {
		margin-bottom: 1rem;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.spacing-testing {
			padding: 1rem;
		}

		.section {
			margin-bottom: 3rem;
		}

		.feature-grid {
			grid-template-columns: 1fr;
		}

		.examples-grid {
			grid-template-columns: 1fr;
		}

		.integration-info {
			grid-template-columns: 1fr;
		}

		.menu-content {
			flex-direction: column;
			gap: 1rem;
		}

		.button-group {
			flex-direction: column;
		}
	}
</style>
