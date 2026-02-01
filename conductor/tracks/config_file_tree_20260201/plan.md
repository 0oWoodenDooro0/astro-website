# Implementation Plan: Interactive Configuration File Explorer

This plan outlines the steps to migrate configuration data to a local structure and implement an interactive, split-view file explorer for the dotfiles section.

## Phase 1: Data Migration & Content Structure

- [x] Task: Reorganize `src/content/config/` into a subdirectory-based structure. 4f65eaf
    - Move `nvim.md` to `nvim/index.md`, `zshrc.md` to `zsh/index.md`, etc.
    - Populate each subdirectory with sample configuration files and folders (e.g., `nvim/init.lua`, `nvim/lua/plugins.lua`) to test the recursive tree.
- [x] Task: Update the Astro content collection loader. 4f65eaf
    - Modify `src/content/config.ts` to ensure it correctly picks up the `index.md` files as the metadata for each config entry.
- [ ] Task: Create a build-time utility to generate the file tree and extract content.
    - Implement a script to recursively scan the folder siblings of `index.md`.
    - Generate a JSON structure containing the file hierarchy and the raw content of each file.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Data Migration & Content Structure' (Protocol in workflow.md)

## Phase 2: Core Components & Client-Side Logic

- [ ] Task: Implement the interactive File Tree component.
    - Refactor `src/components/FileTree.astro` (or create a new client-side component) to handle click events.
    - Add state management (e.g., using a Nanostore or standard React state) to track the "currently selected file".
- [ ] Task: Refactor the Code Viewer for dynamic updates.
    - Update `src/components/CodeViewer.astro` to receive code content as a prop or from a shared state.
    - Ensure syntax highlighting correctly updates when a new file is selected.
- [ ] Task: Assemble the Split-View Layout in `src/pages/config/[...slug].astro`.
    - Replace the build-time GitHub fetching logic with the local JSON data generated in Phase 1.
    - Implement the horizontal split-view layout for desktop.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Core Components & Client-Side Logic' (Protocol in workflow.md)

## Phase 3: Mobile Responsiveness & UI/UX Polish

- [ ] Task: Implement Master-Detail transition for Mobile.
    - Add CSS/JS logic to hide the tree and show the viewer on mobile after a file selection.
    - Add a "Back to Files" button visible only in the mobile detail view.
- [ ] Task: Visual refinement and "Hacker" aesthetic.
    - Ensure all interactions use Catppuccin Mocha colors.
    - Add smooth transitions/animations for folder expansion and file switching.
- [ ] Task: Cleanup unused code.
    - Remove GitHub API integration from `src/pages/config/[...slug].astro` and `src/lib/github.ts` if no longer used by other features.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Mobile Responsiveness & UI/UX Polish' (Protocol in workflow.md)
