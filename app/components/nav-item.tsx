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
        color: active ? 'text.primary' : 'text.secondary',
        bgcolor: active ? 'var(--color-selected)' : 'transparent',
        '&:hover': {
          bgcolor: active ? 'var(--color-selected)' : 'var(--color-hover)'
        },
        transition: 'background-color .2s ease, color .2s ease'
      }}
    >
      <Box
        sx={[
          {
            width: 28,
            height: 28,
            borderRadius: 1,
            display: 'grid',
            placeItems: 'center',
            background: active ? 'linear-gradient(135deg, #027af2 0%, #0059b3 100%)' : 'transparent'
          },
          (theme) =>
            active
              ? theme.applyStyles('dark', {
                  background: 'linear-gradient(135deg, #4da6ff 0%, #2a8fff 100%)'
                })
              : {}
        ]}
      >
        <Icon
          sx={{
            fontSize: 18,
            color: active ? '#ffffff' : 'text.disabled'
          }}
        />
      </Box>
      <Typography variant='body2' sx={{ fontWeight: active ? 600 : 500, lineHeight: 1.2, letterSpacing: 0.2 }}>
        {label}
      </Typography>
    </ButtonBase>
  )
}
