## Brief overview

- Project-specific rules to standardize import paths and file/directory naming for all local code (components, routes/pages, utils, hooks, context).
- Objectives:
  - Use absolute imports rooted at app/ (no relative ../ or ./).
  - Use kebab-case for all component and page filenames and their directories.
  - Ensure consistency across the entire codebase.

## Import path conventions

- Always use absolute paths that resolve from app/.
- Never use relative paths like ../, ./, or ../../ for local modules.
- Valid examples:
  - Components
    ```
    import NavItem from 'components/dashboard/nav-item'
    import AnalyticsIcon from 'components/icons/analytics-icon'
    import HelpIcon from 'components/icons/help-icon'
    ```
  - Routes/pages and other local modules
    ```
    import DashboardLayout from 'routes/dashboard/layout'
    import formatDate from 'utils/format-date'
    import useAuth from 'hooks/use-auth'
    import AuthProvider from 'context/auth-provider'
    ```
- Invalid examples (do not use):
  ```
  import NavItem from '../../components/dashboard/nav-item'
  import UsersIcon from './users-icon'
  import AnalyticsIcon from '../icons/AnalyticsIcon'
  import Something from '@/components/...'
  ```
- External packages (e.g., @mui/material) are unaffected.

## File and directory naming conventions

- Use kebab-case for all components, pages, and their directories.
- Valid file examples:
  ```
  app/components/dashboard/nav-item.tsx
  app/components/icons/analytics-icon.tsx
  app/routes/dashboard/index.tsx
  app/routes/dashboard/layout.tsx
  ```
- Valid directory examples:
  ```
  app/components/dashboard/
  app/components/icons/
  app/routes/dashboard/
  ```
- Invalid examples:
  ```
  app/components/dashboard/NavItem.tsx
  app/components/icons/AnalyticsIcon.tsx
  app/components/icons/users_icon.tsx
  app/Components/icons/users-icon.tsx
  ```
- Extensions:
  - Use .tsx for React components and pages.
  - Support files should also follow kebab-case (e.g., nav-item.styles.ts, format-date.ts).

## Project configuration expectations (to enable absolute imports)

- Goal: Make import sources like 'components/...', 'routes/...', 'utils/...', 'hooks/...', 'context/...' resolve from app/.
- Recommended for this project:
  - TypeScript: add explicit path mappings while keeping baseUrl at repository root.
  - Vite: rely on vite-tsconfig-paths to mirror tsconfig paths.

- TypeScript: add these entries to compilerOptions.paths in [tsconfig.json](tsconfig.json):
  ```
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "components/*": ["app/components/*"],
        "routes/*": ["app/routes/*"],
        "utils/*": ["app/utils/*"],
        "hooks/*": ["app/hooks/*"],
        "context/*": ["app/context/*"]
      }
    }
  }
  ```

  - Note: The project currently has "@/\*" mapped to "app/\*". Do not use '@/...' for new code. Keep it temporarily only to avoid breaking legacy imports during migration.
- Vite: the project uses vite-tsconfig-paths, so tsconfig paths will be honored automatically. No additional aliases are required in [vite.config.ts](vite.config.ts).

- Alternative (only if the team prefers baseUrl at app):
  - Set "baseUrl": "app" and omit paths. Ensure all tooling (including tests and language server) is compatible. With vite-tsconfig-paths, this typically works, but the explicit paths above are clearer and safer.

## Linting and enforcement

- Enforce absolute imports and forbid relative parent imports.
- ESLint suggestion:
  - Add eslint-plugin-import and enable the following rule:
    ```
    'import/no-relative-parent-imports': 'error'
    ```
  - Optionally add a custom restriction to disallow '@/...' in local imports to encourage 'components/...', 'routes/...', etc.
- Code review checklist:
  - No ../ or ./ for local imports.
  - All new/modified local imports use absolute paths from app/ root.
  - All new files and directories are kebab-case.
  - Import source strings match kebab-case file locations.

## Migration and consistency

- Converting relative to absolute:
  - Identify the logical root (app/).
  - Replace relative sequences (../, ./) with the appropriate absolute segment.
  - Example:
    - Before: `import NavItem from '../../components/dashboard/nav-item'`
    - After: `import NavItem from 'components/dashboard/nav-item'`
- Renaming to kebab-case:
  - Rename files/directories to kebab-case.
  - Update import statements accordingly.
  - Verify with TypeScript and ESLint that there are no broken imports.
- Phasing out '@/...':
  - Keep existing '@/' imports working during transition.
  - Do not introduce new '@/...' imports.
  - Convert legacy '@/' imports to app-root absolute imports over time.

## Examples from this repository

- Existing valid files (kebab-case):
  ```
  app/components/dashboard/nav-item.tsx
  app/components/icons/analytics-icon.tsx
  app/components/icons/help-icon.tsx
  app/components/icons/home-icon.tsx
  app/components/icons/info-icon.tsx
  app/components/icons/settings-icon.tsx
  app/components/icons/tasks-icon.tsx
  app/components/icons/users-icon.tsx
  app/routes/dashboard/index.tsx
  app/routes/dashboard/layout.tsx
  ```
- Example of valid usage in practice:
  ```
  import NavItem from 'components/dashboard/nav-item'
  import UsersIcon from 'components/icons/users-icon'
  ```

## Scope and exceptions

- Scope: All local modules in this repository (components, routes/pages, utils, hooks, context, etc.).
- Exceptions:
  - Third-party package imports are not affected.
  - If a legacy area cannot be refactored immediately, add a TODO comment and a tracking issue. Do not introduce new violations.

## Definition of done

- New/updated code must:
  - Use absolute imports rooted at app/ with the approved segments.
  - Use kebab-case filenames and directories for components/pages.
  - Pass lint checks that disallow relative parent imports.
  - Undergo code review explicitly verifying the checklist above.
