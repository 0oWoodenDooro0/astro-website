# Implementation Plan: Config/Dotfiles Showcase Page

## Phase 1: Content Schema & Mock Data [checkpoint: 4c6794a]
- [x] Task: Define `config` collection in `src/content/config.ts`. 1e23d87
    - [ ] Add schema with fields: `title`, `description`, `tech`, `github_path`, `path_linux`, `path_mac`, `path_windows`.
- [x] Task: Create sample config entries in `src/content/config/`. 7acf926
    - [ ] Create `zshrc.md` with mock metadata and paths.
    - [ ] Create `nvim.md` representing a folder structure.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Content Schema & Mock Data' (Protocol in workflow.md)

## Phase 2: Index Page Implementation [checkpoint: 680d179]
- [x] Task: Create `src/pages/config/index.astro`. 1e23d87
    - [ ] Fetch all entries from the `config` collection.
    - [ ] Implement a grid/list layout using Catppuccin themed cards.
    - [ ] Display title, description, and tech tags.
    - [ ] Link cards to `/config/[slug]`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Index Page Implementation' (Protocol in workflow.md)

## Phase 3: Detail Page & GitHub Integration [checkpoint: e605886]
- [x] Task: Create `src/pages/config/[...slug].astro`. 1e23d87
    - [ ] Implement `getStaticPaths` for the `config` collection.
    - [ ] Setup a basic layout with the "Back to Config" navigation.
- [x] Task: Implement GitHub API Utility. bb366b6
    - [ ] Create `src/lib/github.ts` to fetch repository contents (tree and raw file content).
    - [ ] Handle build-time fetching within `getStaticPaths` or the page script.
- [x] Task: Create the File Tree Explorer component. e8797d8
- [x] Task: Create the Code Viewer component. e8797d8
- [x] Task: Implement OS-Specific Path Display. e8797d8
- [x] Task: Implement Download Buttons. e8797d8
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Detail Page & GitHub Integration' (Protocol in workflow.md)

## Phase 4: Final Polishing & Verification [checkpoint: 4d7536e]
- [x] Task: Run full project verification. e8797d8
- [x] Task: Conductor - User Manual Verification 'Phase 4: Final Polishing & Verification' (Protocol in workflow.md)
