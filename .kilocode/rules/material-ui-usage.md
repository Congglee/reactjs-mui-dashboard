## Brief overview

- These rules define how to use Material-UI (MUI) for UI development in this project.
- The goal is to ensure consistency, performance, and maintainability.

## Versioning and Tooling

- The project uses Material-UI v7.
- The `mui` MCP Server is installed and should be used to resolve any issues, errors, or questions related to Material-UI.

## Component and Style Implementation

- All UI components and styling must be implemented exclusively with Material-UI.
- Do not use any other third-party UI libraries for the interface.
- This includes using MUI components, icons, themes, spacing, and typography.

## Import Strategy

- Always use tree-shaking imports for MUI components and icons to optimize the bundle size.
- **Valid example:**
  ```tsx
  import Stack from '@mui/material/Stack'
  import Button from '@mui/material/Button'
  import DeleteIcon from '@mui/icons-material/Delete'
  ```

## Icon Usage

- Prioritize using icons from the `@mui/icons-material` package.
- If a suitable icon is not available, create a custom icon using the `SvgIcon` component from `@mui/material/SvgIcon`.
- Custom icons must inherit color, size, and theme properties from the MUI theme.

## Styling Approach

- Prefer the `sx` prop for component-specific styling in most cases.
- Use the `styled` API only for creating global, reusable components that are shared across multiple pages or routes.
