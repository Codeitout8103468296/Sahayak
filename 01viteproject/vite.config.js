import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration for Bootstrap CSS
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    // Optional: Customize Bootstrap CSS import paths if needed
    // paths: [path.resolve(__dirname, 'node_modules/bootstrap/dist/css')], // Adjust path if necessary

    // Enable CSS preprocessor support (optional, adjust as needed)
    preprocessorOptions: {
      // For Sass/SCSS (uncomment if using Sass/SCSS)
      // sass: {
      //   additionalData: '@import "~bootstrap/scss/bootstrap";' // Import Bootstrap SCSS
      // },
    },
  },
  // Optional: Configure build options (adjust as needed)
  build: {
    // Add Bootstrap CSS to the output bundle (alternative to import in components)
    // cssCodeSplit: false, // Uncomment to disable CSS code splitting
    // rollupOptions: {
    //   external: ['bootstrap'], // Externalize Bootstrap for smaller bundles (consider trade-offs)
    // },
  },
});
