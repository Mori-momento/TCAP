import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import staticAssets from 'vite-plugin-static-assets';

export default defineConfig({
  plugins: [
    staticAssets({
      include: ['**/*.png'], // replace with the file extensions of your image assets
      outputDir: 'assets', // replace with the directory where you want to output the assets
    }),
  ],
});
