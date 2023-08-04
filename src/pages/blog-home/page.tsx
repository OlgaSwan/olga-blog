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

  let allSuggestions = useMemo(() => {
    const allTags = allDiaries?.flatMap((d) => d.tags) || []
    return [...new Set(allTags)]
  }, [allDiaries])

  const [params, setParams] = useSearchParams({ tags: [] })
  const tags = (params.get('tags') as string)?.split(',').filter((p) => Boolean(p)) ?? []
  const setTags = (tags: string[]) => setParams({ tags: tags.join(',') })

  const [suggestions, setSuggestions] = useState<string[]>([])

  const updateSuggestions = (selectedTags: string[]) => {
    setSuggestions(allSuggestions.filter((suggestion) => !selectedTags.includes(suggestion)))
  }

  useEffect(() => {
    updateSuggestions(tags)
  }, [allDiaries])

  if (allDiaries === null) return <TemplateContent />

  const onRemoveTag = (tag: string) => {
    const removeIndex = tags.indexOf(tag)
    const newTags = [...tags]
    if (removeIndex >= 0) {
      newTags.splice(removeIndex, 1)
    }
    setTags(newTags)
    updateSuggestions(newTags)
  }

  const onAddTag = (tag: string) => {
    if (!tags.includes(tag) && suggestions.includes(tag)) {
      const newTags = [...tags, tag]
      setTags(newTags)
      updateSuggestions(newTags)
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
        dropProps={{ round: 'small' }}
      />
      <DiaryList isSliced={false} chosenTags={tags} />
    </TemplateContent>
  )
}

export default BlogHome
