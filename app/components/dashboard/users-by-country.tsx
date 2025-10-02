import { mockCountryData, mockTotalUsers } from '@/constants/mock-data'
import PublicIcon from '@mui/icons-material/Public'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { chartsTooltipClasses } from '@mui/x-charts'
import { PieChart } from '@mui/x-charts/PieChart'
import * as FlagIcons from 'country-flag-icons/react/1x1'

export default function UsersByCountry() {
  const chartData = mockCountryData.map((item, index) => ({
    id: index,
    value: item.percentage,
    color: item.color,
    label: item.country
  }))

  const formattedTotal = (mockTotalUsers / 1000).toFixed(1) + 'K'

  // Helper function to render country flag
  const renderFlag = (countryCode?: string, country?: string) => {
    if (!countryCode) {
      return (
        <PublicIcon
          sx={{
            fontSize: '1.5rem',
            color: country === 'Other' ? '#4ade80' : 'text.secondary'
          }}
        />
      )
    }

    const FlagComponent = FlagIcons[countryCode as keyof typeof FlagIcons]

    if (!FlagComponent) {
      return (
        <PublicIcon
          sx={{
            fontSize: '1.5rem',
            color: country === 'Other' ? '#4ade80' : 'text.secondary'
          }}
        />
      )
    }

    return (
      <Box
        component={FlagComponent}
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
    )
  }

  return (
    <Box
      sx={{
        bgcolor: '#0b0e14',
        borderRadius: 2,
        p: 2,
        border: '1px solid var(--color-border)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        variant='subtitle1'
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          mb: 2,
          fontSize: '0.875rem'
        }}
      >
        Users by country
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          mb: 3
        }}
      >
        <PieChart
          series={[
            {
              data: chartData,
              innerRadius: 72,
              outerRadius: 96,
              paddingAngle: 0,
              cornerRadius: 0,
              cx: 100,
              cy: 100,
              highlightScope: { fade: 'global', highlight: 'item' },
              valueFormatter: (item) => {
                const actualValue = Math.round((mockTotalUsers * item.value) / 100)
                return actualValue.toLocaleString('en-US', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3
                })
              }
            }
          ]}
          width={200}
          height={200}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
          slotProps={{
            tooltip: {
              trigger: 'item',
              sx: {
                [`& .${chartsTooltipClasses.table}`]: {
                  borderSpacing: 0
                },
                [`& .${chartsTooltipClasses.mark}`]: {
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  marginRight: '10px'
                },
                [`& .${chartsTooltipClasses.cell}`]: {
                  padding: 0,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#f5f6fa'
                },
                [`& .${chartsTooltipClasses.labelCell}`]: {
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  paddingRight: '12px'
                },
                [`& .${chartsTooltipClasses.valueCell}`]: {
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textAlign: 'right'
                }
              }
            }
          }}
          sx={{
            '& .MuiPieArc-root': {
              strokeWidth: 0
            },
            '& .MuiChartsLegend-root': {
              display: 'none'
            }
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none'
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '1.75rem',
              lineHeight: 1.2
            }}
          >
            {formattedTotal}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
              mt: 0.25
            }}
          >
            Total
          </Typography>
        </Box>
      </Box>

      <Stack spacing={1.5}>
        {mockCountryData.map((item) => (
          <Box key={item.id}>
            <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ mb: 0.75 }}>
              <Stack direction='row' alignItems='center' gap={1}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    flexShrink: 0,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    overflow: 'hidden'
                  }}
                >
                  {renderFlag(item.countryCode, item.country)}
                </Box>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.primary',
                    fontSize: '0.875rem',
                    fontWeight: 400
                  }}
                >
                  {item.country}
                </Typography>
              </Stack>
              <Typography
                variant='body2'
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              >
                {item.percentage}%
              </Typography>
            </Stack>
            <LinearProgress
              variant='determinate'
              value={item.percentage}
              sx={{
                height: 6,
                borderRadius: 999,
                bgcolor: 'rgba(120, 136, 165, 0.15)',
                '& .MuiLinearProgress-bar': {
                  bgcolor: item.color,
                  borderRadius: 999
                }
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
