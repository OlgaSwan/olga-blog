import React, { FunctionComponent } from 'react'
import { useParams, useNavigate, createPath, createSearchParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Tag, Text, Heading } from 'grommet'
import * as Icons from 'grommet-icons'

import { diaryStore } from 'src/model/diary'
import { authStore } from 'src/model/auth'
import { TemplateContent } from 'src/shared/template'
import { routeMap } from 'src/shared/route-map'
import { Head } from 'src/shared/head-meta/head'

const BlogDiaryId: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const auth = useStore(authStore.store)
  const params = useParams()
  const navigate = useNavigate()

  if (allDiaries === null) return <TemplateContent />

  const foundDiary = allDiaries.find((p) => p.id === params.id)

  if (!foundDiary) {
    navigate(routeMap.errorNotFound)
    return <TemplateContent />
  }

  return (
    <TemplateContent>
      <Head title={foundDiary.title} description={foundDiary.content.slice(0, 240) + '...'} />
      <Heading size='medium' alignSelf='start' margin={{ top: 'xlarge', bottom: 'medium' }}>
        {foundDiary.title}
      </Heading>
      <Box gap='medium' margin={{ bottom: 'medium' }}>
        <Box direction='row' align='center' alignSelf='start'>
          <Box direction='row' align='center' justify='between' gap='small'>
            <Box direction='row' align='center'>
              <Button icon={<Icons.Favorite color='red' />} hoverIndicator />
              <Text size='small'>{foundDiary.likes}</Text>
            </Box>
            <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
              ·
            </Text>
          </Box>
          <Box direction='row' align='center' justify='between' gap='small'>
            <Box direction='row' align='center'>
              <Button icon={<Icons.Clock color='text' />} hoverIndicator />
              <Text size='small'>{foundDiary.minRead + ' min read'}</Text>
            </Box>
            <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
              ·
            </Text>
          </Box>
          <Box direction='row' align='center' justify='between' gap='small'>
            <Box direction='row' align='center'>
              <Button icon={<Icons.ShareRounded color='text' />} hoverIndicator />
              <Text size='small'>{'Share'}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box margin={{ bottom: 'medium' }}>
        <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
          {foundDiary.content}
        </Text>
        <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
          {foundDiary.content}
        </Text>
        <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
          {foundDiary.content}
        </Text>
      </Box>
      <Box direction='row' flex='grow' gap='small' alignSelf='start' margin={{ bottom: 'large' }}>
        {foundDiary.tags.map((tag) => (
          <Tag
            key={tag}
            value={tag}
            size='small'
            // @ts-ignore
            style={{ borderWidth: '2px' }}
            onClick={(e) => {
              e.stopPropagation()
              navigate(
                createPath({
                  pathname: routeMap.blogHome,
                  search: createSearchParams({ tags: [tag] }).toString(),
                }),
              )
            }}
          />
        ))}
      </Box>
      {auth && (
        <Button
          primary
          label='Edit'
          alignSelf='end'
          size='small'
          style={{ width: '200px' }}
          margin={{ bottom: 'large' }}
          onClick={() => navigate(routeMap.adminDiaryId(foundDiary.id))}
        />
      )}
    </TemplateContent>
  )
}

export default BlogDiaryId
