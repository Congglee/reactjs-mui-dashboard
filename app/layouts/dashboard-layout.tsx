import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import { SIDEBAR_WIDTH } from '@/theme'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Outlet } from 'react-router'
import { useAppContext } from '@/providers/app-provider'

export default function DashboardLayout() {
  const { sidebarOpen } = useAppContext()
  const isSm = useMediaQuery('(max-width:600px)')

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100dvh',
        bgcolor: 'var(--color-bg)',
        overflow: 'hidden'
      }}
    >
      <Sidebar width={SIDEBAR_WIDTH} />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          minHeight: 0,
          ml: sidebarOpen && !isSm ? `${SIDEBAR_WIDTH}px` : 0,
          transition: (theme) =>
            theme.transitions.create('margin-left', {
              easing: sidebarOpen ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
              duration: sidebarOpen
                ? theme.transitions.duration.enteringScreen
                : theme.transitions.duration.leavingScreen
            }),
          willChange: 'margin-left'
        }}
      >
        <Navbar />
        <Box
          component='main'
          sx={{
            flex: 1,
            px: 2.5,
            pt: 2,
            pb: 4,
            color: 'text.primary',
            overflow: 'auto',
            minHeight: 0
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
