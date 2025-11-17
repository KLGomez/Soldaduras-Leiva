
# Soldaduras Leiva — Landing Page Corporativa

Landing page profesional desarrollada para **Soldaduras Leiva**, una empresa especializada en soldadura industrial, gasoductos, plantas reguladoras y montajes técnicos.  
El sitio está optimizado para carga rápida, accesibilidad, diseño responsivo y fácil mantenimiento.


## Descripción

Este repositorio contiene una landing page corporativa estructurada como una aplicación React (archivos .tsx) preparada con Vite. Está organizada en componentes reutilizables dentro de `src/components` y contiene utilidades / componentes UI en `src/components/ui`.

## Tecnologías

- Vite (bundler / dev server)
- React (con archivos .tsx)
- TypeScript (extensiones .ts/.tsx en el proyecto)
- Plugins: `@vitejs/plugin-react-swc`
- Dependencias de UI y utilidades (Radix UI, lucide-react, embla-carousel, sonner, etc.)

> Nota: el repositorio incluye muchas dependencias orientadas a componentes accesibles y utilidades; revisa `package.json` para la lista completa.

## Requisitos

- Node.js (recomendado >= 16, ideal 18+)
- npm (o tu gestor de paquetes preferido: pnpm, yarn)

## Instalación (desarrollo)

1. Clona el repositorio

2. Instala dependencias

```bash
npm install
```

3. Inicia el servidor de desarrollo

```bash
npm run dev
```

El servidor de desarrollo se abre por defecto en el puerto configurado en `vite.config.ts` (actualmente `3000`).

## Scripts disponibles

- `npm run dev` — levanta Vite en modo desarrollo
- `npm run build` — construye la app para producción (salida en la carpeta `build` según `vite.config.ts`)

Si quieres previsualizar la carpeta de producción después del `build`, puedes usar `npx vite preview` o añadir un script `preview` si lo deseas.

## Estructura relevante del proyecto

- `index.html` — punto de entrada HTML que carga `/src/main.tsx`
- `src/main.tsx` — arranque de React
- `src/App.tsx` — composición principal (Header, Hero, Services, About, Portfolio, Contact, Footer)
- `src/components/` — componentes de la landing
- `src/components/ui/` — componentes UI reutilizables
- `src/assets/` — imágenes y recursos
- `vite.config.ts` — configuración de Vite (alias y puerto de desarrollo, salida `build`)

## Notas de despliegue

- `vite build` genera los archivos estáticos en `build/` (según `vite.config.ts`).
- Puedes desplegar la carpeta `build` a cualquier host estático (Netlify, Vercel, GitHub Pages con adaptaciones, S3, etc.).


---
