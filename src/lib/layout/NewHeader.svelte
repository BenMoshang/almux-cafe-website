<script lang="ts">
  import { textAnimate } from '$lib/actions/textAnimate.svelte';
  import { wipeDown } from '$lib/actions/wipeDown.svelte';
  // Define interface for navigation links
  interface NavLink {
    link: string;
    fragment: string;
    iconSvg?: string;
    text: string;
    class?: string;
  }

  // Navigation link data
  const routes: NavLink[] = [
    { link: '/Home/', fragment: 'services', text: 'Services' },
    { link: '/Home/', fragment: 'projects', text: 'Projects' },
    { link: '/Home/', fragment: 'faqs', text: 'FAQs' },
    { link: '/Home/', fragment: 'cta', text: 'Contact', class: 'nav-link--cta' },
  ];

  // State
  let isMenuOpen = $state(false);
  let isHeaderHidden = $state(false);
  let animationClass = $state('');
  let isAnimating = $state(false);

  // Element refs
  let burgerButton: HTMLButtonElement;
  let mobileNavContainer: HTMLElement;

  // Toggle mobile menu
  function toggleMenu() {
    if (isAnimating) return;
    isAnimating = true;
    animationClass = isMenuOpen ? 'blur-fade-out' : 'blur-fade-in';
    if (!isMenuOpen) {
      isMenuOpen = true;
    }
  }

  // After animation ends
  function onAnimationEnd() {
    if (animationClass === 'blur-fade-out') {
      isMenuOpen = false;
    }
    isAnimating = false;
    if (!isMenuOpen) {
      burgerButton?.focus();
    } else {
      mobileNavContainer?.querySelector('a')?.focus();
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMenuOpen) {
      toggleMenu();
    }
  }

  // Lifecycle
  $effect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Logo path data
  const logoPathMain =
    'M284.521790,707.478821   C258.999023,682.141479 237.891769,653.958252 222.020111,622.052307   C206.577835,591.009705 196.077209,558.317383 190.681122,524.011658   C187.335220,502.739990 186.006226,481.346588 186.713257,459.851624   C188.597458,402.569336 203.144363,348.805725 232.192917,299.225830   C261.537506,249.140671 301.275177,209.374954 351.525665,180.239929   C387.359100,159.463821 425.984161,146.519455 466.764069,139.825607   C490.872406,135.868347 515.235718,135.754944 539.485168,136.908615   C588.207520,139.226562 634.183105,152.275772 677.442261,174.845032   C735.666443,205.221970 780.505310,249.306870 812.408142,306.632599   C817.681213,316.107605 821.981628,326.035034 826.090759,336.062897   C827.719055,340.036469 826.884583,342.798981 823.412659,345.002930   C808.181152,354.671753 791.899536,358.944427 773.917725,354.775269   C762.509155,352.130127 751.670959,347.966797 741.132996,342.920868   C732.080811,338.586334 724.708679,332.478699 718.847839,324.191956   C693.924377,288.952393 661.207764,262.970856 622.366943,244.647354   C598.719666,233.491592 573.711609,227.069992 547.681458,224.069656   C539.092285,223.079636 530.405945,222.809753 521.986572,222.806122   C485.766602,222.790527 450.695374,229.316223 417.574524,244.826447   C372.937897,265.729401 337.198303,296.741791 310.805542,338.344269   C294.661163,363.792358 284.279572,391.582001 278.662659,421.170746   C278.405396,422.525879 278.373047,423.502930 279.563080,424.699280   C281.571808,426.718597 280.765472,433.236511 278.533142,434.907471   C278.162415,435.184906 277.316254,434.827087 276.268433,434.719635   C270.469055,488.375641 278.280884,539.584778 304.018433,587.339661   C325.580231,627.346619 356.013367,659.247192 394.947784,682.876282   C424.281708,700.679077 456.142151,711.406921 490.097107,715.484619   C535.211182,720.902466 578.718506,714.665100 619.794983,694.778381   C640.802917,684.607666 659.815247,671.451477 674.519897,652.902954   C686.474487,637.823303 690.981567,620.475220 689.688110,601.457275   C689.558533,599.551697 689.504883,599.555359 685.930542,596.319885   C689.225708,594.681824 688.642761,592.139526 688.049622,589.141235   C680.532837,551.144348 658.847656,522.205383 629.946411,497.865295   C612.897095,483.506653 593.913513,472.180756 574.065308,462.153503   C569.060242,459.624908 564.763794,459.210297 559.721619,463.392578   C594.064575,491.088593 628.069641,519.129150 656.265686,553.490051   C656.099426,556.171570 657.510620,558.641052 659.230835,561.123779   C663.605591,567.437744 667.067749,574.266113 670.363159,581.196899   C672.149658,584.954163 671.189209,586.649109 667.138062,587.340454   C608.584595,597.332642 554.837097,585.486450 506.842987,550.536804   C465.979645,520.779846 437.080872,481.803833 421.422668,433.406525   C415.584930,415.362946 412.814880,396.834106 412.876251,377.919830   C412.895020,372.141388 414.080261,366.372345 414.609436,360.587860   C414.927704,357.108643 416.590240,356.599426 419.711090,357.459656   C433.503510,361.261200 447.428101,364.520447 461.690552,365.976654   C478.224884,367.664825 494.749512,369.331055 511.440033,368.144684   C526.605530,367.066742 541.694519,368.713745 556.698425,370.731323   C580.323303,373.908203 602.777222,381.027039 623.977234,391.929199   C668.729858,414.943390 698.286682,450.559448 712.195618,498.987091   C719.717957,525.178345 721.230225,552.023438 720.190979,579.070251   C719.854309,587.832947 718.796326,596.567810 718.066101,605.341064   C720.505920,605.804626 721.051270,604.243042 721.802979,603.060669   C738.832886,576.278625 749.543945,547.117676 754.661194,515.842346   C757.202332,500.311554 757.121521,484.638885 756.527222,469.027191   C756.085510,457.424347 759.916016,448.235870 768.458740,440.718811   C788.854248,422.772003 812.727112,412.651703 839.604309,409.807404   C847.505066,408.971252 849.524292,410.916443 850.463501,418.694946   C853.580933,444.513336 854.194580,470.394226 852.461060,496.376160   C850.134399,531.246887 842.077087,564.716370 828.544312,596.842651   C802.467957,658.747437 762.137329,709.263550 706.718933,747.419250   C666.042053,775.425293 621.304810,793.300598 572.331116,800.534546   C550.191650,803.804810 527.950745,805.352417 505.667419,804.149658   C441.616425,800.692627 382.525055,781.949280 329.568451,745.210022   C313.522400,734.077881 298.487335,721.677002 284.521790,707.478821';
  const logoPathSecondary =
    'M722.200195,590.021973   C726.609314,590.768494 723.032837,593.760986 723.808044,595.652283   C721.572632,594.393188 720.774902,592.668274 722.200195,590.021973   z';
