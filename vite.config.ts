import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit()
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      // Optional: Configure lightningcss specific options here
      // For example, to enable CSS nesting, if not enabled by default
      // draftMode: 'nesting',
      // browserslist: '>= 0.25%'
    }
  },
  build: {
    cssMinify: 'lightningcss'
  }
});
