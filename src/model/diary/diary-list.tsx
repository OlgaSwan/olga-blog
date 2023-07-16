import React, { FunctionComponent, useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { Box } from 'grommet'

import { diaryStore } from './store'
import { DiaryCard } from './diary-card'

import { filterDiaries } from 'src/shared/filter-diaries'

export interface DiaryListProps {
  isSliced?: boolean
  chosenTags?: string[]
}

export const DiaryList: FunctionComponent<DiaryListProps> = ({ isSliced = true, chosenTags = [] }) => {
  const allDiaries = useStore(diaryStore.list)

  let allDiariesMemo = useMemo(
    () => filterDiaries(allDiaries, isSliced, chosenTags),
    [allDiaries, isSliced, chosenTags],
  )

  if (allDiariesMemo === null) return null

  return (
    <Box gap='medium'>
      {allDiariesMemo.map((d) => (
        <DiaryCard key={d.id} id={d.id} />
      ))}
    </Box>
  )
}
