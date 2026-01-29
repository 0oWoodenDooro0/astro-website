# Project Workflow

## Guiding Principles

1. **The Plan is the Source of Truth:** All work must be tracked in `plan.md`
2. **The Tech Stack is Deliberate:** Changes to the tech stack must be documented in `tech-stack.md` *before* implementation
3. **TypeScript First:** All code must be written in TypeScript. Avoid using `.js` files unless absolutely necessary for configuration.
4. **Manual Verification:** Since automated testing is not required, rigorous manual verification and visual inspection are mandatory.
5. **User Experience First:** Every decision should prioritize user experience and the "Developer/Hacker" aesthetic.
6. **Non-Interactive & CI-Aware:** Prefer non-interactive commands.

## Task Workflow

All tasks follow a strict lifecycle:

### Standard Task Workflow

1. **Select Task:** Choose the next available task from `plan.md` in sequential order

2. **Mark In Progress:** Before beginning work, edit `plan.md` and change the task from `[ ]` to `[~]`

3. **Implement Feature/Fix:**
   - Write the application code necessary to complete the task.
   - **Constraint:** Use TypeScript (`.ts`, `.tsx`, `.astro`) for all logic.

4. **Verify Syntax and Types (Validation Phase):**
   - **CRITICAL** Run the project's verification tools to check for syntax errors and type mismatches.
   - Execute: `pnpm astro check`
   - Ensure there are **zero** errors. Do not proceed until the check command returns a success code.

5. **Refactor (Optional but Recommended):**
   - Refactor the code to improve clarity, remove duplication, and enhance performance.
   - **CRITICAL** Rerun `pnpm astro check` after every refactor to ensure no regressions were introduced.

6. **Verify Build:** Run a dry-run build to ensure the code is valid for production generation:
   - Execute: `pnpm run build`.
   - If the build fails, fix the errors before proceeding.

7. **Document Deviations:** If implementation differs from tech stack:
   - **STOP** implementation
   - Update `tech-stack.md` with new design
   - Add dated note explaining the change
   - Resume implementation

8. **Commit Code Changes:**
   - Stage all code changes related to the task.
   - Propose a clear, concise commit message e.g, `feat(ui): Create basic HTML structure for calculator`.
   - Perform the commit.

9. **Attach Task Summary with Git Notes:**
   - **Step 9.1: Get Commit Hash:** Obtain the hash of the *just-completed commit* (`git log -1 --format="%H"`).
   - **Step 9.2: Draft Note Content:** Create a detailed summary for the completed task. This should include the task name, a summary of changes, a list of all created/modified files, and the core "why" for the change.
   - **Step 9.3: Attach Note:** Use the `git notes` command to attach the summary to the commit.
     ```bash
     # The note content from the previous step is passed via the -m flag.
     git notes add -m "<note content>" <commit_hash>
     ```

10. **Get and Record Task Commit SHA:**
    - **Step 10.1: Update Plan:** Read `plan.md`, find the line for the completed task, update its status from `[~]` to `[x]`, and append the first 7 characters of the *just-completed commit's* commit hash.
    - **Step 10.2: Write Plan:** Write the updated content back to `plan.md`.

11. **Commit Plan Update:**
    - **Action:** Stage the modified `plan.md` file.
    - **Action:** Commit this change with a descriptive message (e.g., `conductor(plan): Mark task 'Create user model' as complete`).

### Phase Completion Verification and Checkpointing Protocol

**Trigger:** This protocol is executed immediately after a task is completed that also concludes a phase in `plan.md`.

1.  **Announce Protocol Start:** Inform the user that the phase is complete and the verification and checkpointing protocol has begun.

2.  **Ensure Syntax Integrity for Phase Changes:**
    -   **Step 2.1: Determine Phase Scope:** To identify the files changed in this phase, you must first find the starting point. Read `plan.md` to find the Git commit SHA of the *previous* phase's checkpoint. If no previous checkpoint exists, the scope is all changes since the first commit.
    -   **Step 2.2: List Changed Files:** Execute `git diff --name-only <previous_checkpoint_sha> HEAD` to get a precise list of all files modified during this phase.
    -   **Step 2.3: Global Verification:** Ensure that the changes integrate correctly with the rest of the project by running a global check

3.  **Execute Automated Validation with Proactive Debugging:**
    -   Before execution, you must announce the exact shell command you will use to verify the phase.
    -   **Example Announcement:** "I will now run the Astro type check and build process to verify the phase. Command: `pnpm astro check && pnpm run build`"
    -   Execute the announced command.
    -   If the check or build fails, you **must** inform the user and begin debugging. You may attempt to propose a fix a **maximum of two times**. If it still fails, stop and ask the user for guidance.

