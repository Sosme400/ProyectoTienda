import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // Donde se generará el build
    rollupOptions: {
      input: './index.html',  // Asegúrate de que apunte al archivo index.html correcto
    },
  },
});
