# Track Plan: Core Astro MVP

## Phase 1: Project Scaffolding & Configuration [checkpoint: 22a6efa]
- [x] Task: Initialize Astro project with `pnpm create astro@latest`. [ffa2e34]
- [x] Task: Install Tailwind CSS integration (`pnpm astro add tailwind`). [d357430]
- [x] Task: Install and configure `tailwind-catppuccin` plugin and `@fontsource/jetbrains-mono`. [5b9359d]
- [x] Task: Update `tailwind.config.mjs` to set the default font family and color palette (Mocha). [9e4794a]
- [x] Task: Create a base `Layout.astro` component with the HTML shell and common `<head>` elements. [8c66cbb]
- [x] Task: Conductor - User Manual Verification 'Phase 1: Project Scaffolding & Configuration' (Protocol in workflow.md)

## Phase 2: Content Collections & Routing [checkpoint: b30cb1e]
- [x] Task: Define Content Collection schema for `blog` in `src/content/config.ts`. [450b062]
- [x] Task: Define Content Collection schema for `projects` in `src/content/config.ts`. [4749729]
- [x] Task: Define Content Collection schema for `config` (dotfiles) in `src/content/config.ts`. [e984c2e]
- [x] Task: Create the file structure for routes: `pages/index.astro`, `pages/about.astro`. [c96d2aa]
- [x] Task: Create dynamic routes for Blog: `pages/blog/index.astro` and `pages/blog/[...slug].astro`. [52bf41f]
- [x] Task: Create dynamic routes for Projects: `pages/projects/index.astro`. [10bde19]
- [x] Task: Create dynamic routes for Configs: `pages/config/index.astro` and `pages/config/[...slug].astro`. [919d816]
- [x] Task: Conductor - User Manual Verification 'Phase 2: Content Collections & Routing' (Protocol in workflow.md) [b30cb1e]

## Phase 3: UI Implementation & Theming
- [x] Task: Implement the global Navigation Bar component with links to all major sections. [9b7e48c]
- [x] Task: Style the Layout.astro to use the Catppuccin background (Base/Mantle) and text colors. [1aa7e5c]
- [x] Task: Implement the Landing Page (`index.astro`) with a hero section. [bd49e4a]
- [x] Task: Implement the Blog Index page (list view with cards). [913d86b]
- [x] Task: Implement the Blog Post view (Markdown rendering). [ebb6394]
- [x] Task: Implement the Projects Index page (Grid view with thumbnails). [e6a15d0]
- [x] Task: Implement the Config file viewer (Code block styling with Shiki/Astro default). [76d5e1f]
- [ ] Task: Conductor - User Manual Verification 'Phase 3: UI Implementation & Theming' (Protocol in workflow.md)
