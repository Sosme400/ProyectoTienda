import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // Directorio donde se generará el build
    rollupOptions: {
      input: './index.html',  // Asegúrate de que la ruta esté correcta
    },
  },
});
