# Project overview

This is a **React 19 + Material-UI v7 + React Router v7 (Framework Mode)** dashboard application with server-side rendering (SSR).

**Architecture:**

- **Frontend**: React 19 with TypeScript (strict mode)
- **UI Framework**: Material-UI v7 (with MUI X components: DataGrid, Charts, DatePickers, TreeView)
- **Routing**: React Router v7 in Framework Mode (SSR-enabled, file-based routing)
- **Bundler**: Vite 6
- **Server**: Node.js SSR server (`@react-router/serve`)
- **Styling**: Material-UI theming system (no TailwindCSS)

**Main components:**

- `app/components/dashboard/` - Dashboard UI components (metrics, charts, tables, product tree, users by country)
- `app/components/icons/` - Custom navigation icons using MUI SvgIcon
- `app/layouts/` - Layout wrappers (dashboard layout with sidebar and navbar)
- `app/routes/` - File-based routes (React Router v7 convention)
- `app/providers/` - Global providers (theme, app context)
- `app/constants/` - Mock data and constants
- `app/theme.ts` - Material-UI theme configuration

## Import and Naming Policy (Absolute alias '@/')

This rule standardizes how modules are imported and how component/page files are named across the codebase.

### Absolute imports (required)

- All internal imports must use the absolute alias starting with `@/`.
- Do not use any relative import paths like `./`, `../`, or `../../` for app code.

Examples:

```ts
// ✅ Do
import NavItem from '@/components/dashboard/nav-item'
import AnalyticsIcon from '@/components/icons/analytics-icon'

// ❌ Don't
import NavItem from '../../components/dashboard/nav-item'
import AnalyticsIcon from '../icons/analytics-icon'
```

### File naming for components and pages (kebab-case)

- Component and page filenames must be in kebab-case: lowercase words separated by hyphens.
- Examples of valid names: `nav-item.tsx`, `help-icon.tsx`, `user-settings.tsx`.
- Avoid PascalCase or camelCase filenames for these files.

```text
✅ Allowed:  nav-item.tsx, help-icon.tsx, users-list.tsx
❌ Avoid:    NavItem.tsx, HelpIcon.tsx, navItem.tsx
```

### Consistency requirements

- When creating or modifying files, ensure import paths and filenames follow this policy.
- If you touch a file that uses relative imports, convert them to `@/` within the same edit.
- Keep import paths stable and avoid deep relative traversals entirely.

### Project configuration for the '@/" alias

Ensure the alias is configured in both TypeScript and Vite so editors and builds resolve `@/` correctly.

- TypeScript: update [tsconfig.json](tsconfig.json)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["app/*"]
    }
  }
}
```

- Vite: update [vite.config.ts](vite.config.ts)

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app', import.meta.url))
    }
  }
})
```

Following this rule keeps imports consistent, readable, and refactor-friendly across the entire codebase.

---

## Material‑UI v7 UI Policy (REQUIRED)

These rules apply to all React/TypeScript files in this project. The Cursor Agent must strictly follow them when building the UI.

### Version and documentation

