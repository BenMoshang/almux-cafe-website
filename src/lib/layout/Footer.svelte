<script lang="ts">
	// Data for navigation links
	const homeResources = [
		{
			href: 'https://homeenergysavings.pepco.com/home-performance-with-energy-star-program',
			text: 'Pepco Home Performance'
		},
		{
			href: 'https://bgesmartenergy.com/business/business-programs/',
			text: 'BGE Smart Business Programs'
		}
	];

	const businessSolutions = [
		{
			href: 'https://homeenergysavings.pepco.com/md/business/overview',
			text: 'Pepco Energy Savings for Business'
		},
		{
			href: 'https://www.smeco.coop/save-energy-and-money/business-solutions',
			text: 'SMECO Business Solutions'
		},
		{
			href: 'https://homeenergysavings.delmarva.com/md/business/overview',
			text: 'Delmarva Energy Savings for Business'
		}
	];

	// SVG logo path data
	const logoPathMain = 'M284.521790,707.478821 ...'; // truncated for brevity
	const logoPathSecondary = 'M722.200195,590.021973 ...'; // truncated
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer u_p-inline__md u_p-block__xl">
	<div class="footer__container u_container__sm">
		<!-- Logo & Company Name -->
		<div class="footer__name-container">
			<div class="footer__logo--background">
				<img
					src="/assets/footer/old-logo.webp"
					alt="1stgreenhome logo"
					class="footer__logo-svg"
					width="150"
					height="150"
				/>
			</div>
			<p class="footer__company-name">1stGreenHome<br /></p>
			<span id="footer-address-line" class="footer__address-line"
				>10630 Riggs Hill Rd. Unit A, <br /> Jessup, MD 20794</span
			>
		</div>

		<address class="footer__address">
			<h3 class="footer__nav-title" id="footer-nav-home-title">Contact</h3>

			<a class="footer__contact-link footer__address-email" href="mailto:info@1stgreenhome.com"
				>info@1stgreenhome.com</a
			>
			<a class="footer__contact-link footer__address-phone" href="tel:+14432169169"
				>(443) 216-9169</a
			>
		</address>

		<!-- Home Resources Nav -->
		<nav class="footer__nav footer__nav--home" aria-labelledby="footer-nav-home-title">
			<h3 class="footer__nav-title" id="footer-nav-home-title">Home Resources</h3>
			<ul class="footer__nav-list">
				{#each homeResources as link}
					<li class="footer__nav-item">
						<a class="footer__nav-link" href={link.href} target="_blank" rel="noopener noreferrer">
							{link.text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Business Solutions Nav -->
		<nav class="footer__nav footer__nav--business" aria-labelledby="footer-nav-business-title">
			<h3 class="footer__nav-title" id="footer-nav-business-title">Business Solutions</h3>
			<ul class="footer__nav-list">
				{#each businessSolutions as link}
					<li class="footer__nav-item">
						<a class="footer__nav-link" href={link.href} target="_blank" rel="noopener noreferrer">
							{link.text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Copyright -->
		<small class="footer__copyright">
			&copy; {currentYear} 1st Green Home, All Rights Reserved.
		</small>
	</div>
	<small class="invisible">
		Created by <a href="https://www.mymodernsite.com" target="_blank">mymodernsite</a> • Developed
		by <a href="https://www.benmoshang.com" target="_blank">Ben Moshang</a>
	</small>
</footer>

<style lang="scss">
	%link {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.25rem;
		color: oklch(85% 0.02 0);
		cursor: pointer;
	}

	.invisible {
		display: flex;
		text-transform: uppercase;
		@extend %u_callout;
		color: $text-tertiary-rev;
		text-align: center;
		margin-top: size('xl');
		opacity: 0.2;
		text-align: center;
		font-size: 0.75rem;
		& a {
			@extend %link;
			color: inherit;
		}
	}
	/* ---------------------------------------------
   * Base Footer Styles
   * --------------------------------------------- */

	.footer {
		isolation: isolate;
		will-change: transform, opacity;
		transform: translateZ(0);
		overflow: hidden;
		backface-visibility: hidden;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: calc(100% + 2rem);
		z-index: -10;
		// background-color: oklch(35% 0.08 152.535);
		box-shadow: inset 0 0 100px 40px oklch(15% 0.05 152.535);

		// box-shadow: inset 0 0 150px 60px rgba(0, 0, 0, 0.4);

		background:
			radial-gradient(
					oklch(39.3% 0.095 152.535 / 1) 4%,
					oklch(39.3% 0.095 152.535 / 0.9) 9%,
					oklch(39.3% 0.095 152.535 / 0) 9%
				)
				0 0,
			radial-gradient(
					oklch(39.3% 0.095 152.535 / 1) 4%,
					oklch(39.3% 0.095 152.535 / 0.9) 8%,
					oklch(39.3% 0.095 152.535 / 0) 10%
				)
				50px 50px,
			radial-gradient(oklch(39.3% 0.095 152.535 / 0.8) 20%, oklch(39.3% 0.095 152.535 / 0)) 50px 0,
			radial-gradient(oklch(39.3% 0.095 152.535 / 0.8) 20%, oklch(39.3% 0.095 152.535 / 0)) 0 50px,
			radial-gradient(oklch(39.3% 0.095 152.535 / 1) 35%, oklch(39.3% 0.095 152.535 / 0) 60%) 50px 0,
			radial-gradient(oklch(39.3% 0.095 152.535 / 1) 35%, oklch(39.3% 0.095 152.535 / 0) 60%) 100px
				50px,
			radial-gradient(oklch(39.3% 0.095 152.535 / 0.7), oklch(39.3% 0.095 152.535 / 0)) 0 0,
			radial-gradient(oklch(39.3% 0.095 152.535 / 0.7), oklch(39.3% 0.095 152.535 / 0)) 50px 50px,
			linear-gradient(
					45deg,
					oklch(39.3% 0.095 152.535 / 0) 49%,
					oklch(0% 0 0 / 1) 50%,
					oklch(39.3% 0.095 152.535 / 0) 70%
				)
				0 0,
			linear-gradient(
					-45deg,
					oklch(39.3% 0.095 152.535 / 0) 49%,
					oklch(0% 0 0 / 1) 50%,
					oklch(39.3% 0.095 152.535 / 0) 70%
				)
				0 0;
		margin-bottom: size('3xl') * -1;
		background-color: oklch(39.3% 0.095 152.535);
		background-size: 6.25rem 6.25rem;
		@include respond-to('tablet-end') {
			margin-bottom: unset;
			max-height: unset;
			height: $footer-height;
		}

		/* ---------------------------------------------
     * Layout Structure
     * --------------------------------------------- */

		&__container {
			display: grid;
			gap: size('xl');
			grid-template-columns: 1fr;
			grid-template-areas:
				'logo'
				'contact'
				'home'
				'business'
				'copyright';
			@include respond-to('tablet-end') {
				grid-template-columns: 1fr 1fr 1fr;
				grid-template-areas:
					'logo logo  logo'
					'contact home business'
					'copyright copyright copyright';
				grid-template-rows: auto-fit auto-fit auto-fit;
			}
		}

		/* assign areas */
		.footer__name-container {
			grid-area: logo;
		}
		.footer__address {
			grid-area: contact;
		}
		.footer__nav--home {
			grid-area: home;
		}
		.footer__nav--business {
			grid-area: business;
		}
		.footer__copyright {
			grid-area: copyright;
		}

		/* ---------------------------------------------
     * Logo & Branding Elements
     * --------------------------------------------- */
		&__name-container {
			display: grid;
			grid-template-columns: auto 1fr;
			grid-template-areas:
				'logo name'
				'logo address';

			grid-column-gap: var(--margin-sm);
			grid-row-gap: var(--margin-xs);

			#footer-address-line {
				grid-area: address;
				@extend %u_callout;
				@extend %typography--secondary-rev;
			}
		}
		&__logo--background {
			align-self: center;
			grid-area: logo;
			$size: size('2xl');
			inline-size: $size;
			block-size: $size;
			padding: size('xs');
			display: grid;
			place-content: center;
			background: light-dark(
				linear-gradient(145deg, oklch(99.63% 0 0), oklch(87.59% 0 0)),
				linear-gradient(145deg, oklch(30% 0 0), oklch(15% 0 0))
			);
			aspect-ratio: 1/1;
			border-radius: 9999px;
			box-shadow: var(--shadow-elevation-medium);

			& img {
				inline-size: 100%;
				block-size: 100%;
				aspect-ratio: inherit;
				object-fit: cover;
				display: block;
				mix-blend-mode: multiply;
			}
		}
		&__company-name {
			grid-area: name;
			@extend %u_title-a--bold;
			@extend %typography--primary-rev;
		}

		/* ---------------------------------------------
     * Contact Information
     * --------------------------------------------- */

		&__address {
			display: flex;
			flex-direction: column;
			font-style: normal;
			gap: size('sm');

			&-email,
			&-phone {
				@extend %link;
				@extend %u_callout;
				@extend %typography--secondary-rev;
			}
		}

		/* ---------------------------------------------
     * Navigation Elements
     * --------------------------------------------- */
		&__nav {
			&-title {
				@extend %u_title-a--bold;
				@extend %typography--primary-rev;
				margin-bottom: var(--margin-xs);
			}
			&-list {
				list-style: none;
				padding: 0;
				margin: 0;
				display: flex;
				flex-direction: column;
				gap: size('sm');
			}
			&-link {
				@extend %link;
				@extend %u_callout;
				display: inline-block;
			}
		}

		/* ---------------------------------------------
     * Copyright
     * --------------------------------------------- */
		&__copyright {
			margin-top: var(--margin-lg);
			position: relative;

			margin-inline: auto;
			place-self: center;
			@extend %typography--tertiary-rev;
			@extend %u_caption;

			&:before {
				content: '';
				background: linear-gradient(to right, transparent, var(--brute-secondary), transparent);
				position: absolute;
				left: -100%;
				top: 0;
				margin-top: calc(-1 * var(--margin-lg));
				width: 300%;
				height: 1px;
			}
		}
	}
</style>
