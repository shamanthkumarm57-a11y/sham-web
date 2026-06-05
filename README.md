# 3D Web Studio

A complete React + Vite starter for a polished 3D landing experience. The app uses CSS 3D transforms, interactive React controls, responsive sections, and the default Vite build pipeline.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
  App.jsx                  Main app composition and shared state
  App.css                  App shell and workspace layout
  index.css                Global theme and base element styles
  components/
    Header.jsx             Top navigation component
    Header.css             Top navigation styles
    Hero.jsx               Hero copy and scene layout
    Hero.css               Hero section styles
    SceneStage.jsx         3D cube preview component
    SceneStage.css         3D cube and animation styles
    SceneControls.jsx      Material and speed controls
    SceneControls.css      Control panel styles
    Details.jsx            Project stats/details section
    Details.css            Details section styles
```

## Features

- Responsive first-screen 3D scene
- Material swatches controlled with React state
- Rotation speed slider
- Accessible focus styles and labels
- Production build through Vite
