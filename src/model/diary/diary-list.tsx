import React, { FunctionComponent } from 'react'
import { useStore } from '@nanostores/react'
import { Box } from 'grommet'

import { diaryStore } from './store'
import { DiaryCard } from './diary-card'

export const DiaryList: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)

  return (
    <Box gap='medium'>
      {allDiaries.map((p) => (
        <DiaryCard key={p.id} id={p.id} />
      ))}
    </Box>
  )
}
