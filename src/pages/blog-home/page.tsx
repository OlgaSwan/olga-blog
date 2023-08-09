import React, { FunctionComponent, useEffect, useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Heading } from 'grommet'

import { diaryStore } from 'src/model/diary'
import { metadata } from 'src/shared/head-meta/metadata'

import { DiaryList } from 'src/model/diary'
import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import TagInput from './tag-input'

const BlogHome: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)

  const allSuggestions = useMemo(() => {
    const allTags = allDiaries?.flatMap((d) => d.tags) || []
    return [...new Set(allTags)]
  }, [allDiaries])

  const [params, setParams] = useSearchParams({ tags: [] })
  const tags = (params.get('tags') as string)?.split(',').filter((p) => Boolean(p)) ?? []
  const setTags = (tags: string[]) => setParams({ tags: tags.join(',') })

  if (allDiaries === null) return <TemplateContent />

  return (
    <TemplateContent>
      <Head title={metadata.blogHome.title} description={metadata.blogHome.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Blog
      </Heading>
      <TagInput
        suggestions={allSuggestions}
        initialValue={tags}
        onChange={(value) => setTags(value)}
      />
      <DiaryList isSliced={false} chosenTags={tags} />
    </TemplateContent>
  )
}

export default BlogHome
