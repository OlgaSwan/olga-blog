import React, { FunctionComponent, PropsWithChildren, useContext } from 'react'
import { createPath, createSearchParams, useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, ResponsiveContext, Tag, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { useStore } from '@nanostores/react'

import { diaryStore } from './store'
import { routeMap } from 'src/shared/route-map'

import { SharedBtn } from 'src/model/diary/shared-btn'
import { useReadTime } from 'src/shared/hooks/useReadTime'
import { useIsLiked } from 'src/shared/hooks/useIsLiked'

export interface DiaryCardProps {
  id: string
}

export const DiaryCard: FunctionComponent<PropsWithChildren<DiaryCardProps>> = ({ id }) => {
  const allDiaries = useStore(diaryStore.list)
  const foundDiary = allDiaries?.find((p) => p.id === id)

  const navigate = useNavigate()
  const screenSize = useContext(ResponsiveContext)
  const readTime = useReadTime(foundDiary?.content)

  const [isLiked, likeToggle] = useIsLiked(id)

  if (!foundDiary)
    return (
      <Card height='medium' width='large'>
        <CardBody>Post not found</CardBody>
      </Card>
    )

  const firstParagraph = foundDiary.content.find(block => block.kind === 'paragraph')

  return (
    <>
      <Card width='large' background={{ color: 'white' }} animation='slideLeft'>
        <CardHeader direction='column'
                    pad={{ top: 'medium', bottom: 'small', left: 'medium', right: 'medium' }}
                    focusIndicator={false}
                    onClick={() => navigate(`/blog/diary/${id}`)}>
          {screenSize !== 'small' && (
            <Box direction='row' flex='grow' gap='small' alignSelf='end'>
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
                        search: createSearchParams({ tags: [tag] }).toString()
                      })
                    )
                  }}
                />
              ))}
            </Box>
          )}
          <Heading level='2' alignSelf='start' margin='none'>
            {foundDiary.title}
          </Heading>
        </CardHeader>
        <CardBody
          style={{ paddingTop: 'none', paddingLeft: '24px', paddingBottom: '24px', paddingRight: '24px' }}
          gap='medium'
          focusIndicator={false}
          onClick={() => navigate(routeMap.blogDiaryId(id))}
        >
          <Text size='medium' weight='normal' margin='none'>
            {firstParagraph && firstParagraph.kind === 'paragraph' && firstParagraph.text.slice(0, 240).trim() + '...'}
          </Text>
        </CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background={{ color: 'light-2' }}>
          <Box direction='row' align='center' justify='between'>
            <Button
              icon={isLiked ? <Icons.LikeFill color='brand' size='18px' /> : <Icons.Like color='brand' size='18px' />}
              hoverIndicator
              onClick={likeToggle}
            />
            <Box direction='row' gap='small'>
              <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
                ·
              </Text>
              <Text size='small'>{readTime} min read</Text>
            </Box>
          </Box>
          <SharedBtn diary_id={foundDiary.id} size='20px' />
        </CardFooter>
      </Card>
    </>
  )
}
