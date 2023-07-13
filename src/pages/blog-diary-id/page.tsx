import React, { FunctionComponent, useContext } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Tag, Text, ResponsiveContext, Heading } from 'grommet'
import * as Icons from 'grommet-icons'

import { TemplateContent } from 'src/shared/template'
import { diaryStore } from 'src/model/diary'
import { routeMap } from '..'

const BlogDiaryId: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const allTags = useStore(diaryStore.tagList)
  const params = useParams()
  const navigate = useNavigate()
  const foundDiary = allDiaries.find((p) => p.id === params.id)
  const screenSize = useContext(ResponsiveContext)

  return (
    <TemplateContent>
      {foundDiary ? (
        <>
          <Heading level='2' margin={{ bottom: 'medium' }}>
            Diary
          </Heading>

          <Text size='3xl' weight='bold' alignSelf='start' margin={{ top: 'large', bottom: 'medium' }}>
            {foundDiary!.title}
          </Text>
          <Box gap='small' margin={{ top: 'small', bottom: 'small' }}>
            <Box direction='row' flex='grow' gap='small' alignSelf='start'>
              {foundDiary!.tags.map((tag) => (
                <Tag
                  key={tag}
                  size='small'
                  value={tag}
                  onClick={(e) => {
                    e.stopPropagation()
                    const foundTag = allTags.find((t) => t.title === tag)
                    navigate(`/blog/${foundTag!.id}`)
                  }}
                />
              ))}
            </Box>
            <Box direction='row' align='center' alignSelf='start'>
              <Box direction='row' align='center' justify='between' gap='small'>
                <Box direction='row' align='center'>
                  <Button icon={<Icons.Favorite color='red' />} hoverIndicator />
                  <Text size='small'>{foundDiary.likes}</Text>
                </Box>
                <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
                  ·
                </Text>
                <Text size='small'>{foundDiary.minRead + ' min read'}</Text>
                <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
                  ·
                </Text>
              </Box>
              <Button icon={<Icons.ShareRounded color='plain' />} hoverIndicator />
            </Box>
          </Box>

          <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
            {foundDiary!.content}
          </Text>
          <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
            {foundDiary!.content}
          </Text>
          <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
            {foundDiary!.content}
          </Text>
          {screenSize !== 'small' && (
            <Box direction='row' flex='grow' gap='small' alignSelf='start'>
              {foundDiary!.tags.map((tag) => (
                <Tag
                  key={tag}
                  size='small'
                  value={tag}
                  onClick={(e) => {
                    e.stopPropagation()
                    const foundTag = allTags.find((t) => t.title === tag)
                    navigate(`/blog/${foundTag!.id}`)
                  }}
                />
              ))}
            </Box>
          )}
        </>
      ) : (
        <Navigate to={routeMap.errorNotFound.path} />
      )}
    </TemplateContent>
  )
}

export default BlogDiaryId
