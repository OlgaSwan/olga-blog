import { useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { diaryStore } from 'src/model/diary'

export const useAllTAgs = () => {
  const allDiaries = useStore(diaryStore.list)

  return useMemo(() => {
    const allTags = allDiaries?.flatMap(d => d.tags) || []
    return [...new Set(allTags)]
  }, [allDiaries])
}
