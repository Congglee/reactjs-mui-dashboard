import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function CalloutCard() {
  return (
    <Paper
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid var(--color-border)',
        borderRadius: 1.5,
        bgcolor: 'background.paper'
      }}
    >
      <Stack direction='row' alignItems='center' flexWrap='wrap' gap={1.25}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: 1.25,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(77,166,255,0.15)',
            color: 'info.main'
          }}
        >
          <AutoAwesomeIcon sx={{ fontSize: 18 }} />
        </Box>
        <Typography variant='subtitle1' sx={{ fontSize: '0.875rem', fontWeight: 700 }}>
          Explore your data
        </Typography>
      </Stack>
      <Typography variant='body2' color='text.secondary' sx={{ my: 1.25 }}>
        Uncover performance and visitor insights with our data wizardry.
      </Typography>
      <Button
        variant='outlined'
        endIcon={<ChevronRightIcon />}
        sx={{
          alignSelf: 'flex-start',
          textTransform: 'none',
          borderRadius: 1.25,
          borderColor: 'var(--color-border)',
          color: 'text.primary',
          bgcolor: 'var(--color-sidebar-bg)',
          '&:hover': { borderColor: 'divider', bgcolor: 'rgba(255,255,255,0.04)' }
        }}
      >
        Get insights
      </Button>
    </Paper>
  )
}
