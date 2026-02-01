# Track Specification: Interactive Configuration File Explorer

## Overview
This track aims to enhance the "Configuration / Dotfiles" section of the personal website by implementing a robust, interactive file tree explorer. It transitions from fetching data via the GitHub API at build time to a purely local, static file-based system for improved reliability and faster development.

## Functional Requirements
- **Local File System Integration:**
    - Each configuration entry (e.g., Neovim, Zsh) will be stored in `src/content/config/<slug>/`.
    - Metadata (title, description, tech stack, install paths) remains in an `index.md` within that folder.
    - The actual configuration files and folder structures to be displayed will reside within the same `<slug>` directory.
- **Interactive File Tree:**
    - Display a recursive file tree representing the folder structure of the local config directory.
    - Folders should be expandable/collapsable.
- **Split-View Preview (Desktop):**
    - Clicking a file in the tree must update the "Code Viewer" pane with the file's content without reloading the page or changing the URL.
    - Use client-side state (e.g., React or standard JS) to manage the currently selected file and its content.
- **Master-Detail View (Mobile):**
    - On mobile screens, show the file tree first.
    - Selecting a file should switch the view to the code viewer (overlay or full-screen) with a "Back" button to return to the tree.
- **Syntax Highlighting:**
    - Maintain existing syntax highlighting using the Catppuccin theme.

## Non-Functional Requirements
- **Performance:** Instant switching between files (pre-render file contents into the client-side state or small data chunks).
- **Aesthetic:** Adhere to the "Developer/Hacker" monospaced look with JetBrains Mono.
- **Accessibility:** Ensure the file tree is navigable via keyboard.

## Acceptance Criteria
- [ ] Users can browse a multi-level folder structure for a config entry.
- [ ] Clicking any file correctly displays its contents in the code viewer.
- [ ] Switching files does not trigger a browser navigation/page reload.
- [ ] The layout transitions correctly between "Split View" (Desktop) and "Master-Detail" (Mobile).
- [ ] Data is correctly read from `src/content/config/` at build time.

## Out of Scope
- Dynamic GitHub fetching (this feature replaces it).
- Editing or saving configuration files directly from the web interface.
- Real-time search within file contents.
