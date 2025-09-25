import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import type { ElementType } from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'

export interface NavItemProps {
  label: string
  icon: ElementType<SvgIconProps>
  active?: boolean
}

export default function NavItem({ label, icon: Icon, active = false }: NavItemProps) {
  return (
    <ButtonBase
      focusRipple
      sx={{
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: 1.5,
        px: 1,
        py: 0.75,
        gap: 1,
        color: active ? (theme) => (theme.palette.mode === 'dark' ? '#f5f6fa' : '#101318') : '#94a0b8',
        bgcolor: active ? (theme) => (theme.palette.mode === 'dark' ? '#333c4d' : '#f5f6fa') : 'transparent',
        '&:hover': {
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333c4d99' : '#f5f6fa')
        },
        transition: 'background-color .2s ease, color .2s ease'
      }}
    >
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: 1,
          display: 'grid',
          placeItems: 'center',
          background: active ? 'linear-gradient(135deg, #027af2 0%, #0059b3 100%)' : 'transparent'
        }}
      >
        <Icon sx={{ fontSize: 18, color: active ? '#ffffff' : '#94a0b8' }} />
      </Box>
      <Typography variant='body2' sx={{ fontWeight: active ? 600 : 500, lineHeight: 1.2, letterSpacing: 0.2 }}>
        {label}
      </Typography>
    </ButtonBase>
  )
}
