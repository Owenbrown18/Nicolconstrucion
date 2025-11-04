import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        services: path.resolve(__dirname, 'services.html'),
        projects: path.resolve(__dirname, 'projects.html'),
        about: path.resolve(__dirname, 'about.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      },
    },
  },
});
