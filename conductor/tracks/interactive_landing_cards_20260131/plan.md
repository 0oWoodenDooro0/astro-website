# Track Plan: Interactive Landing Page Cards

## Phase 1: Implementation & Styling [checkpoint: 113e271]
- [x] Task: Modify `src/pages/index.astro` to wrap feature cards in anchor tags. fcb6868
    - [x] Wrap the "Projects" card in an `<a>` tag pointing to `/projects`.
    - [x] Wrap the "Blog" card in an `<a>` tag pointing to `/blog`.
    - [x] Wrap the "Configs" card in an `<a>` tag pointing to `/config`.
- [x] Task: Apply hover effects and transitions to the cards in `src/pages/index.astro`. fcb6868
    - [x] Add `group` class to parent and `hover:border-ctp-pink` for border color change.
    - [x] Add `hover:bg-ctp-surface0` (or similar) for background highlighting.
    - [x] Add `hover:-translate-y-1 transition-all duration-300` for the lift effect.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Implementation & Styling' (Protocol in workflow.md)

## Phase 2: Validation & Build
- [ ] Task: Run project verification tools to ensure no syntax or type errors.
- [ ] Task: Run production build to ensure static site generation is successful.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Validation & Build' (Protocol in workflow.md)
