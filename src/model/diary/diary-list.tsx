import React, { FunctionComponent } from 'react'
import { useStore } from '@nanostores/react'
import { Box } from 'grommet'

import { diaryStore } from './store'
import { DiaryCard } from './diary-card'

export interface DiaryListProps {
  isSliced?: boolean
  chosenTags?: string[]
}

export const DiaryList: FunctionComponent<DiaryListProps> = ({ isSliced = true, chosenTags = [] }) => {
  const allDiaries = useStore(diaryStore.list)

  return (
    <Box gap='medium'>
      {chosenTags.length !== 0
        ? allDiaries
            .filter((diary) => {
              for (let tag of diary.tags) {
                let foundTag = chosenTags.includes(tag)
                if (foundTag) return true
              }
              return false
            })
            .map((p) => <DiaryCard key={p.id} id={p.id} />)
        : isSliced
        ? allDiaries.slice(0, 3).map((p) => <DiaryCard key={p.id} id={p.id} />)
        : allDiaries.map((p) => <DiaryCard key={p.id} id={p.id} />)}
    </Box>
  )
}
