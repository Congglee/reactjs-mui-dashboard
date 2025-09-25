import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export interface BreadcrumbItem {
  label: string
  current?: boolean
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[]
}

export default function PageHeader({ breadcrumbs }: PageHeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        minHeight: 48,
        pb: 1
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Breadcrumbs
          aria-label='breadcrumb'
          separator='›'
          sx={{
            '& .MuiBreadcrumbs-separator': { color: 'text.secondary' }
          }}
        >
          {breadcrumbs.map((item, index) => (
            <Typography
              key={`${item.label}-${index}`}
              variant={item.current ? 'subtitle2' : 'body2'}
              sx={{
                fontWeight: item.current ? 700 : 500,
                color: item.current ? 'text.primary' : 'info.light'
              }}
              noWrap
            >
              {item.label}
            </Typography>
          ))}
        </Breadcrumbs>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
        <Button
          variant='outlined'
          size='small'
          startIcon={<CalendarMonthIcon sx={{ fontSize: 18 }} />}
          sx={{
            px: 1.25,
            height: 36,
            minHeight: 36,
            textTransform: 'none',
            borderRadius: 1.25,
            borderColor: 'var(--color-border)',
            color: 'text.primary',
            bgcolor: 'var(--color-sidebar-bg)',
            '&:hover': {
              borderColor: 'divider',
              bgcolor: 'rgba(255,255,255,0.04)'
            }
          }}
        >
          Apr 17, 2023
        </Button>
      </Box>
    </Box>
  )
}
