import React, { FunctionComponent, PropsWithChildren, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Tag, Text, ResponsiveContext } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

import { diaryStore } from './store'

export interface DiaryCardProps {
  id: string
}

export const DiaryCard: FunctionComponent<PropsWithChildren<DiaryCardProps>> = ({ id }) => {
  const allDiaries = useStore(diaryStore.list)
  const allTags = useStore(diaryStore.tagList)
  const foundDiary = allDiaries.find((p) => p.id === id)
  const navigate = useNavigate()
  const screenSize = useContext(ResponsiveContext)

  if (!foundDiary)
    return (
      <Card height='medium' width='large' background='light-1'>
        <CardBody>Post not found</CardBody>
      </Card>
    )

  return (
    <Card width='large' background='light-1'>
      <CardHeader direction='column' pad='medium' focusIndicator={false} onClick={() => navigate(`/blog/diary/${id}`)}>
        {screenSize !== 'small' && (
          <Box direction='row' flex='grow' gap='small' alignSelf='end'>
            {foundDiary.tags.map((tag) => (
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
        <Text size='3xl' weight='bold' alignSelf='start'>
          {foundDiary.title}
        </Text>
      </CardHeader>
      <CardBody pad='medium' gap='medium' focusIndicator={false} onClick={() => navigate(`/blog/diary/${id}`)}>
        <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
          {foundDiary.content.slice(0, 240) + '...'}
        </Text>
      </CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background='background-back'>
        <Box direction='row' align='center'>
          <Button icon={<Icons.Favorite color='red' />} hoverIndicator />
          <Text size='small' weight='normal'>
            {foundDiary.likes}
          </Text>
        </Box>
        <Button icon={<Icons.ShareOption color='plain' />} hoverIndicator />
      </CardFooter>
    </Card>
  )
}
