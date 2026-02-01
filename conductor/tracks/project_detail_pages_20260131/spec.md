# Track Spec: Interactive Project Cards & Detail Page

## Overview
This track aims to enhance the "Projects" section by making the project list cards on `src/pages/projects/index.astro` clickable and implementing the corresponding detail view template at `src/pages/projects/[...slug].astro`. This will allow users to navigate from the project overview to a dedicated page for each project.

## Functional Requirements
1.  **Clickable Project Cards:**
    - Update `src/pages/projects/index.astro` to wrap each project card in an `<a>` tag.
    - The link destination must be `/projects/[slug]`, using the `slug` from the content collection.
    - **Constraint:** Maintain the existing hover effects; do not add new visual styles unless necessary for the link element itself.

2.  **Project Detail Page (`src/pages/projects/[...slug].astro`):**
    - Create a new dynamic route `[...slug].astro` under `src/pages/projects/`.
    - **Functionality:**
        - Fetch the specific project content using `getCollection` and `render`.
        - Handle 404s for invalid slugs (Astro default behavior for dynamic routes).
    - **Layout & Design:**
        - Use the main `Layout`.
        - Display the project Title, Description, and Tags.
        - Render the main Markdown content using the prose typography plugin (`prose`).
        - Include a "Back to Projects" link for navigation.

## Non-Functional Requirements
- **Consistency:** The detail page should follow the site's "Developer/Hacker" aesthetic (JetBrains Mono font, Catppuccin palette).
- **SEO:** Ensure the anchor tags on the index page are semantic.
- **Type Safety:** Use Astro's content collection types for all data fetching.

## Acceptance Criteria
- Clicking any project card on `/projects` navigates to the correct URL (e.g., `/projects/my-project`).
- The project detail page loads correctly and displays the markdown content.
- The "Back to Projects" button on the detail page works.
- `pnpm astro check` passes with no errors.
