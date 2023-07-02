import React, { FunctionComponent, useState } from 'react'
import { useStore } from '@nanostores/react'
import { PageHeader, Box, Button, Text } from 'grommet'

import { tagList } from '../../model/diary/store'

import { Template } from '../../shared/template'
import { DiaryList } from '../../model/diary'

const BlogHome: FunctionComponent = () => {
  const tags = useStore(tagList)
  const [chosenTags, setChosenTags] = useState([])
  return (
    <Template>
      <PageHeader size='small' title='Blog' margin={{ bottom: 'medium', top: 'medium' }} />
      <Text size='large'>Filter by tags</Text>
      <Box
        style={{ maxWidth: '768px' }}
        direction='row'
        wrap={true}
        responsive={true}
        gap='small'
        justify='between'
        margin={{ bottom: 'large', top: 'medium' }}
      >
        {tags
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((e) => (
            <Button label={e.title} onClick={() => {}}/>
          ))}
      </Box>
      <DiaryList isSliced={false} />
    </Template>
  )
}

export default BlogHome
