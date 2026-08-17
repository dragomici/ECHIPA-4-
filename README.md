# 🛒 E-Commerce Landing Page & Web Application

[![React](https://img.shields.io/badge/React-18-blue.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg?logo=vite)](https://vitejs.dev/)
[![CSS Variables & BEM](https://img.shields.io/badge/Styling-CSS%20Variables%20%26%20BEM-green.svg)](https://en.bem.info/)
[![Atomic Design](https://img.shields.io/badge/Architecture-Atomic%20Design-orange.svg)](https://bradfrost.com/blog/post/atomic-web-design/)

A modern, highly responsive, and feature-rich E-Commerce frontend web application built with **React**, **TypeScript**, **Vite**, **CSS Variables**, and structured following the **Atomic Design Methodology** and **BEM (Block Element Modifier)** naming convention.

---

## 📌 Organization & Tasks (Trello)
You can track the team's progress, Epic breakdowns, and Story Points directly on our Trello board:
🔗 **[Click here to view the Trello board](https://trello.com/b/0zm7ZoVj/ibm-echipa-4)**

---

## 👥 Team
* **David** - Team Lead / Architecture & Core Components
* **Delia** - Frontend Landing Page
* **Alexandra** - Frontend Dashboard

---

## 🎨 Figma Design Reference

This project was built to faithfully recreate the following Figma design:
* **Figma URL**: [Ecommerce Landing Page With Dashboard](https://www.figma.com/design/JgM3iNzg4Pn6LSyUm3mQvK/97--Ecommerce-Landing-Page-With-Dashboard--Community-?node-id=0-1&p=f&t=jwuYmtQ9NGxIeK4Y-0)

---

## 🚀 Key Features

* **Atomic Design Architecture**: Modular layout composed of Atoms, Molecules, Organisms, Templates, and Pages.
* **Full E-Commerce Workflow**:
  * **Landing Page / Home (`/`)**: Hero carousel banner, categories slider, daily best sellers swiper, deals of the day countdown timers, popular products grid, top-selling mini lists, and newsletter banner.
  * **Interactive Cart (`/cart`)**: Real-time item quantity increment/decrement, item removal, subtotal & order summary calculations, and recommended items.
  * **Wishlist Page (`/wishlist`)**: Manage favorite items, view stock badges, add items directly to cart, or clear all wishlist items.
  * **Order Checkout (`/checkout`)**: Multi-step order placement form with delivery address inputs, coupon code validation, payment method selection (Card / Cash on Delivery), order summary calculations, and modal confirmation.
  * **About Us Page (`/about`)**: Interactive image gallery switcher, company performance statistics, team member cards, and brand story.
* **Global Design System (CSS Variables & BEM)**:
  * Centralized CSS variables in `src/styles/index.css` (`:root`) for colors, typography, spacing, and elevation.
  * Strict BEM syntax across all CSS files without relying on heavy third-party CSS utility frameworks.
* **Responsive Layout**: Support for Desktop (> 1024px), Tablet (768px - 1024px), and Mobile (< 768px) with custom mobile drawer navigation.
* **UX Enhancements**:
  * Smooth route page transitions.
  * Animated skeleton loaders for cards and products.
  * Dynamic Toast notification system.
  * Scroll-To-Top Floating Action Button (FAB).
  * Lazy loading routes via `React.lazy` and `React.Suspense`.

---

## 📁 Project Structure

```text
src/
├── assets/                  # Product images, icons, and SVG assets
├── components/              # Atomic Design architecture
│   ├── atoms/               # Badge, Button, Checkbox, Input, Label, Link, Skeleton, Spinner, Star, Toast, Swiper, PageTransition
│   ├── molecules/           # CartItem, CheckboxGroup, EmptyState, HeaderAction, HeroTextBlock, NavItem, OrderSummary, Pagination, ProductPrice, ScrollToTopFAB, SearchBar, SkeletonCards, SocialGroup, ToastContainer, WishlistItemRow
│   ├── organisms/           # CartTable, CategoriesSlider, DailyBestSells, DealCard, DealsOfTheDay, Footer, Header, Hero, MobileDrawer, Newsletter, ProductCard, ProductGrid, ProductModal, PromoBanners, Sidebar, TopSellingMiniList, WishlistTable
│   ├── templates/           # DashboardLayout, LandingPageTemplate, MainLayout, NotFoundTemplate
│   └── pages/               # AboutPage, CartPage, CheckoutPage, Home2, WishlistPage
├── context/                 # SearchContext, ToastContext
├── hooks/                   # Custom Hooks (useCart, useWishlist, useTranslation, useDebounce, etc.)
├── locales/                 # Internationalization dictionary strings (EN / RO)
├── styles/                  # Global CSS variables, reset styles, typography (:root)
├── utils/                   # Mock data generators and formatting helpers
├── App.tsx                  # Main Router application with route lazy loading
└── main.tsx                 # Application entry point
```

---

## 🛠️ Installation & Setup

### Prerequisites
Make sure you have Node.js (version **18.x** or higher) and `npm` installed.

### 1. Clone Repository
```bash
git clone https://github.com/dragomici/ECHIPA-4-.git
cd ECHIPA-4-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the URL printed in the terminal).

### 4. Build for Production
To compile and test the production build:
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📋 Technical Requirements & Compliance Checklist

| Requirement | Implementation Status | Notes |
| :--- | :---: | :--- |
| **React Functional Components** | ✅ 100% Compliant | All components use standard React hooks without class components. |
| **Atomic Design Methodology** | ✅ 100% Compliant | Clean separation into `atoms`, `molecules`, `organisms`, `templates`, and `pages`. |
| **CSS & BEM Syntax** | ✅ 100% Compliant | Strict BEM class naming (`block__element--modifier`) across all 45+ CSS files. |
| **CSS Variables** | ✅ 100% Compliant | Colors, font sizes, borders, and spacing centralized in `:root` in `src/styles/index.css`. |
| **No Inline Styles** | ✅ 100% Compliant | Inline styles avoided; standard class names used everywhere except dynamic runtime properties (e.g. dynamic `backgroundImage`). |
| **Figma Accuracy** | ✅ 100% Compliant | Layouts, badges, cards, countdown timers, search filters, and footer mirror the Figma specs. |
| **Responsiveness** | ✅ 100% Compliant | Mobile-first and desktop-adapted flex/grid layouts without horizontal scrollbars. |
| **Reusability & Props** | ✅ 100% Compliant | Components accept structured props; no unnecessary prop drilling thanks to Context API and custom hooks. |
| **Bonus: Loading States** | ✅ 100% Compliant | Custom Skeleton loaders and Spinner components for async simulated fetching. |
| **Bonus: Transitions** | ✅ 100% Compliant | Smooth route transitions, button hover scaling, and toast slide-in animations. |
| **Bonus: Lazy Loading** | ✅ 100% Compliant | Code-splitting routes using `React.lazy` and `React.Suspense`. |

---

## 💡 Technical Decisions & Implementation Notes

1. **State Management**:
   - Cart and Wishlist state are stored and managed via custom hooks (`useCart`, `useWishlist`) backed by `localStorage` persistence.
   - Search query, category filter, and price slider state are provided globally via `SearchContext`.
2. **Atomic Design Distinction**:
   - **Atoms**: Smallest building blocks (e.g., `Button`, `Badge`, `Input`, `Star`).
   - **Molecules**: Combinations of atoms (e.g., `SearchBar`, `CartItem`, `OrderSummary`, `HeaderAction`).
   - **Organisms**: Complete visual sections (e.g., `Header`, `Footer`, `Hero`, `ProductGrid`, `DealsOfTheDay`).
   - **Templates**: Structural page wrappers (e.g., `MainLayout`, `DashboardLayout`).
   - **Pages**: Top-level views assembled with real mock data and state providers.
3. **No Unused Code**: All unused components, imports, and empty directories were pruned to maintain a clean codebase.

---

## 📄 License
This project is open-source and created for educational and evaluation purposes.
