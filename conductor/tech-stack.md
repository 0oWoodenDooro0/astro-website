# Technology Stack

## Frontend Framework
- **Core:** **Astro**
  - **Rationale:** Chosen for its content-focused approach and superior performance for static sites (SSG). Perfect for a blog and portfolio.

## Styling
- **Engine:** **Tailwind CSS**
- **Theme Plugin:** **Tailwind-Catppuccin**
  - **Rationale:** Tailwind allows for rapid UI development, and the Catppuccin plugin ensures the site strictly adheres to the selected color palette.
- **Typography:** **@tailwindcss/typography**
  - **Rationale:** Provides consistent and beautiful styling for Markdown content (prose).
- **Font:** **JetBrains Mono**
  - **Rationale:** Reinforces the "Developer/Hacker" aesthetic with a high-quality monospaced font.

## Content Management
- **Source:** **Markdown / MDX**
  - **Rationale:** Keeps content version-controlled alongside the code. Git-based workflow is ideal for developers.

## Client-Side State
- **State Manager:** **NanoStores**
  - **Rationale:** Extremely lightweight, framework-agnostic state management. Ideal for Astro's "islands" architecture.

## External Integrations
- **Syntax Highlighting:** **Shiki**
  - **Rationale:** Used both at build-time (for pre-rendering) and potentially client-side. Provides high-fidelity themes (Catppuccin).

## Deployment & Infrastructure
- **Platform:** **Google Cloud (Compute Engine / VM)**
  - **Strategy:** Manual Git workflow (`git pull` -> build/deploy directly on the server).
  - **Rationale:** Simple, direct control over the deployment environment without relying on complex CI/CD services or managed hosting features.

## Package Management
- **Tool:** **pnpm**
  - **Rationale:** Efficient, fast, and saves disk space. Highly recommended for the modern web ecosystem.

## Runtime Environment
- **Containerization:** **Docker**
  - **Image:** `node:25`
  - **Rationale:** Ensures a consistent development environment across different machines and prevents "works on my machine" issues.
