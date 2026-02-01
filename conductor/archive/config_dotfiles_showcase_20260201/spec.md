# Track Spec: Config/Dotfiles Showcase Page

## Overview
This track implements the "Configuration / Dotfiles Archive" section of the website. It will allow visitors to browse, view, and download your personal configuration files sourced directly from a separate GitHub repository.

## Functional Requirements
1.  **Config Index Page (`/config`):**
    - Display a list or grid of featured configuration items (files or folders).
    - Metadata for each item should include its name, description, and primary technology (e.g., "Zsh", "Neovim").
    - Each item links to its dedicated detail page.

2.  **Config Detail Page (`/config/[...slug]`):**
    - **Dynamic Data Fetching:** Fetch file structure and content from a specified GitHub repository at build time.
    - **File Tree Explorer (for folders):**
        - Navigation component to browse the folder structure.
        - Selecting a file updates the code viewer content.
    - **Code Viewer:**
        - Minimalist technical aesthetic using JetBrains Mono font.
        - Feature: **OS-Specific Path Breadcrumbs**. Display the typical installation/placement path for the configuration on **Windows, Linux, and Mac** (e.g., Linux: `~/.zshrc`, Mac: `~/.zshrc`, Windows: `C:\Users\...`).
        - Feature: "Copy to Clipboard" button for the visible code.
        - Feature: Line numbers.
        - Feature: Syntax highlighting based on file extension.
    - **Download Action:**
        - Button to download the current file or a `.zip` archive of the entire folder.

## Technical Implementation Details
- **GitHub Integration:** Use the GitHub API (via `fetch` at build time) to retrieve the repository contents.
- **Metadata Management:** Use Astro's Content Layer. Each config entry will include metadata fields for `path_linux`, `path_mac`, and `path_windows`.
- **Zip Generation:** Use GitHub's native zipball URL (`https://github.com/USER/REPO/zipball/BRANCH`) for folder downloads.

## Non-Functional Requirements
- **Performance:** Ensure API calls happen during the build process to maintain a fast, static site experience.
- **Aesthetic:** Adhere to the Catppuccin Mocha palette and "Developer/Hacker" identity.

## Acceptance Criteria
- Visitors can view a list of configs on `/config`.
- Clicking a config item opens a detail page showing its contents.
- The file tree allows navigating multi-file configs.
- The code viewer correctly highlights syntax and shows line numbers.
- **The path display correctly shows placement paths for Windows, Linux, and Mac.**
- The download button successfully links to the file or zip archive.
