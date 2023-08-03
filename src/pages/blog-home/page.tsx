import React, { FunctionComponent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Heading, Box, Button, Keyboard, Text, TextInput } from 'grommet'

import { diaryStore } from 'src/model/diary'
import { metadata } from 'src/shared/head-meta/metadata'

import { DiaryList } from 'src/model/diary'
import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import TagInput from './tag-input'

const BlogHome: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const allTags = allDiaries?.flatMap((d) => d.tags) || []
  const allSuggestions = [...new Set(allTags)]

  const [params, setParams] = useSearchParams({ tags: [] })
  const tags = (params.get('tags') as string)?.split(',').filter((p) => Boolean(p)) ?? []
  const setTags = (tags: Array<string>) => setParams({ tags: tags.join(',') })
  const awdw = tags.length > 0 ? allSuggestions.filter((suggestion) => !tags.includes(suggestion)) : allSuggestions
  console.log(awdw)
  const [suggestions, setSuggestions] = useState(awdw)

  if (allDiaries === null) return <TemplateContent />
 
  const onRemoveTag = (tag: string) => {
    const removeIndex = tags.indexOf(tag)
    const newTags = [...tags]
    if (removeIndex >= 0) {
      newTags.splice(removeIndex, 1)
    }
    setTags(newTags)
  }

  const onAddTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])
    }
  }

  const onFilterSuggestion = (value: string) =>
    setSuggestions(
      allSuggestions.filter(
        (suggestion) => suggestion.toLowerCase().indexOf(value.toLowerCase()) >= 0 && !tags.includes(suggestion),
      ),
    )

  return (
    <TemplateContent>
      <Head title={metadata.blogHome.title} description={metadata.blogHome.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Blog
      </Heading>
      <TagInput
        placeholder='Filter by tags'
        suggestions={suggestions}
        value={tags}
        onRemove={onRemoveTag}
        onAdd={onAddTag}
        onChange={(value) => onFilterSuggestion(value)}
      />

      <DiaryList isSliced={false} chosenTags={tags} />
    </TemplateContent>
  )
}

export default BlogHome
