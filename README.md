
# 🛒 Summer Practice Project - E-commerce Landing Page & Dashboard

This is the repository for Team 4 for the summer practice project (IBM Consulting FutureNow).

## 📌 Organization & Tasks (Trello)
You can track the team's progress, Epic breakdowns, and Story Points directly on our Trello board by accessing the link below:
🔗 **[Click here to view the Trello board](https://trello.com/b/0zm7ZoVj/ibm-echipa-4)**

## 👥 Team
* **David** - Team Lead / Architecture & Core Components
* **Delia** - Frontend Landing Page
* **Alexandra** - Frontend Dashboard

## 🛠️ Implementation Assumptions
During the development of this project, the following assumptions and technical decisions were made:
* **Architecture:** The project follows the **Atomic Design Methodology** (Atoms, Molecules, Organisms, Templates, Pages) for highly reusable UI components.
* **Styling:** CSS variables (`index.css`) and pure CSS were chosen for a robust, dependency-free styling system that mimics a real Design System.
* **Icons:** All icons have been implemented as inline SVGs for maximum flexibility, styling control, and performance (no heavy icon fonts).
* **Mock Data:** Currently, components (like `ProductCard`) use mock data/placeholders, assuming they will be connected to a real API backend in the future.
* **Responsive Design:** Standard responsive breakpoints (e.g. `768px` for mobile/tablet) were assumed to ensure a fluid transition between desktop and mobile layouts.
* **Routing:** `react-router-dom` is used for client-side routing, wrapped in `React.Suspense` for future lazy-loading optimization.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
