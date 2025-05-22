import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig(({ command, mode }): UserConfig => {
	const isDev = command === 'serve';
	const isProd = mode === 'production';

	return {
		plugins: [sveltekit()],

		// Path resolution
		resolve: {
			alias: {
				$lib: resolve('./src/lib'),
				$components: resolve('./src/lib/components'),
				$stores: resolve('./src/lib/stores'),
				$utils: resolve('./src/lib/utils'),
				$styles: resolve('./src/lib/styles'),
				$types: resolve('./src/lib/types')
			}
		},

		// CSS Configuration		css: {			transformer: 'lightningcss',			lightningcss: {				// Minimize in production				minify: isProd			},			// Better dev experience			devSourcemap: isDev		},

		// Build Configuration
		build: {
			cssMinify: 'lightningcss',
			// Improve build performance
			target: 'esnext',
			// Better chunk splitting
			rollupOptions: {
				output: {
					// Optimize chunk splitting
					manualChunks: {
						vendor: ['svelte/internal', '@sveltejs/kit'],
						utils: ['$lib/utils']
					}
				}
			},
			// Source maps for production debugging
			sourcemap: isProd ? 'hidden' : true,
			// Reduce bundle size
			minify: isProd ? 'esbuild' : false
		},

		// Development Server
		server: {
			// Better development experience
			fs: {
				allow: ['..']
			},
			// CORS for development
			cors: true,
			// Hot reload optimization
			hmr: {
				overlay: false
			}
		},

		// Preview Server (for production builds)
		preview: {
			port: 4173,
			strictPort: true
		},

		// Optimization
		optimizeDeps: {
			include: ['svelte/internal'],
			exclude: ['@sveltejs/kit', 'svelte']
		},

		// Type checking
		esbuild: {
			target: 'esnext',
			// Remove console logs in production
			drop: isProd ? ['console', 'debugger'] : []
		},

		// Environment variables
		define: {
			__DEV__: isDev,
			__PROD__: isProd
		}
	};
});
