import NavItem from '@/components/nav-item'
import { SIDEBAR_WIDTH } from '@/theme'
import { alpha, useTheme } from '@mui/material/styles'
import { useAppContext } from '@/providers/app-provider'
import AnalyticsIcon from '@/components/icons/analytics-icon'
import HelpIcon from '@/components/icons/help-icon'
import HomeIcon from '@/components/icons/home-icon'
import InfoIcon from '@/components/icons/info-icon'
import SettingsIcon from '@/components/icons/settings-icon'
import TasksIcon from '@/components/icons/tasks-icon'
import UsersIcon from '@/components/icons/users-icon'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'

interface SidebarProps {
  width?: number
}

export default function Sidebar({ width = SIDEBAR_WIDTH }: SidebarProps) {
  const theme = useTheme()
  const isSm = useMediaQuery('(max-width:600px)')
  const { sidebarOpen, setSidebarOpen } = useAppContext()

  return (
    <Drawer
      variant={isSm ? 'temporary' : 'persistent'}
      anchor='left'
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          bgcolor: 'var(--color-sidebar-bg)',
          color: 'text.primary',
          backgroundImage: 'none',
          boxShadow: 'none'
        }
      }}
      slotProps={{
        transition: {
          appear: false,
          easing: { enter: theme.transitions.easing.easeOut, exit: theme.transitions.easing.sharp },
          timeout: {
            enter: theme.transitions.duration.enteringScreen,
            exit: Math.min(120, theme.transitions.duration.leavingScreen)
          }
        },
        backdrop: {
          sx: {
            backgroundColor: (theme) => alpha(theme.palette.background.default, 0.72)
          }
        },
        paper: {
          component: 'aside',
          elevation: 0,
          square: true,
          sx: {
            width,
            bgcolor: 'var(--color-sidebar-bg)',
            color: 'text.primary',
            backgroundImage: 'none',
            borderRight: '1px solid var(--color-border)',
            boxSizing: 'border-box',
            px: 2,
            py: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100dvh',
            overflow: 'hidden',
            boxShadow: 'none',
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }
        }
      }}
      ModalProps={{ keepMounted: true }}
    >
      <Box
        aria-label='Application brand'
        sx={{
          mx: -2,
          px: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
          height: 64,
          flexShrink: 0,
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: 1.5,
            p: '2px',
            background: 'linear-gradient(135deg, #027AF2 0%, #0059B3 100%)',
            boxShadow: (theme) =>
              theme.palette.mode === 'dark' ? '0 6px 18px rgba(0,0,0,0.35)' : '0 6px 18px rgba(0,0,0,0.10)'
          }}
        >
          <Box
            component='img'
            src='/favicon.ico'
            alt='App logo'
            sx={{
              width: '100%',
              height: '100%',
              display: 'block',
              borderRadius: 1.25,
              objectFit: 'cover',
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#0b0e14' : '#ffffff')
            }}
          />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant='subtitle1'
            title='Sitemark'
            color='text.primary'
            sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            Sitemark
          </Typography>
          <Typography variant='caption' color='text.secondary' sx={{ display: { xs: 'none', sm: 'block' } }}>
            Dashboard
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          minHeight: 0,
          minWidth: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          mr: -2,
          pr: 2
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <NavItem icon={HomeIcon} label='Home' active />
          <NavItem icon={AnalyticsIcon} label='Analytics' />
          <NavItem icon={UsersIcon} label='Clients' />
          <NavItem icon={TasksIcon} label='Tasks' />
        </Box>

        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <NavItem icon={SettingsIcon} label='Settings' />
          <NavItem icon={InfoIcon} label='About' />
          <NavItem icon={HelpIcon} label='Feedback' />

          <Box
            aria-label='Plan renew promotion'
            sx={{
              p: 2,
              mt: 1.5,
              border: '1px solid var(--color-border)',
              borderRadius: 1.5,
              bgcolor: 'background.paper',
              boxShadow: (theme) =>
                theme.palette.mode === 'dark' ? '0 2px 14px rgba(0,0,0,0.25)' : '0 2px 14px rgba(0,0,0,0.06)'
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: 1.25,
                bgcolor: 'rgba(77,166,255,0.15)',
                color: 'info.main',
                mb: 1
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 18 }} />
            </Box>

            <Typography variant='subtitle2' sx={{ fontWeight: 600, mb: 0.5 }}>
              Plan about to expire
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 1.25 }}>
              Enjoy 10% off when renewing your plan today.
            </Typography>

            <Button
              fullWidth
              variant='contained'
              disableElevation
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 1.25,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#e7ecf2' : '#f5f7fb'),
                color: '#0b0e14',
                '&:hover': {
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#eef2f6' : '#eef1f6')
                }
              }}
            >
              Get the discount
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ pt: 1.5, pb: 2, mx: -2, px: 2, borderTop: '1px solid var(--color-border)' }}>
        <Box
          sx={{
            p: 1.25,
            border: '1px solid var(--color-border)',
            borderRadius: 1.5,
            bgcolor: 'var(--color-sidebar-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1.25
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, minWidth: 0 }}>
            <Avatar
              alt='Riley Carter'
              src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&fit=crop&crop=faces&w=160&h=160&auto=format'
              sx={{ width: 40, height: 40 }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography variant='subtitle2' sx={{ fontWeight: 600, lineHeight: 1.2 }} noWrap>
                Riley Carter
              </Typography>
              <Typography variant='body2' color='text.secondary' noWrap>
                riley@email.com
              </Typography>
            </Box>
          </Box>
          <IconButton
            aria-label='profile options'
            size='small'
            sx={{
              width: 36,
              height: 36,
              borderRadius: 1.25,
              border: '1px solid var(--color-border)',
              color: 'text.secondary',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.04)' }
            }}
          >
            <MoreVertIcon fontSize='small' />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  )
}
