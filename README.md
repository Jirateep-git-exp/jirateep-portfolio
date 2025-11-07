# Jirateep Portfolio Landing Page

A responsive and animated resume/portfolio built with Vue 3 + Vite + TypeScript, Tailwind CSS, and @vueuse/motion. Ready for Docker deployment via Nginx.

## Features
- Vue 3 + Vite + TypeScript
- Tailwind CSS for responsive design
- @vueuse/motion for auto animations (v-motion directive)
- Production Dockerfile (multi-stage) + Nginx SPA config
- docker-compose.yml exposing port 8080

## Getting Started (Windows PowerShell)

### 1) Install dependencies
```powershell
npm install
```

### 2) Start development server
```powershell
npm run dev
```
Then open the URL shown (usually http://localhost:5173).

### 3) Type-check and build
```powershell
npm run build
```

### 4) Preview production build
```powershell
npm run preview
```

## Docker

### Build image
```powershell
docker build -t jirateep-landp:latest .
```

### Run container (port 8080 -> 80)
```powershell
docker run --rm -p 8080:80 jirateep-landp:latest
```

Or use docker-compose:
```powershell
docker-compose up --build
```
Then visit http://localhost:8080

## Customize
- Replace placeholder text (Thai/English) in components under `src/components`.
- Update contact links in `src/components/Contact.vue`.
- Add real project data in `src/components/Projects.vue`.

## Deployment: GitHub Pages

There are two supported approaches: manual (gh-pages branch) or automated (GitHub Actions). The site base path is set in `vite.config.ts` as `base: '/jirateep-portfolio/'` so assets resolve correctly.

### Option A: Manual deploy with gh-pages
1. Install dependencies (first time):
	```powershell
	npm install
	```
2. Build and deploy:
	```powershell
	npm run deploy
	```
	This runs `npm run build` (TypeScript check + Vite build), creates `dist/404.html` (via postbuild) and publishes `dist` to a `gh-pages` branch using the `gh-pages` package.
3. Visit: `https://<your-username>.github.io/jirateep-portfolio/`

If you change the repository name, update `base` in `vite.config.ts`.

### Option B: Automatic deploy (GitHub Actions)
Already configured in `.github/workflows/deploy.yml`. After pushing to `main`:
1. Go to repository Settings → Pages → Set Source: GitHub Actions (if not already active).
2. Workflow builds, adds a `404.html` for SPA routing, and deploys.
3. Output URL will appear in the workflow summary.

### SPA Routing
Vue Router uses `createWebHistory()`; GitHub Pages needs a `404.html` that mirrors `index.html` so client-side routes work on reload. This is handled automatically (postbuild script & workflow step). If you add dynamic server paths, switch to hash mode or use a server that supports rewrites.

### Common Issues & Fixes
| Issue | Symptom | Fix |
|-------|---------|-----|
| Wrong base path | CSS/JS 404 | Ensure `base` matches repo name `/jirateep-portfolio/` |
| Missing 404 fallback | Refresh on nested path 404 | Keep `404.html` copy step |
| Cache stale after deploy | Old assets show | Hard refresh / Increment build or enable versioning |
| Mixed content (HTTP images) | Console warnings | Use HTTPS asset URLs |
| Large images slow load | Slow LCP | Optimize / compress images in `src/utils/images` |

### Custom Domain
Add a `CNAME` file in `dist` (or root with workflow copy step) containing your domain, then configure DNS (CNAME to `<username>.github.io`). Update any absolute links.

### Local Preview
```powershell
npm run build
npm run preview
```

### Next Steps
- Add analytics (e.g., plausible, gtag) conditionally via environment variable.
- Optimize images and enable lazy loading.
- Create a `Projects` JSON data file for easier updates.

