# Technology Stack

## Frontend Framework
- **Core:** **Astro**
  - **Rationale:** Chosen for its content-focused approach and superior performance for static sites (SSG). Perfect for a blog and portfolio.

## Styling
- **Engine:** **Tailwind CSS**
- **Theme Plugin:** **Tailwind-Catppuccin**
  - **Rationale:** Tailwind allows for rapid UI development, and the Catppuccin plugin ensures the site strictly adheres to the selected color palette.

## Content Management
- **Source:** **Markdown / MDX**
  - **Rationale:** Keeps content version-controlled alongside the code. Git-based workflow is ideal for developers.

## Deployment & Infrastructure
- **Platform:** **Google Cloud (Compute Engine / VM)**
  - **Strategy:** Manual Git workflow (`git pull` -> build/deploy directly on the server).
  - **Rationale:** Simple, direct control over the deployment environment without relying on complex CI/CD services or managed hosting features.

## Package Management
- **Tool:** **pnpm**
  - **Rationale:** Efficient, fast, and saves disk space. Highly recommended for the modern web ecosystem.
