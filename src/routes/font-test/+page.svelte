<script lang="ts">
	import { onMount } from 'svelte';

	let bowlbyStatus = 'Checking Bowlby One...';
	let nunitoStatus = 'Checking Nunito Sans...';
	let fontResults = 'JavaScript font detection results will appear here...';
	let bowlbyClass = 'font-status loading';
	let nunitoClass = 'font-status loading';

	// Check if fonts are loaded
	function checkFontLoaded(fontFamily: string) {
		return new Promise((resolve) => {
			if (typeof document !== 'undefined' && 'fonts' in document) {
				document.fonts.ready.then(() => {
					const fontAvailable = document.fonts.check(`16px "${fontFamily}"`);
					resolve(fontAvailable);
				});
			} else {
				// Fallback for browsers without Font Loading API
				setTimeout(() => {
					if (typeof document !== 'undefined') {
						const testElement = document.createElement('div');
						testElement.style.fontFamily = fontFamily;
						testElement.style.fontSize = '16px';
						testElement.textContent = 'Test';
						testElement.style.position = 'absolute';
						testElement.style.visibility = 'hidden';
						document.body.appendChild(testElement);

						const computedStyle = window.getComputedStyle(testElement);
						const actualFont = computedStyle.fontFamily;
						document.body.removeChild(testElement);

						resolve(actualFont.includes(fontFamily));
					} else {
						resolve(false);
					}
				}, 1000);
			}
		});
	}

	onMount(async () => {
		// Test Bowlby One
		try {
			const bowlbyLoaded = await checkFontLoaded('Bowlby One');
			if (bowlbyLoaded) {
				bowlbyStatus = '✅ Bowlby One loaded successfully!';
				bowlbyClass = 'font-status loaded';
			} else {
				bowlbyStatus = '❌ Bowlby One failed to load (using fallback)';
				bowlbyClass = 'font-status failed';
			}
		} catch (error) {
			bowlbyStatus = '⚠️ Error checking Bowlby One';
			bowlbyClass = 'font-status failed';
		}

		// Test Nunito Sans
		try {
			const nunitoLoaded = await checkFontLoaded('Nunito Sans');
			if (nunitoLoaded) {
				nunitoStatus = '✅ Nunito Sans loaded successfully!';
				nunitoClass = 'font-status loaded';
			} else {
				nunitoStatus = '❌ Nunito Sans failed to load (using fallback)';
				nunitoClass = 'font-status failed';
			}
		} catch (error) {
			nunitoStatus = '⚠️ Error checking Nunito Sans';
			nunitoClass = 'font-status failed';
		}

		// Display loaded fonts
		if (typeof document !== 'undefined' && 'fonts' in document) {
			fontResults = `
				<h4>Browser Font Loading API Results:</h4>
				<ul>
					<li>Total fonts loaded: ${document.fonts.size}</li>
					<li>Fonts ready: ${document.fonts.status === 'loaded' ? 'Yes' : 'No'}</li>
				</ul>
			`;
		} else {
			fontResults = '<p>Font Loading API not supported in this browser.</p>';
		}
	});
</script>

<svelte:head>
	<title>Font Loading Test - Almux Cafe</title>
</svelte:head>

<div class="font-test-container">
	<h1>Font Loading Test</h1>

	<section class="test-section">
		<h2>Bowlby One Test</h2>
		<div class="font-test bowlby-test">
			<h1 class="test-heading">Almux Cafe & Bakery</h1>
			<h2 class="test-subheading">Fresh Coffee Daily</h2>
			<p class="test-text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
			<p class="test-text">abcdefghijklmnopqrstuvwxyz</p>
			<p class="test-text">0123456789</p>
		</div>
		<p class={bowlbyClass}>{bowlbyStatus}</p>
	</section>

	<section class="test-section">
		<h2>Nunito Sans Test</h2>
		<div class="font-test nunito-test">
			<h3 class="test-heading">Variable Font Weights</h3>
			<p class="test-light">Light (300): The quick brown fox jumps over the lazy dog</p>
			<p class="test-regular">Regular (400): The quick brown fox jumps over the lazy dog</p>
			<p class="test-medium">Medium (500): The quick brown fox jumps over the lazy dog</p>
			<p class="test-semibold">Semi-Bold (600): The quick brown fox jumps over the lazy dog</p>
			<p class="test-bold">Bold (700): The quick brown fox jumps over the lazy dog</p>
			<p class="test-italic">Italic: The quick brown fox jumps over the lazy dog</p>
		</div>
		<p class={nunitoClass}>{nunitoStatus}</p>
	</section>

	<section class="test-section">
		<h2>Font Loading Status</h2>
		<div>{@html fontResults}</div>
	</section>
</div>

<style>
	.font-test-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		font-family: Arial, sans-serif;
	}

	.test-section {
		margin-bottom: 3rem;
		padding: 2rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		background: #f9f9f9;
	}

	.font-test {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		margin: 1rem 0;
	}

	/* Bowlby One Tests */
	.bowlby-test * {
		font-family: 'Bowlby One', 'Helvetica Neue', Arial, sans-serif;
	}

	.bowlby-test .test-heading {
		font-size: 3rem;
		margin: 0 0 1rem 0;
		color: #e74c3c;
	}

	.bowlby-test .test-subheading {
		font-size: 2rem;
		margin: 0 0 1rem 0;
		color: #f39c12;
	}

	.bowlby-test .test-text {
		font-size: 1.2rem;
		margin: 0.5rem 0;
		color: #333;
	}

	/* Nunito Sans Tests */
	.nunito-test * {
		font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
	}

	.nunito-test .test-heading {
		font-size: 1.8rem;
		margin: 0 0 1rem 0;
		font-weight: 600;
	}

	.test-light {
		font-weight: 300;
	}

	.test-regular {
		font-weight: 400;
	}

	.test-medium {
		font-weight: 500;
	}

	.test-semibold {
		font-weight: 600;
	}

	.test-bold {
		font-weight: 700;
	}

	.test-italic {
		font-weight: 400;
		font-style: italic;
	}

	.font-status {
		padding: 1rem;
		border-radius: 4px;
		font-weight: bold;
	}

	.font-status.loaded {
		background: #d4edda;
		color: #155724;
		border: 1px solid #c3e6cb;
	}

	.font-status.failed {
		background: #f8d7da;
		color: #721c24;
		border: 1px solid #f5c6cb;
	}

	.font-status.loading {
		background: #fff3cd;
		color: #856404;
		border: 1px solid #ffeaa7;
	}
</style>
