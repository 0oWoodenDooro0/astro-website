# Track Spec: Core Astro MVP

## Overview
This track focuses on initializing the Astro project, setting up the required routes (Home, Blog, Projects, Config), and implementing the visual identity using Tailwind CSS and the Catppuccin theme.

## Requirements
1.  **Project Initialization:**
    -   Initialize a new Astro project using `pnpm`.
    -   Install Tailwind CSS and the Tailwind-Catppuccin plugin.
    -   Configure the font family to JetBrains Mono.

2.  **Routing Structure:**
    -   `index.astro` (Home)
    -   `blog/index.astro` & `blog/[slug].astro`
    -   `projects/index.astro` (Project list)
    -   `config/index.astro` & `config/[file].astro` (Dotfiles viewer)
    -   `about.astro`

3.  **Content Management:**
    -   Configure Astro Content Collections for `blog`, `projects`, and `config`.
    -   **Blog Schema:** Title, Date, Description, Tags.
    -   **Project Schema:** Title, Description, Tech Stack (tags), GitHub Link.
    -   **Config Schema:** Filename, Language (for syntax highlighting).

4.  **UI/UX:**
    -   Implement the "Developer/Hacker" aesthetic.
    -   Use the Catppuccin Mocha color palette.
    -   Ensure the layout is responsive (mobile-first).
    -   Create a shared `Layout` component with a navigation bar.

## Tech Stack
-   **Framework:** Astro
-   **Styling:** Tailwind CSS + Catppuccin Plugin
-   **Font:** JetBrains Mono
-   **Package Manager:** pnpm
