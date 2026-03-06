# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Docker

A simple `Dockerfile` and `docker-compose.yml` are provided for development and production workflows.

### Development

```bash
# build and start a container running the Vite dev server
docker-compose up --build
```

Changes in the host project will be reflected inside the container thanks to the mounted volume. The app will be available at http://localhost:5173.

## API Configuration

This frontend currently uses a thin `services/api.js` wrapper around `axios`. By default it points to `http://localhost:3000/api` but you can configure a different backend URL using environment variables:

```env
VITE_API_BASE_URL=https://your-backend.example.com/api
VITE_USE_MOCK=true   # set to false to fetch from real API
```

When `VITE_USE_MOCK=true` the application will fall back to the old `src/data/mockData.js` dataset. Remove or replace the mock file once your database‑powered API is ready.


### Production

Build a static production image and serve with nginx:

```bash
# build only the production stage
docker build --target production -t elite-english-center:prod .
# run the image
docker run -p 80:80 elite-english-center:prod
```

Or use compose:

```bash
docker-compose up --build production
```

```