</script>

<header
  class="header u_p-inline__sm u_p-block__xs u_container__sm "
  class:header--hidden={isHeaderHidden}
>
  <a class="header__logo" href="/" aria-label="Homepage">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      role="img"
      aria-label="1st Green Home Logo"
      class="header__logo-image"
    >
      <path fill="currentColor" d={logoPathMain} />
      <path fill="currentColor" d={logoPathSecondary} />
    </svg>
  </a>

  <!-- mobile navigation -->
  <nav
    bind:this={mobileNavContainer}
    id="navigation"
    class="header__nav header__nav--mobile {animationClass}"
    class:header__nav--open={isMenuOpen}
    on:animationend={onAnimationEnd}
    aria-label="Primary mobile navigation"
  >
    <ul class="header__nav-list header__nav-list--mobile">
      {#if isMenuOpen}
        {#each routes as link (link.fragment)}
          <li class="header__nav-item header__nav-item--mobile">
            <a
              use:textAnimate
              href={link.link + '#' + link.fragment}
              class={`header__nav-link ${link.class ?? ''}`}
            >
              {link.text}
            </a>
          </li>
        {/each}
      {/if}
    </ul>
    {#if isMenuOpen}
      <footer class="u_m-top__lg header__nav-footer header__nav-footer--mobile">
        <svg
            xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          role="img"
          aria-label="1st Green Home Logo"
          class="header__footer-logo-image"
        >
          <path fill="currentColor" d={logoPathMain} />
          <path fill="currentColor" d={logoPathSecondary} />
        </svg>
        <div
        
        use:wipeDown
        class="header__nav-footer-content-container">
          <a
            class="header__nav-footer-email"
            href="mailto:info@1stgreenhome.com"
          >
            info@1stgreenhome.com
          </a>
          <a
            class="header__nav-footer-phone"
            href="tel:+14432169169"
          >
            (443) 216-9169
          </a>
          <p class="header__nav-footer-address">
            10630 Riggs Hill Rd. Unit A
          </p>
          <span class="header__nav-footer-address">
            Jessup, MD 20794</span
          >
        </div>
      </footer>
    {/if}
  </nav>

  <!-- desktop navigation -->
  <nav
    class="header__nav header__nav--desktop"
    aria-label="Primary desktop navigation"
  >
    <ul class="header__nav-list header__nav-list--desktop">
      {#each routes as link}
        <li class="header__nav-item header__nav-item--desktop">
          <a
            href={link.link + '#' + link.fragment}
            class={`header__nav-link ${link.class ?? ''}`}
            tabindex="0"
          >
            <span class="header__nav-link-text">{@html link.text}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <!-- Burger menu button -->
  <button
    bind:this={burgerButton}
    on:click={toggleMenu}
    class="header__burger"
    class:header__burger--open={isMenuOpen}
    aria-expanded={isMenuOpen}
    aria-controls="navigation"
    aria-label="Toggle menu"
  >
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        class="line line-top-bottom"
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      ></path>
      <path class="line" d="M7 16 27 16"></path>
    </svg>
  </button>
</header>

<style lang="scss">
  $z-index--header: 1000;
  $z-index--burger:2000;
  $z-index--nav: 1000;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    inline-size: 100%;
    block-size: size('2xl');
    z-index:$z-index--header;
    overflow: visible;
    transition:
      transform var(--transition-standard, 0.3s) ease,
      background 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      inline-size: 200%;
      margin-left: -50%;
      block-size: size('2xl');
      pointer-events: none;
      backdrop-filter: blur(0.5rem);
      mask-image: linear-gradient(
        to bottom,
        oklch(0% 0 0) 0%,
        oklch(0% 0 0) 40%,
        oklch(0% 0 0 / 0%) 80%,
        oklch(0% 0 0 / 0%) 100%
      );
      -webkit-mask-image: linear-gradient(
        to bottom,
        oklch(0% 0 0) 0%,
        oklch(0% 0 0) 40%,
        oklch(0% 0 0 / 0%) 80%,
        oklch(0% 0 0 / 0%) 100%
      );
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      inline-size: 200%;
      block-size: size('2xl');
      margin-left: -50%;
      pointer-events: none;
      background: linear-gradient(
        to bottom,
        oklch(100% 0 0 / 0.2) 0%,
        oklch(100% 0 0 / 0.1) 25%,
        oklch(100% 0 0 / 0.05) 50%,
        oklch(100% 0 0 / 0.005) 75%,
        oklch(100% 0 0 / 0) 100%
      );
      z-index: 2;
    }
    > * {
      position: relative;
      z-index: 3;
    }
  }

  .header__logo {
    inline-size: size('2xl');
    block-size: size('2xl');
    align-self: flex-start;
    isolation: isolate;

    &-image {

      color: var(--brute-primary);
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
transition: scale filter 200ms ease;
      &:hover {
scale: 1.1;
        filter: saturate(1.5) brightness(1.1);
      }
    }
  }

  .header__nav--desktop {
    display: none;

    @include respond-to('tablet-end') {
      display: unset;
    }
  }

  .header__nav-list--desktop {
    list-style: none;
    display: flex;
    gap: size('xl');
    & span {
      text-decoration: none !important;
      @extend %u_callout;
      @extend %typography--primary;
      font-family: 'Manrope', system-ui;
      font-weight: 500;
    }
  }

  .header__nav-item--desktop:last-child span {
    color: var(--brute-primary);
    font-weight: 700 !important;

    &:hover {
      filter: brightness(1.2);
    }
  }

  .header__nav--mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100svh;
    margin-inline: auto;
    overflow-x: clip;
    z-index: $z-index--nav;
    opacity: 0;
    visibility: hidden;
    background-color: oklch(100% 0 0 / 0.75);
    backdrop-filter: blur(2rem);

    &--open {
      visibility: visible;
      opacity: 1;
    }
  }

  .header__nav-list--mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
    text-align: left;
    padding-top: size('2xl');

    padding-inline: size('sm');
    padding-bottom: size('sm');
    gap: size('xl');
    opacity: 1;
    transition: opacity 0.2s ease 0.1s;
    text-align: left;
    margin-bottom: size('lg');
  }

  .header__nav-item--mobile {
    @extend %u_display-2;
    font-weight: 500;
    @extend %typography--secondary;
    text-align: left !important;
    margin-inline: auto;
    padding: size('xs');
  }

  .header__nav-item--mobile:last-child a {
    color: var(--brute-primary);
    font-weight: 700;

    &:hover {
      filter: brightness(1.2);
    }
  }

  .header__nav-footer-content-container {
    inline-size: fit-content;
    text-align: left;
    @extend %flex-col-center;
    gap: size('sm');
  }

  .header__nav-footer--mobile {
    margin-inline: auto;
    margin-top: size('sm');
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xs);
    border-top: 1px solid var(--on-surface-container-high);

    & > * {
      flex: 1;
    }
  }

  :is(.header__nav-footer-email, .header__nav-footer-phone) {
    @extend %u_callout;
    @extend %a-link;

    align-self: flex-start;
  }

  .header__footer-logo-image {
    color: var(--brute-primary);
    inline-size: 100%;
    block-size: 100%;
    max-inline-size: size('3xl');
    max-block-size: size('3xl');
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  .header__nav-footer-address {
    align-self: flex-start;
    max-inline-size: 20ch;
    overflow-wrap: break-word;
    text-wrap: balance;
    @extend %u_callout;
    @extend %typography--tertiary;
    line-height: 1.5;
  }

  .header__burger {
    z-index: 2000;
    opacity: 0.83;
    inline-size: size('xl');
    block-size: size('xl');
    z-index: $z-index--burger;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;

    cursor: pointer;

    @include respond-to('tablet-end') {
      display: none;
    }

    svg {

      fill: none;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line {

      color: var(--brute-secondary);
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
      transition:
        stroke-dasharray 0.6s cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line-top-bottom {
      stroke-dasharray: 12 63;
    }

    &--open {
      svg {
        transform: rotate(-45deg);
      }
      .line-top-bottom {
        stroke-dasharray: 20 300;
        stroke-dashoffset: -32.42;
      }
    }
  }

  .blur-fade-in {
    --easing-smooth: cubic-bezier(0.32, 0.72, 0, 1);
    animation: blur-fade-in var(--transition-fade-in, 0.5s) var(--easing-smooth)
      forwards;
  }

  .blur-fade-out {
    --easing-smooth: cubic-bezier(0.32, 0.72, 0, 1);
    animation: blur-fade-out var(--transition-standard, 0.3s)
      var(--easing-smooth) forwards;
  }

  @keyframes blur-fade-in {
    0% {
      opacity: 0;
      filter: blur(8px);
      visibility: visible;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      visibility: visible;
      transform: translateY(0);
    }
  }

  @keyframes blur-fade-out {
    0% {
      opacity: 1;
      filter: blur(0);
      visibility: visible;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      filter: blur(8px);
      visibility: hidden;
      transform: translateY(-10px);
    }
  }
</style>
