import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Navbar() {
  return (
    <Box
      component='header'
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        height: 64,
        bgcolor: 'var(--color-navbar-bg)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        px: 2
      }}
    >
      <Typography variant='subtitle1' color='text.primary'>
        Dashboard
      </Typography>
    </Box>
  )
}
