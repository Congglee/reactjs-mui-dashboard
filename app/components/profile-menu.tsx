import LogoutIcon from '@mui/icons-material/Logout'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Divider from '@mui/material/Divider'
import Grow from '@mui/material/Grow'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'

export default function ProfileMenu() {
  const theme = useTheme()

  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null)

  const isProfileMenuOpen = Boolean(profileMenuAnchorEl)

  const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget)
  }

  const handleCloseProfileMenu = () => {
    setProfileMenuAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id='profile-options-button'
        aria-label='profile options'
        size='small'
        aria-haspopup='menu'
        aria-controls={isProfileMenuOpen ? 'profile-options-menu' : undefined}
        aria-expanded={isProfileMenuOpen ? 'true' : undefined}
        onClick={handleOpenProfileMenu}
        sx={{
          width: 36,
          height: 36,
          borderRadius: 1.25,
          border: '1px solid var(--color-border)',
          color: 'text.secondary',
          '&:hover': {
            bgcolor: 'var(--color-hover)'
          }
        }}
      >
        <MoreVertIcon fontSize='small' />
      </IconButton>

      <Menu
        id='profile-options-menu'
        anchorEl={profileMenuAnchorEl}
        open={isProfileMenuOpen}
        onClose={handleCloseProfileMenu}
        slots={{ transition: Grow }}
        transitionDuration={{
          enter: theme.transitions.duration.shorter,
          exit: theme.transitions.duration.shortest
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: [
              {
                minWidth: 200,
                mt: 1,
                borderRadius: 1.5,
                border: '1px solid var(--color-border)',
                bgcolor: 'var(--color-card-elevated)',
                color: 'text.primary',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)'
              },
              (theme) =>
                theme.applyStyles('dark', {
                  boxShadow: '0 16px 40px rgba(0,0,0,0.5)'
                })
            ]
          },
          list: {
            'aria-labelledby': 'profile-options-button',
            dense: false,
            sx: {
              py: 0.5,
              '& .MuiMenuItem-root': {
                typography: 'body2'
              }
            }
          }
        }}
      >
        <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseProfileMenu}>My account</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleCloseProfileMenu}>Add another account</MenuItem>
        <MenuItem onClick={handleCloseProfileMenu}>Settings</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={handleCloseProfileMenu}
          sx={{ color: 'text.primary', display: 'flex', justifyContent: 'space-between', gap: 1 }}
        >
          Logout
          <ListItemIcon
            sx={{
              color: 'text.secondary',
              '&.MuiListItemIcon-root': {
                minWidth: 20
              }
            }}
          >
            <LogoutIcon fontSize='small' />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  )
}
