import React, { FunctionComponent, useContext } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Tag, Text, ResponsiveContext, Heading } from 'grommet'
import * as Icons from 'grommet-icons'

import { TemplateContent } from 'src/shared/template'
import { diaryStore } from 'src/model/diary'
import { routeMap } from '..'

const BlogDiaryId: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const allTags = useStore(diaryStore.tagList)
  const params = useParams()
  const foundDiary = allDiaries.find((p) => p.id === params.id)
  const navigate = useNavigate()
  const screenSize = useContext(ResponsiveContext)

  return (
    <TemplateContent>
      {foundDiary ? (
        <>
          <Heading size='medium' alignSelf='start' margin={{ top: 'xlarge', bottom: 'medium' }}>
            {foundDiary!.title}
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
              {foundDiary!.content}
            </Text>
            <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
              {foundDiary!.content}
            </Text>
            <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
              {foundDiary!.content}
            </Text>
          </Box>
          <Box direction='row' flex='grow' gap='small' alignSelf='start' margin={{ bottom: 'large' }}>
            {foundDiary!.tags.map((tag) => (
              <Tag
                key={tag}
                value={tag}
                size='small'
                // @ts-ignore
                style={{ borderWidth: '2px' }}
                onClick={(e) => {
                  e.stopPropagation()
                  const foundTag = allTags.find((t) => t.title === tag)
                  navigate(`/blog/${foundTag!.id}`)
                }}
              />
            ))}
          </Box>
        </>
      ) : (
        <Navigate to={routeMap.errorNotFound.path} />
      )}
    </TemplateContent>
  )
}

export default BlogDiaryId
