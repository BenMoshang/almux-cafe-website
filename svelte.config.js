import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessing configuration
	preprocess: [
		vitePreprocess({
			// Enhanced preprocessing options
			script: true,
			style: true,
			// PostCSS integration if needed
			postcss: true,
			// TypeScript support
			typescript: {
				tsconfigFile: './tsconfig.json'
			}
		})
	],

	// Compiler options
	compilerOptions: {
		// Enable Svelte 5 runes
		runes: true,
		// Better development experience
		dev: process.env.NODE_ENV === 'development',
		// CSS handling
		css: 'injected',
		// Better performance
		hydratable: true
	},

	// SvelteKit configuration
	kit: {
		// Adapter configuration
		adapter: adapter({
			// Add any adapter-specific options here
			fallback: undefined,
			precompress: false,
			strict: true
		}),

		// Path configuration
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : '',
			assets: ''
		},

		// Alias configuration (should match vite.config.ts)
		alias: {
			$lib: 'src/lib',
			$styles: 'src/lib/styles'
		},

		// Files configuration
		files: {
			assets: 'static',
			hooks: {
				client: 'src/hooks.client',
				server: 'src/hooks.server',
				universal: 'src/hooks'
			},
			lib: 'src/lib',
			params: 'src/params',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			appTemplate: 'src/app.html',
			errorTemplate: 'src/error.html'
		},

		// Version management
		version: {
			name: process.env.npm_package_version || 'development',
			pollInterval: 300000 // 5 minutes
		},

		// Environment configuration
		env: {
			dir: '.',
			publicPrefix: 'PUBLIC_'
		},

		// CSP configuration for better security
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self']
			}
		},

		// Embedded mode configuration
		embedded: false,

		// TypeScript checking
		typescript: {
			config: (config) => {
				config.compilerOptions = {
					...config.compilerOptions,
					// Enable strict mode
					strict: true,
					// Better error reporting
					noImplicitReturns: true,
					noUnusedLocals: false, // Can be enabled based on preference
					noUnusedParameters: false, // Can be enabled based on preference
					// Path mapping (should match tsconfig.json)
					baseUrl: '.',
					paths: {
						$lib: ['src/lib'],
						'$lib/*': ['src/lib/*'],
						$styles: ['src/lib/styles'],
						'$styles/*': ['src/lib/styles/*']
					}
				};
				return config;
			}
		}
	},

	// Experimental features
	experimental: {
		// Enable any experimental features you want to test
	},

	// Warnings configuration
	onwarn: (warning, handler) => {
		// Customize warning handling
		const { code } = warning;

		// Ignore specific warnings if needed
		if (code === 'css-unused-selector') return;

		// Handle all other warnings normally
		handler(warning);
	}
};

export default config;
