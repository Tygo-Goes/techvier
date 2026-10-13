import {defineConfig} from 'vite';
import {copyFileSync} from 'node:fs';

export default defineConfig({
  base: '/techvier/',
  resolve: {preserveSymlinks: true},
  plugins: [{
    name: 'legacy-page-aliases',
    closeBundle() {
      for (const page of ['diensten', 'team', 'contact']) {
        copyFileSync('dist/index.html', `dist/${page}.html`);
      }
    }
  }]
});
