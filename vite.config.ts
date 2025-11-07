import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// Note: When deploying to GitHub Pages as a project site, set `base` to '/<REPO_NAME>/'
// Here the repo name is 'jirateep-portfolio'
export default defineConfig({
  base: '/jirateep-portfolio/',
  plugins: [vue()],
})
