import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [react(), dts({ outDir: 'dist' }), TanStackRouterVite()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-page-tracker',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: [
        {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: `[name].js`,
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: `[name].js`,
        },
      ],
    },
  },
});
