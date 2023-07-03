import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  base: "/website/",
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      // Add any aliases you may have
    },
    extensions: ['.js', '.jsx'] // Add '.jsx' extension
  },
});