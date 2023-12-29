import { useMemo } from 'react'

import { Block } from 'src/model/diary/types'

const averageReadTime = 1400

export const useReadTime = (content: Array<Block> | undefined) => {
  return useMemo(() => {
    if (!content) return 1
    const filteredContent = content.map(e => {
      if (e.kind === 'title&paragraph' || e.kind === 'markdown' || e.kind === 'code') return e.text
      else return ''
    })
    return Math.ceil(filteredContent.join('').length / averageReadTime)
  }, [content])
}
