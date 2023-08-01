import React, { FunctionComponent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { CheckBoxGroup, Text, Heading } from 'grommet'

import { diaryStore } from 'src/model/diary'
import { metadata } from 'src/shared/head-meta/metadata'

import { DiaryList } from 'src/model/diary'
import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'

const BlogHome: FunctionComponent = () => {
  const tagList = useStore(diaryStore.tagList)

  const [params, setParams] = useSearchParams({ tags: [] })

  const tags = (params.get('tags') as string)?.split(',').filter((p) => Boolean(p)) ?? []
  const setTags = (tags: Array<string>) => setParams({ tags: tags.join(',') })

  return (
    <TemplateContent>
      <Head title={metadata.blogHome.title} description={metadata.blogHome.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Blog
      </Heading>
      <Text size='large'>Filter by tags</Text>

      <CheckBoxGroup
        direction='row'
        wrap={true}
        responsive={true}
        gap='medium'
        justify='start'
        margin={{ bottom: 'large', top: 'medium' }}
        options={tagList.sort((a, b) => a.sortOrder - b.sortOrder)}
        labelKey='title'
        valueKey='title'
        value={tags}
        onChange={(event) => {
          if (!event) return null
          // grommet types are broken,
          // value of checkbox group is string, but must be array of strings
          // @ts-ignore
          const eventValue = event.value as Array<string>
          setTags(eventValue)
        }}
      />

      <DiaryList isSliced={false} chosenTags={tags} />
    </TemplateContent>
  )
}

export default BlogHome
