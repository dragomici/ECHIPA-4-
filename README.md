Markdown

# E-Commerce Project

## Installation

Follow these steps to install the project dependencies:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the root directory of the project.
3. Run the following command to install all necessary dependencies:

```bash
npm install
```

## 🛠️ Implementation Assumptions
During the development of this project, the following assumptions and technical decisions were made:
* **Architecture:** The project follows the **Atomic Design Methodology** (Atoms, Molecules, Organisms, Templates, Pages) for highly reusable UI components.
* **Styling:** CSS variables (`index.css`) and pure CSS were chosen for a robust, dependency-free styling system that mimics a real Design System.
* **Icons:** All icons have been implemented as inline SVGs for maximum flexibility, styling control, and performance (no heavy icon fonts).
* **Mock Data:** Currently, components (like `ProductCard`) use mock data/placeholders, assuming they will be connected to a real API backend in the future.
* **Responsive Design:** Standard responsive breakpoints (e.g. `768px` for mobile/tablet) were assumed to ensure a fluid transition between desktop and mobile layouts.
* **Routing:** `react-router-dom` is used for client-side routing, wrapped in `React.Suspense` for future lazy-loading optimization.

# React + TypeScript + Vite

Ensure all dependencies are installed.

Run the following command in your terminal:

Bash
npm run dev
Open your web browser and navigate to the local URL provided in the terminal output to view the application.


```
