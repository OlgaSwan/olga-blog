import React, { FunctionComponent, useContext } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Tag, Text, PageHeader, ResponsiveContext } from 'grommet'
import * as Icons from 'grommet-icons'

import { Template } from '../../shared/template'
import { diaryStore } from '../../model/diary'
import { routeMap } from '..'

const BlogDiaryId: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const allTags = useStore(diaryStore.tagList)
  const params = useParams()
  const navigate = useNavigate()
  const foundDiary = allDiaries.find((p) => p.id === params.id)
  const screenSize = useContext(ResponsiveContext)

  return (
    <Template>
      {foundDiary ? (
        <>
          <PageHeader size='small' title='Diary' margin={{ bottom: 'large', top: 'large' }} />
          <Card width='large' background='light-1'>
            <CardHeader direction='column' pad='medium' focusIndicator={false}>
              <Text size='3xl' weight='bold' alignSelf='start'>
                {foundDiary!.title}
              </Text>
            </CardHeader>
            <CardBody pad='medium' gap='medium' focusIndicator={false}>
              <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
                {foundDiary!.content}
              </Text>
              <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
                {foundDiary!.content} {foundDiary!.content}
              </Text>
              <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
                {foundDiary!.content} {foundDiary!.content}
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
            </CardBody>
            <CardFooter pad={{ horizontal: 'small' }} background='background-back'>
              <Box direction='row' align='center'>
                <Button icon={<Icons.Favorite color='red' />} hoverIndicator />
                <Text size='small' weight='normal'>
                  {foundDiary!.likes}
                </Text>
              </Box>
              <Button icon={<Icons.ShareOption color='plain' />} hoverIndicator />
            </CardFooter>
          </Card>
        </>
      ) : (
        <Navigate to={routeMap.errorNotFound.path} />
      )}
    </Template>
  )
}

export default BlogDiaryId
