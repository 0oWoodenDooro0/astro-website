# Track Plan: Interactive Project Cards & Detail Page

## Phase 1: Project Detail Page Implementation [checkpoint: 113f69d]
- [x] Task: Create `src/pages/projects/[...slug].astro`. 30dfd61
    - [x] Implement `getStaticPaths` to generate routes for all projects in the `projects` collection.
    - [x] Use `entry.render()` to get the `Content` component.
    - [x] Structure the page using the main `Layout`.
    - [x] Render metadata (Title, Description, Tags) and the main `Content` using `prose` classes.
    - [x] Add a "Back to Projects" link.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Project Detail Page Implementation' (Protocol in workflow.md)

## Phase 2: Index Page Interactions [checkpoint: 7cc1351]
- [x] Task: Update `src/pages/projects/index.astro`. 0f53818
    - [x] Modify the card loop to wrap the card content in an `<a>` tag linking to `/projects/${project.slug}`.
    - [x] Ensure existing styles and hover effects are preserved (or applied to the anchor if necessary).
- [x] Task: Conductor - User Manual Verification 'Phase 2: Index Page Interactions' (Protocol in workflow.md)

## Phase 3: Final Validation [checkpoint: 72607ad]
- [x] Task: Run full project verification.
    - [x] Execute `pnpm astro check`.
    - [x] Execute `pnpm run build`.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Final Validation' (Protocol in workflow.md)
