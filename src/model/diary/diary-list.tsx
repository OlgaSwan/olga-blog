import React, { FunctionComponent } from 'react'
import { useStore } from '@nanostores/react'
import { Box } from 'grommet'

import { diaryStore } from './store'
import { DiaryCard } from './diary-card'

export const DiaryList: FunctionComponent = () => {
  const allPosts = useStore(diaryStore.store)

  return (
    <Box gap='medium'>
      {allPosts.map((p) => (
        <DiaryCard key={p.id} id={p.id} />
      ))}
    </Box>
  )
}
