import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif'
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  }
})

export default theme
