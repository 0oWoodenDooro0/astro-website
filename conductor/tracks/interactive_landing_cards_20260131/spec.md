# Track Spec: Interactive Landing Page Cards

## Overview
This track focuses on enhancing the user experience of the landing page (`src/pages/index.astro`) by making the feature cards (Projects, Blog, Configs) fully clickable links with visual hover feedback.

## Functional Requirements
1.  **Clickable Cards**: 
    - Wrap the existing "Projects", "Blog", and "Configs" `div` cards in semantic `<a>` tags.
    - Ensure the links point to the correct routes: `/projects`, `/blog`, and `/config`.
2.  **Hover Effects**:
    - **Border Color**: Change the border to the primary accent color (`ctp-pink`) on hover.
    - **Background**: Shift the background color to a slightly lighter surface highlight on hover.
    - **Transform**: Apply a subtle scale or "lift" effect (e.g., `hover:-translate-y-1`) to create a sense of depth.

## Non-Functional Requirements
- **Semantic HTML**: Use proper anchor tags to ensure SEO and standard browser navigation behavior (e.g., right-click to open in new tab).
- **Responsive Design**: Ensure hover effects and layouts remain consistent across all screen sizes.
- **Consistency**: Maintain the "Developer/Hacker" aesthetic and Catppuccin Mocha color palette.

## Acceptance Criteria
- Clicking anywhere on the Projects card navigates to `/projects`.
- Clicking anywhere on the Blog card navigates to `/blog`.
- Clicking anywhere on the Configs card navigates to `/config`.
- Hovering over any card triggers the border change, background highlight, and lift animation.
- All code follows the project's TypeScript and styling guidelines.

## Out of Scope
- Adding new content or features to the target pages.
- Implementing complex JavaScript-based animations or state management.
