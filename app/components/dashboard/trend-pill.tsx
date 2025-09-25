import Chip from '@mui/material/Chip'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import type { Trend } from '@/types/trend'

interface TrendPillProps {
  trend: Trend
}

export default function TrendPill({ trend }: TrendPillProps) {
  const isUp = trend.direction === 'up'

  return (
    <Chip
      size='small'
      label={`${isUp ? '+' : ''}${trend.value}%`}
      icon={isUp ? <TrendingUpIcon /> : <TrendingDownIcon />}
      sx={{
        height: 24,
        px: 0.5,
        borderRadius: 1.25,
        fontWeight: 700,
        '& .MuiChip-icon': {
          fontSize: 16
        },
        ...(isUp
          ? { bgcolor: 'rgba(94,170,34,0.15)', color: 'success.main' }
          : { bgcolor: 'rgba(227,29,28,0.15)', color: 'error.main' })
      }}
    />
  )
}
