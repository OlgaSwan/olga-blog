import React, { FunctionComponent, PropsWithChildren, useContext, useState } from 'react'
import { createPath, createSearchParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Notification,
  ResponsiveContext,
  Tag,
  Text
} from 'grommet'
import * as Icons from 'grommet-icons'

import { useStore } from '@nanostores/react'

import { diaryStore } from './store'
import { routeMap } from 'src/shared/route-map'

import { useReadTime } from 'src/shared/hooks/useReadTime'
import { getUrl } from 'src/shared/utils/get-url'

export interface DiaryCardProps {
  id: string
}

export const DiaryCard: FunctionComponent<PropsWithChildren<DiaryCardProps>> = ({ id }) => {
  const allDiaries = useStore(diaryStore.list)
  const foundDiary = allDiaries?.find((p) => p.id === id)
  const getLikedIds = (): string[] => JSON.parse(localStorage.getItem('isLiked') || '[]')
  const [isLiked, setIsLiked] = useState(() => {
    const likedIds = getLikedIds()
    return likedIds.includes(id)
  })
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()
  const screenSize = useContext(ResponsiveContext)
  const readTime = useReadTime(foundDiary?.content)

  if (!foundDiary)
    return (
      <Card height='medium' width='large' background={{ color: 'light-1' }}>
        <CardBody>Post not found</CardBody>
      </Card>
    )

  const firstParagraph = foundDiary.content.find(block => block.kind === 'paragraph')

  const likeToggle = () => {
    const likedIds = getLikedIds()
    const updatedLikedIds = likedIds.includes(id) ? likedIds.filter((likedId) => likedId !== id) : [...likedIds, id]

    if (updatedLikedIds.length > 0) localStorage.setItem('isLiked', JSON.stringify(updatedLikedIds))
    else localStorage.removeItem('isLiked')
    setIsLiked(!isLiked)
  }

  return (
    <>
      {open && (
        <Notification
          toast
          time={2000}
          icon={<Icons.StatusGood color='brand' />}
          message='Link copied!'
          onClose={() => setOpen(false)}
        />
      )}
      <Card width='large' background={{ color: 'light-1' }}>
        <CardHeader direction='column' pad='medium' focusIndicator={false}
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
        <CardFooter pad={{ horizontal: 'small' }} background={{ color: 'light-3' }}>
          <Box direction='row' align='center' justify='between'>
            <Button
              icon={isLiked ? <Icons.LikeFill color='brand' /> : <Icons.Like color='text' />}
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
          <Button icon={<Icons.ShareRounded color='text' />} hoverIndicator
                  onClick={async () => await getUrl(setOpen, foundDiary.id)} />
        </CardFooter>
      </Card>
    </>
  )
}
