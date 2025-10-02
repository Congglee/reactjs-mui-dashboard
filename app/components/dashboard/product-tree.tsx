import TreeItem from '@/components/dashboard/tree-item'
import { mockTreeData } from '@/constants/mock-data'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export default function ProductTree() {
  const [selectedId, setSelectedId] = useState('home')
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['website']))

  const handleToggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev)

      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }

      return newSet
    })
  }

  return (
    <Box
      sx={{
        bgcolor: '#0b0e14',
        borderRadius: 2,
        p: 2,
        border: '1px solid var(--color-border)'
      }}
    >
      <Typography
        variant='subtitle1'
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          mb: 1,
          fontSize: '0.875rem'
        }}
      >
        Product tree
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
        {mockTreeData.map((node) => (
          <TreeItem
            key={node.id}
            node={node}
            selectedId={selectedId}
            onSelect={setSelectedId}
            expandedIds={expandedIds}
            onToggleExpand={handleToggleExpand}
          />
        ))}
      </Box>
    </Box>
  )
}
