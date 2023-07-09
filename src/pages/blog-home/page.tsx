import React, { FunctionComponent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { CheckBoxGroup, Text, Heading } from 'grommet'

import { diaryStore } from 'src/model/diary'

import { DiaryList } from 'src/model/diary'
import { TemplateContent } from 'src/shared/template'

const BlogHome: FunctionComponent = () => {
  const tags = useStore(diaryStore.tagList)
  const [chosenTags, setChosenTags] = useState<string[]>([])
  const params = useParams()

  useEffect(() => {
    if (params.tag) {
      const foundTag = tags.find((t) => t.id === params.tag)
      if (foundTag) setChosenTags([...chosenTags, foundTag.title])
    }
  }, [params])

  return (
    <TemplateContent>
      <Heading level='1' margin={{ bottom: 'medium' }}>
        Blog
      </Heading>
      <Text size='large'>Filter by tags</Text>

      <CheckBoxGroup
        style={{ maxWidth: '768px' }}
        direction='row'
        wrap={true}
        responsive={true}
        gap='medium'
        justify='start'
        margin={{ bottom: 'large', top: 'medium' }}
        options={tags.sort((a, b) => a.sortOrder - b.sortOrder)}
        labelKey='title'
        valueKey='title'
        value={chosenTags}
        onChange={({ value, option }: any) => {
          setChosenTags(value)
        }}
      />

      <DiaryList isSliced={false} chosenTags={chosenTags} />
    </TemplateContent>
  )
}

export default BlogHome
