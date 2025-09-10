import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif'
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  palette: {
    mode: 'dark',
    primary: { main: '#027af2', light: '#4da6ff', dark: '#0059b3' },
    secondary: { main: '#3ee07f' },
    error: { main: '#e31d1c' },
    warning: { main: '#ff8c1a' },
    info: { main: '#4da6ff' },
    success: { main: '#5eaa22' },
    background: {
      default: '#0c1017',
      paper: '#101318'
    },
    divider: '#333c4d99',
    text: {
      primary: '#f5f6fa',
      secondary: '#94a0b8',
      disabled: '#8c8c8c'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--color-bg': '#0c1017',
          '--color-surface': '#101318',
          '--color-sidebar-bg': '#0b0e14',
          '--color-navbar-bg': '#0b0e14',
          '--color-border': '#333c4d'
        }
      }
    }
  }
})

export default theme
