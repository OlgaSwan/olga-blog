import React, { FunctionComponent, useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { Box } from 'grommet'

import { diaryStore } from './store'
import { DiaryCard } from './diary-card'

export interface DiaryListProps {
  isSliced?: boolean
  chosenTags?: string[]
}

export const DiaryList: FunctionComponent<DiaryListProps> = ({
  isSliced = true,
  chosenTags = []
}) => {
  const allDiaries = useStore(diaryStore.list)

  // this filter looks awful, but it used only in one component, so
  // it must be written there, directly and precisely
  let allDiariesMemo = useMemo(
    () => {
      if (!allDiaries) return []

      let diariesTransformed = allDiaries

      if (chosenTags.length > 0) {
        diariesTransformed = diariesTransformed.filter(diary => {
          for (let tag of diary.tags) {
            let foundTag = chosenTags.includes(tag)
            if (foundTag) return true
          }
          return false
        })
      }

      if (isSliced) {
        diariesTransformed = diariesTransformed.slice(0, 3)
      }

      return diariesTransformed
    },
    [allDiaries, isSliced, chosenTags],
  )

  return (
    <Box gap='medium'>
      {allDiariesMemo.map((d) => (
        <DiaryCard key={d.id} id={d.id} />
      ))}
    </Box>
  )
}