4.  **Propose a Detailed, Actionable Manual Verification Plan:**
    -   **CRITICAL:** To generate the plan, first analyze `product.md`, `product-guidelines.md`, and `plan.md` to determine the user-facing goals of the completed phase.
    -   You **must** generate a step-by-step plan that walks the user through the verification process, including any necessary commands and specific, expected outcomes.
    -   The plan you present to the user **must** follow this format:

        **For a Frontend Change:**
        ```
        The automated type checks and build have passed. For manual verification, please follow these steps:

        **Manual Verification Steps:**
        1.  **Start the development server with the command:** `pnpm run dev`
        2.  **Open your browser to:** `http://localhost:4321`
        3.  **Confirm that you see:** The new user profile page, with the user's name and email displayed correctly.
        ```

5.  **Await Explicit User Feedback:**
    -   After presenting the detailed plan, ask the user for confirmation: "**Does this meet your expectations? Please confirm with yes or provide feedback on what needs to be changed.**"
    -   **PAUSE** and await the user's response. Do not proceed without an explicit yes or confirmation.

6.  **Create Checkpoint Commit:**
    -   Stage all changes. If no changes occurred in this step, proceed with an empty commit.
    -   Perform the commit with a clear and concise message (e.g., `conductor(checkpoint): Checkpoint end of Phase X`).

7.  **Attach Auditable Verification Report using Git Notes:**
    -   **Step 7.1: Draft Note Content:** Create a detailed verification report including the automated command, the manual verification steps, and the user's confirmation.
    -   **Step 7.2: Attach Note:** Use the `git notes` command and the full commit hash from the previous step to attach the full report to the checkpoint commit.

8.  **Get and Record Phase Checkpoint SHA:**
    -   **Step 8.1: Get Commit Hash:** Obtain the hash of the *just-created checkpoint commit* (`git log -1 --format="%H"`).
    -   **Step 8.2: Update Plan:** Read `plan.md`, find the heading for the completed phase, and append the first 7 characters of the commit hash in the format `[checkpoint: <sha>]`.
    -   **Step 8.3: Write Plan:** Write the updated content back to `plan.md`.

9. **Commit Plan Update:**
    - **Action:** Stage the modified `plan.md` file.
    - **Action:** Commit this change with a descriptive message following the format `conductor(plan): Mark phase '<PHASE NAME>' as complete`.

10.  **Announce Completion:** Inform the user that the phase is complete and the checkpoint has been created, with the detailed verification report attached as a git note.

### Quality Gates

Before marking any task complete, verify:

- [ ] `pnpm astro check` passes with 0 errors
- [ ] `pnpm run build` succeeds without errors
- [ ] Code follows project's code style guidelines (as defined in `code_styleguides/`)
- [ ] **All new code is in TypeScript**
- [ ] Manual verification performed and successful
- [ ] No linting or static analysis errors (using the project's configured tools)
- [ ] Works correctly on mobile (responsive design)
- [ ] Documentation updated if needed
- [ ] No security vulnerabilities introduced

## Development Commands

### Setup
```bash
pnpm install
```

### Daily Development
```bash
# Start dev server
pnpm run dev

# Run type checks
pnpm astro check
```

### Before Committing
```bash
# Verify everything
pnpm astro check && pnpm run build
```

## Code Review Process

### Self-Review Checklist
Before requesting review (or committing):

1. **Functionality**
   - Feature works as specified
   - Edge cases handled
   - Error messages are user-friendly

2. **Code Quality**
   - Follows style guide & TypeScript best practices
   - DRY principle applied
   - Clear variable/function names
   - Appropriate comments

3. **Verification**
   - Type check (`pnpm astro check`) passes
   - Build (`pnpm run build`) passes
   - Manual verification confirmed

4. **Visual & UX**
   - Matches "Developer/Hacker" aesthetic
   - Uses Catppuccin Mocha palette correctly
   - Typography is JetBrains Mono
   - Responsive on mobile

5. **Security**
   - No hardcoded secrets
   - Input validation present

## Commit Guidelines

### Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat(blog): Add markdown support for code blocks"
git commit -m "fix(nav): Fix mobile menu toggle on iOS"
git commit -m "style(theme): Update mauve accent color"
```

## Definition of Done

A task is complete when:

1. All code implemented to specification using TypeScript
2. `pnpm astro check` passes with 0 errors
3. `pnpm run build` succeeds without errors
4. Manual verification confirms functionality and design
5. Implementation notes added to `plan.md`
6. Changes committed with proper message
7. Git note with task summary attached to the commit

## Emergency Procedures

### Critical Bug in Production
1. Create hotfix branch from main
2. Implement minimal fix
3. Verify manually (including mobile)
4. Deploy immediately (git pull on server)
5. Document in plan.md

### Data Loss
1. Stop all write operations
2. Restore from latest backup
3. Verify data integrity
4. Document incident
5. Update backup procedures
