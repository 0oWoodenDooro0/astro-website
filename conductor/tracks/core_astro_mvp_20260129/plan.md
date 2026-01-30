# Track Plan: Core Astro MVP

## Phase 1: Project Scaffolding & Configuration [checkpoint: 22a6efa]
- [x] Task: Initialize Astro project with `pnpm create astro@latest`. [ffa2e34]
- [x] Task: Install Tailwind CSS integration (`pnpm astro add tailwind`). [d357430]
- [x] Task: Install and configure `tailwind-catppuccin` plugin and `@fontsource/jetbrains-mono`. [5b9359d]
- [x] Task: Update `tailwind.config.mjs` to set the default font family and color palette (Mocha). [9e4794a]
- [x] Task: Create a base `Layout.astro` component with the HTML shell and common `<head>` elements. [8c66cbb]
- [x] Task: Conductor - User Manual Verification 'Phase 1: Project Scaffolding & Configuration' (Protocol in workflow.md)

## Phase 2: Content Collections & Routing
- [ ] Task: Define Content Collection schema for `blog` in `src/content/config.ts`.
- [ ] Task: Define Content Collection schema for `projects` in `src/content/config.ts`.
- [ ] Task: Define Content Collection schema for `config` (dotfiles) in `src/content/config.ts`.
- [ ] Task: Create the file structure for routes: `pages/index.astro`, `pages/about.astro`.
- [ ] Task: Create dynamic routes for Blog: `pages/blog/index.astro` and `pages/blog/[...slug].astro`.
- [ ] Task: Create dynamic routes for Projects: `pages/projects/index.astro`.
- [ ] Task: Create dynamic routes for Configs: `pages/config/index.astro` and `pages/config/[...slug].astro`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Content Collections & Routing' (Protocol in workflow.md)

## Phase 3: UI Implementation & Theming
- [ ] Task: Implement the global Navigation Bar component with links to all major sections.
- [ ] Task: Style the `Layout.astro` to use the Catppuccin background (Base/Mantle) and text colors.
- [ ] Task: Implement the Landing Page (`index.astro`) with a hero section.
- [ ] Task: Implement the Blog Index page (list view with cards).
- [ ] Task: Implement the Blog Post view (Markdown rendering).
- [ ] Task: Implement the Projects Index page (Grid view with thumbnails).
- [ ] Task: Implement the Config file viewer (Code block styling with Shiki/Astro default).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: UI Implementation & Theming' (Protocol in workflow.md)
