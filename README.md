# Portfolio - Franchesca Carrasco

Este es mi portafolio web hecho con Vite, React, TypeScript, Tailwind CSS y shadcn-ui.

## 🚀 Deploy

El sitio está desplegado en GitHub Pages:

🔗 [https://franchescaycr.github.io/Portfolio/](https://franchescaycr.github.io/Portfolio/)

## 🛠️ Tecnologías usadas

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router DOM
- TanStack React Query

## 📦 Instalación local

```bash
# 1. Cloná el repositorio
git clone https://github.com/franchescaycr/Portfolio.git

# 2. Entrá al proyecto
cd Portfolio

# 3. Instalá las dependencias
npm install

# 4. Iniciá el servidor de desarrollo
npm run dev
🧾 Scripts disponibles
npm run dev – Inicia el servidor local en desarrollo

npm run build – Genera el sitio para producción

npm run preview – Muestra una vista previa del build

npm run deploy – Publica el contenido de dist en GitHub Pages

✍️ Cómo desplegar a GitHub Pages
bash
Copiar
Editar
npm run build
npm run deploy
Asegurate de que en vite.config.ts tengas:

ts
Copiar
Editar
base: "/Portfolio/"
