import Navbar from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'
import Box from '@mui/material/Box'

const SIDEBAR_WIDTH = 260

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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
          minWidth: 0, // fix for flex overflow
          minHeight: 0
        }}
      >
        <Navbar />
        <Box
          component='main'
          sx={{
            flex: 1,
            p: 2,
            color: 'text.primary',
            overflow: 'auto',
            minHeight: 0
            // Surfaces match screenshot: cards would sit on a slightly raised paper
            // but here we only provide structural container
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
