import React, { FunctionComponent, PropsWithChildren, useContext, useRef } from 'react'
import { createPath, createSearchParams, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
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
  const foundDiary = allDiaries?.find(p => p.id === id)
  const cardRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()
  const screenSize = useContext(ResponsiveContext)
  const readTime = useReadTime(foundDiary?.content)

  const [isLiked, likeToggle] = useIsLiked(id)

  const moveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const isInCard =
        e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

      if (isInCard) {
        const halfWidth = rect.width / 2
        const halfHeight = rect.height / 2
        const centerX = rect.left + halfWidth
        const centerY = rect.top + halfHeight

        const rotateX = ((e.clientY - centerY) / halfHeight) * -10
        const rotateY = ((e.clientX - centerX) / halfWidth) * 10

        gsap.to(cardRef.current, {
          rotationY: rotateY,
          rotationX: rotateX,
          duration: 0.8,
          ease: 'power2.out',
        })
      }
    }
  }

  const resetCard = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    }
  }

  if (!foundDiary)
    return (
      <Card height='medium' width='large'>
        <CardBody>Post not found</CardBody>
      </Card>
    )

  const firstParagraph = foundDiary.content.find(block => block.kind === 'paragraph')
  const date = new Date(foundDiary.timestamp).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
  })

  return (
    <div
      ref={cardRef}
      onMouseMove={moveCard}
      onMouseLeave={resetCard}
      style={{ margin: '0', padding: '0', perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <Card width='large' background={{ color: 'white' }} animation='slideLeft'>
        <CardHeader
          direction='column'
          pad={{ top: 'medium', bottom: 'small', left: 'medium', right: 'medium' }}
          focusIndicator={false}
          onClick={() => navigate(`/blog/diary/${id}`)}
        >
          {screenSize !== 'small' && (
            <Box direction='row' flex='grow' gap='small' alignSelf='end'>
              {foundDiary.tags.map(tag => (
                <Tag
                  key={tag}
                  value={tag}
                  size='small'
                  // @ts-ignore
                  style={{ borderWidth: '2px' }}
                  onClick={e => {
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
              style={{ borderRadius: '4px' }}
              onClick={likeToggle}
            />
            <Box direction='row' gap='small'>
              <Text size='small' weight='bold' style={{ lineHeight: '18px' }}>
                ·
              </Text>
              <Text size='small'>{readTime} min read</Text>
              <Text size='small' weight='bold' style={{ lineHeight: '18px' }}>
                ·
              </Text>
              <Text size='small'>{date}</Text>
            </Box>
          </Box>
          <SharedBtn diary_id={foundDiary.id} size='20px' />
        </CardFooter>
      </Card>
    </div>
  )
}
