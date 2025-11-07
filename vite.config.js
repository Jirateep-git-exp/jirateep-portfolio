import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
    // If you will publish to GitHub Pages as a project site, set the base
    // to '/REPO_NAME/' so asset URLs are generated correctly.
    base: '/jirateep-portfolio/',
    plugins: [vue()],
});
