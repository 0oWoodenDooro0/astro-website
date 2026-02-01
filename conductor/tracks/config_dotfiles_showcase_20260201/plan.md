# Implementation Plan: Config/Dotfiles Showcase Page

## Phase 1: Content Schema & Mock Data [checkpoint: 4c6794a]
- [x] Task: Define `config` collection in `src/content/config.ts`. 1e23d87
    - [ ] Add schema with fields: `title`, `description`, `tech`, `github_path`, `path_linux`, `path_mac`, `path_windows`.
- [x] Task: Create sample config entries in `src/content/config/`. 7acf926
    - [ ] Create `zshrc.md` with mock metadata and paths.
    - [ ] Create `nvim.md` representing a folder structure.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Content Schema & Mock Data' (Protocol in workflow.md)

## Phase 2: Index Page Implementation
- [ ] Task: Create `src/pages/config/index.astro`.
    - [ ] Fetch all entries from the `config` collection.
    - [ ] Implement a grid/list layout using Catppuccin themed cards.
    - [ ] Display title, description, and tech tags.
    - [ ] Link cards to `/config/[slug]`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Index Page Implementation' (Protocol in workflow.md)

## Phase 3: Detail Page & GitHub Integration
- [ ] Task: Create `src/pages/config/[...slug].astro`.
    - [ ] Implement `getStaticPaths` for the `config` collection.
    - [ ] Setup a basic layout with the "Back to Config" navigation.
- [ ] Task: Implement GitHub API Utility.
    - [ ] Create `src/lib/github.ts` to fetch repository contents (tree and raw file content).
    - [ ] Handle build-time fetching within `getStaticPaths` or the page script.
- [ ] Task: Create the File Tree Explorer component.
    - [ ] Develop a recursive UI component to show folder/file structure.
    - [ ] Implement client-side state (or simple routing) to switch between files.
- [ ] Task: Create the Code Viewer component.
    - [ ] Implement syntax highlighting (using Shiki or similar Astro default).
    - [ ] Add line numbers and "Copy to Clipboard" functionality.
    - [ ] Style the viewer with Catppuccin Mocha and JetBrains Mono.
- [ ] Task: Implement OS-Specific Path Display.
    - [ ] Create a UI section showing the 3-OS paths (Linux, Mac, Windows) using the metadata.
- [ ] Task: Implement Download Buttons.
    - [ ] Link to raw GitHub content for single files.
    - [ ] Link to GitHub zipball for folders.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Detail Page & GitHub Integration' (Protocol in workflow.md)

## Phase 4: Final Polishing & Verification
- [ ] Task: Run full project verification.
    - [ ] Execute `pnpm astro check`.
    - [ ] Execute `pnpm run build`.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Final Polishing & Verification' (Protocol in workflow.md)
