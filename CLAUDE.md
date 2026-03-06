# CLAUDE.md — trustdesign.io

## Project Overview

trustdesign.io is a personal/professional website for a "trust design" consultancy.
Built with React 18 + TypeScript + Vite. No server-side rendering.

## Tech Stack

- **Framework**: React 18, Vite
- **Language**: TypeScript (strict)
- **Routing**: React Router v6
- **Styling**: CSS Modules + CSS custom properties (design tokens) + BEM naming
- **Testing**: Vitest + @testing-library/react
- **Component dev**: Storybook 8
- **Linting**: ESLint (typescript-eslint) + Stylelint (BEM) + Prettier
- **Backend**: Parse SDK (Back4App or similar)
- **Pre-commit**: Husky + lint-staged

## Directory Structure

```
src/
  01_foundation/   # Design tokens as CSS files (color, dimension, duration, typography, reset)
  02_components/   # Reusable UI components
  03_partials/     # Page-level partials (header, footer, navigation)
  04_pages/        # Route-level page components
  05_utilities/    # Utility functions and CSS helpers
```

## Component Conventions

Each component in `02_components/` follows this structure:
```
ComponentName/
  ComponentName.tsx        # Component implementation
  ComponentName.module.css # Scoped styles (BEM naming)
  ComponentName.test.tsx   # Vitest + Testing Library tests
  ComponentName.stories.tsx # Storybook stories
  index.ts                 # Named exports (component + types)
```

`index.ts` pattern:
```ts
export { default as ComponentName } from "./ComponentName";
export type { ComponentNameProps } from "./ComponentName";
```

## CSS Conventions

- **BEM** selector naming enforced by `stylelint-selector-bem-pattern`
- **CSS Modules** for component styles (`.module.css`)
- **CSS custom properties** for design tokens (defined in `01_foundation/`)
- Custom property pattern: `[a-z0-9-]+` (all lowercase, hyphen-separated)
- Import tokens in `main.tsx` before any component styles

## Commands

```bash
npm run dev          # Vite dev server
npm run build        # tsc + vite build
npm run lint:js      # ESLint
npm run lint:css     # Stylelint
npm run lint:fix     # Auto-fix linting issues
npm run format       # Prettier
```

Run tests with:
```bash
npx vitest           # Interactive test runner
npx vitest run       # Single test run (for CI-style checks)
```

## Important Notes

- App is wrapped in `<SchemeProvider scheme="dark">` — all pages use dark scheme by default
- Article pages are statically defined in `App.tsx` with explicit routes (no dynamic routing)
- `Buffer` polyfill is set on `window` in `App.tsx` for Parse SDK compatibility
- CSS custom media queries defined in `01_foundation/dimension/customMedia.css` via `postcss-custom-media`