- This project uses Material‑UI v7. Reference: [Upgrade to v7](https://mui.com/material-ui/migration/upgrade-to-v7/).
- Use the MUI MCP Server whenever help is needed: [Getting started with MCP](https://mui.com/material-ui/getting-started/mcp/).

### UI library usage

- The entire UI (components, icons, theme, spacing, typography, etc.) must use Material‑UI only.
- Do not add or use any third‑party UI libraries.

### Imports (Tree‑shaking) — Required

- Always import specific components/icons to optimize bundle size. Correct examples:

```tsx
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import AlarmIcon from '@mui/icons-material/Alarm'
```

- Do not use deep imports beyond one level (wrong: `@mui/material/styles/createTheme`).
- Do not use modern/esm aliases removed in v7 (e.g., `@mui/material/modern`), or Vite aliases that force ESM for icons.
- Import theming APIs only from `@mui/material/styles`, e.g.:

```tsx
import { ThemeProvider, createTheme } from '@mui/material/styles'
```

### Icon rules

- Prefer icons from `@mui/icons-material`.
- Only if no suitable icon exists, create a custom icon using `SvgIcon` and ensure it inherits MUI color/size/theme props:

```tsx
import SvgIcon from '@mui/material/SvgIcon'

function CustomIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path d='M...' />
    </SvgIcon>
  )
}
```

### Theming and styling

- Standardize theming via Material‑UI: use `ThemeProvider`, `createTheme`, `sx`, `styled`, `useTheme`, and system props.
- Prefer the `sx` prop for all component‑level styling. Use `styled` only to create global, reusable components shared across multiple pages/routes. This keeps the codebase consistent, maintainable, and leverages MUI optimizations.
- Do not use `experimentalStyled` (removed in v7). Use `styled` from `@mui/material/styles`.
- When multiple color schemes are enabled, prefer CSS variables via `theme.vars.*`. If runtime light/dark calculations are needed, apply `theme.applyStyles` accordingly.
- Import `StyledEngineProvider` from `@mui/material/styles` (do not import from `@mui/material`).

### Dark mode handling and SSR flicker (REQUIRED)

- This app previously experienced "dark mode flicker" on SSR. Follow MUI's official guidance to prevent it: use CSS variables and the initialization script. References: https://mui.com/material-ui/customization/dark-mode/#dark-mode-flicker and https://mui.com/material-ui/customization/css-theme-variables/configuration/#preventing-ssr-flickering
- Do not check `theme.palette.mode` to branch styles or logic. Avoid patterns like `theme.palette.mode === 'dark'` or ternaries based on `theme.palette.mode`.
- Required: Use `theme.applyStyles()` to target specific modes. Prefer CSS variables via `colorSchemes` and initialize mode on the server to avoid flicker. Reference: https://mui.com/material-ui/customization/dark-mode/#styling-in-dark-mode

#### Allowed patterns

```tsx
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// Using styled
const Panel = styled('div')(({ theme }) => [
  { backgroundColor: theme.palette.background.paper },
  theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[900]
  })
])

// Using sx
function Example() {
  return (
    <Box
      sx={[
        (theme) => ({ color: theme.palette.text.primary }),
        (theme) =>
          theme.applyStyles('dark', {
            color: theme.palette.secondary.main
          })
      ]}
    />
  )
}
```

#### Disallowed patterns (must migrate)

```tsx
// Any direct mode checks are disallowed
const color = theme.palette.mode === 'dark' ? '#fff' : '#000'
const styles = {
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#ffffff'
}
```

#### SSR anti-flicker basics

```tsx
import { InitColorSchemeScript, ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    dark: true // enable built-in dark scheme
  }
})

// In your document/root HTML
// <InitColorSchemeScript defaultMode="system" />

// In your app
// <ThemeProvider theme={theme} defaultMode="system" disableTransitionOnChange>
```

- Enforcement: If any code uses `theme.palette.mode` (e.g., equality checks, ternaries, or logical branching), raise a warning and propose a concrete refactor using `theme.applyStyles()` as shown above.

### React 18 and below compatibility

- If the project uses React 18 or below, align `react-is` with the React version to avoid runtime issues (see the v7 guide).

### Mandatory MCP usage for MUI issues

- For any MUI‑related question, migration, API uncertainty, or error, proactively use the MUI MCP Server to search, debug, or resolve before asking the user.

### Do / Don’t checklist

- Do: Tree‑shake imports from `@mui/material/<Component>` and `@mui/icons-material/<Icon>`.
- Do: Use `@mui/material/styles` for theming and type augmentation.
- Don’t: Deep import nested paths within MUI packages.
- Don’t: Add or use any non‑MUI UI libraries.
- Don’t: Import `StyledEngineProvider` from `@mui/material`.

### Grid — Material‑UI v7 (current API)

- Import the stable component:

```tsx
import Grid from '@mui/material/Grid'
```

### Key changes in v7:

- The sizing props `xs`/`sm`/`md`/`lg`/`xl` were replaced by a single `size` prop.
- The `item` prop is no longer used. A `Grid` is always an item; use `container` to turn it into a container.
- Use `spacing`, `rowSpacing`, and `columnSpacing` for gaps; use `columns` to change the 12‑column default; use `offset` to push items.
- Prefer `Stack` inside a `Grid` for vertical stacking; `direction="column"` on `Grid` is not supported.

### Basic usage:

```tsx
<Grid container spacing={2}>
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    {/* Item A */}
  </Grid>
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    {/* Item B */}
  </Grid>
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    {/* Item C */}
  </Grid>
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    {/* Item D */}
  </Grid>
  {/* Nested grids are allowed */}
  <Grid container size={12} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid size={6}>{/* Nested 1 */}</Grid>
    <Grid size={6}>{/* Nested 2 */}</Grid>
  </Grid>
```

### Columns and offset:

```tsx
<Grid container spacing={2} columns={16}>
  <Grid size={8}>{/* 8/16 */}</Grid>
  <Grid size={8}>{/* 8/16 */}</Grid>
</Grid>

<Grid container spacing={3}>
  <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }} />
  <Grid size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }} />
</Grid>
```

### Migration from pre‑v7:

```tsx
// Before (v5/v6 style)
<Grid container spacing={2}>
  <Grid item xs={12} md={6}>...</Grid>
</Grid>

// After (v7)
<Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 6 }}>...</Grid>
</Grid>
```

### Docs: see MUI Grid v7 usage and API at https://mui.com/material-ui/react-grid/

### References:

- MUI v7 Upgrade Guide: https://mui.com/material-ui/migration/upgrade-to-v7/
- MUI MCP Server: https://mui.com/material-ui/getting-started/mcp/

---

## React Router v7 Framework Mode — Research-First Policy

When handling anything related to React Router V7 in "Framework Mode" in this repository, follow a research-first workflow to ensure instructions and code changes are based on the latest authoritative information.

- **Scope (when to apply)**: Any question, bug, migration, refactor, or feature involving React Router v7 or the term "Framework Mode".

- **Primary sources to use (in order)**:
  1. Context7 MCP Server: Resolve and fetch the latest official React Router documentation.
  2. Web research: If Context7 is unavailable or insufficient, search authoritative sources and cite them.
  3. Local notes in this repo: Cross-check conclusions with internal docs.

### Required Workflow

1. Use Context7 MCP

- Resolve the library ID for React Router (e.g., by querying "react-router" or "remix-run/react-router").
- Fetch docs focused on: "Framework Mode", "v7", "file-based routing", "data APIs", "loaders", "actions", "defer", "streaming", and "migration".
- Prefer official docs, release notes, and RFCs.

2. Fall back to Web Research

- If Context7 lacks coverage or seems outdated, perform web research.
- Prefer official docs and primary sources. Include short citations in responses when external info is used.

3. Validate Code Touchpoints in This Repo

- Router config: [react-router.config.ts](mdc:react-router.config.ts)
- Root app shell: [app/root.tsx](mdc:app/root.tsx)
- Routing helpers/registry (if used): [app/routes.ts](mdc:app/routes.ts)
- Route files (file-based routing): [app/routes](mdc:app/routes)
- Example layout file: [app/routes/dashboard/layout.tsx](mdc:app/routes/dashboard/layout.tsx)

### Guidance for Agents

- Always verify API names and patterns against the latest docs before editing.
- Prefer v7-endorsed patterns; call out any migrations or breaking changes in notes.
- When answering, provide concise citations/links for any external information used.
- Only proceed with edits after confirming the approach via Context7 or current web sources.

### Quick Workflow Snippet

- "Topic touches React Router v7 Framework Mode → fetch latest docs via Context7; if needed, do web research and cite. Then implement or adjust in `react-router.config.ts` and relevant `app/routes/**` files according to findings."
