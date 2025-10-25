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
