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
				$styles: resolve('./src/lib/styles')
			}
		},

		// CSS Configuration
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use '$lib/scss/api.scss' as *;`
				}
			},
			transformer: 'lightningcss',
			// Better dev experience
			devSourcemap: isDev
		},

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
						vendor: ['svelte/internal', '@sveltejs/kit']
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
				overlay: true
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
