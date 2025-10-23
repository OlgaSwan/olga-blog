import React, { FunctionComponent, useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { Box } from 'grommet'

import { diaryStore } from 'src/model/diary/store'
import { DiaryCard } from 'src/model/diary/diary-card'

import * as Icons from 'grommet-icons'

export interface DiaryListProps {
  isSliced?: boolean
  chosenTags?: string[]
}

export const DiaryList: FunctionComponent<DiaryListProps> = ({ isSliced = true, chosenTags = [] }) => {
  const allDiaries = useStore(diaryStore.list)

  let allDiariesMemo = useMemo(() => {
    if (!allDiaries) return []

    let diariesTransformed = allDiaries

    if (chosenTags.length > 0) {
      diariesTransformed = diariesTransformed.filter(diary => diary.tags.some(tag => chosenTags.includes(tag)))
    }

    if (isSliced) {
      diariesTransformed = diariesTransformed.slice(0, 3)
    }

    return diariesTransformed
  }, [allDiaries, isSliced, chosenTags])

  return (
    <Box gap='medium'>
      {!allDiaries && (
        <Box flex='grow' direction='column' align='center' justify='center'>
          <Box animation={{ type: 'pulse', duration: 200, size: 'medium' }}>
            <Icons.Diamond size='xlarge' color='brand' />
          </Box>
        </Box>
      )}
      {allDiariesMemo.map(d => (
        <DiaryCard key={d.id} diary={d} />
      ))}
    </Box>
  )
}
