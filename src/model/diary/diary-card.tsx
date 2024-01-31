import React, { FunctionComponent, PropsWithChildren, useContext, useRef } from 'react'
import { createPath, createSearchParams, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, ResponsiveContext, Tag, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { routeMap } from 'src/shared/route-map'

import { SharedBtn } from 'src/model/diary/shared-btn'
import { useReadTime } from 'src/shared/hooks/useReadTime'
import { useIsLiked } from 'src/shared/hooks/useIsLiked'
import { handleMouseMove } from 'src/shared/utils/tilting'
import { DiaryExternal } from './types'

export interface DiaryCardProps {
  diary: DiaryExternal
}

export const DiaryCard: FunctionComponent<PropsWithChildren<DiaryCardProps>> = ({ diary }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { contextSafe } = useGSAP({ scope: cardRef })
  const screenSize = useContext(ResponsiveContext)

  const navigate = useNavigate()
  const readTime = useReadTime(diary.content)
  const [isLiked, likeToggle] = useIsLiked(diary.id)

  const moveCard = contextSafe((rotateX: number, rotateY: number) => {
    gsap.to(cardRef.current, {
      rotationY: rotateY,
      rotationX: rotateX,
      duration: 0.8,
      ease: 'circ.out',
    })
  })

  const resetCard = contextSafe(() => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'circ.out',
    })
  })

  const firstParagraph = diary.content.find(block => block.kind === 'markdown')
  const date = new Date(diary.timestamp).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
  })

  return (
    <div
      ref={cardRef}
      onMouseMove={e => handleMouseMove(e, cardRef, moveCard)}
      onMouseLeave={() => resetCard()}
      style={{ margin: '0', padding: '0', perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <Card width='large' background={{ color: 'white' }} animation='slideLeft'>
        <CardHeader
          direction='column'
          pad={{ top: 'medium', bottom: 'small', left: 'medium', right: 'medium' }}
          focusIndicator={false}
          onClick={() => navigate(`/blog/diary/${diary.id}`)}
        >
          {screenSize !== 'small' && (
            <Box direction='row' flex='grow' gap='small' alignSelf='end'>
              {diary.tags.map(tag => (
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
            {diary.title}
          </Heading>
        </CardHeader>
        <CardBody
          pad={{ top: 'none', left: 'medium', bottom: 'medium', right: 'medium' }}
          gap='medium'
          focusIndicator={false}
          onClick={() => navigate(routeMap.blogDiaryId(diary.id))}
        >
          <Text size='medium' weight='normal' margin='none'>
            {firstParagraph &&
              firstParagraph.kind === 'markdown' &&
              firstParagraph.text
                .replace(/<br\/>/g, '')
                .slice(0, 240)
                .trim() + '...'}
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
          <SharedBtn diary_id={diary.id} size='20px' />
        </CardFooter>
      </Card>
    </div>
  )
}
