import React, { FunctionComponent } from 'react'
import { useStore } from '@nanostores/react'
import { Box } from 'grommet'

import { diaryStore } from './store'
import { DiaryCard } from './diary-card'

export interface DiaryListProps {
  isSliced?: boolean
}

export const DiaryList: FunctionComponent<DiaryListProps> = ({ isSliced = true }) => {
  const allDiaries = useStore(diaryStore.list)

  return (
    <Box gap='medium'>
      {isSliced
        ? allDiaries.slice(0, 3).map((p) => <DiaryCard key={p.id} id={p.id} />)
        : allDiaries.map((p) => <DiaryCard key={p.id} id={p.id} />)}
    </Box>
  )
}
