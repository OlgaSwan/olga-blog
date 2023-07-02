import React, { FunctionComponent, useState } from 'react'
import { useStore } from '@nanostores/react'
import { PageHeader, Box, CheckBoxGroup, Text } from 'grommet'

import { tagList } from '../../model/diary/store'

import { Template } from '../../shared/template'
import { DiaryList } from '../../model/diary'

const BlogHome: FunctionComponent = () => {
  const tags = useStore(tagList)
  const [chosenTags, setChosenTags] = useState<string[]>([])
  return (
    <Template>
      <PageHeader size='small' title='Blog' margin={{ bottom: 'medium', top: 'medium' }} />
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
        onChange={({ value, option }: any) => {
          setChosenTags(value)
        }}
      />

      <DiaryList isSliced={false} chosenTags={chosenTags} />
    </Template>
  )
}

export default BlogHome
