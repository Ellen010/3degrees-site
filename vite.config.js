import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "ipag-5a",
    project: "javascript-react"
  })],

  css: {
    postcss: {
      plugins: [
        tailwindcss(), 
        autoprefixer(), 
      ],
    },
  },

  build: {
    sourcemap: true
  }
});