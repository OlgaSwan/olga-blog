import React, { FunctionComponent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Heading } from 'grommet'

import { DiaryList, diaryStore } from 'src/model/diary'
import { metadata } from 'src/shared/head-meta/metadata'
import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import { TagInput } from 'src/model/tag'
import { useAllTAgs } from 'src/shared/hooks/useAllTAgs'

const BlogHome: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)

  const allSuggestions = useAllTAgs()

  const [params, setParams] = useSearchParams({ tags: [] })
  const tags =
    params
      .get('tags')
      ?.split(',')
      .filter(t => Boolean(t)) ?? []
  const setTags = (tags: string[]) => setParams({ tags: tags.join(',') })

  if (allDiaries === null) return <TemplateContent />

  return (
    <TemplateContent>
      <Head title={metadata.blogHome.title} description={metadata.blogHome.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Blog
      </Heading>
      <TagInput suggestions={allSuggestions} value={tags} onChange={value => setTags(value)} />
      <DiaryList isSliced={false} chosenTags={tags} />
    </TemplateContent>
  )
}

export default BlogHome
