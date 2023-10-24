import React, { FunctionComponent, useState } from 'react'
import { createPath, createSearchParams, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Heading, Image, Notification, Tag, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { diaryStore } from 'src/model/diary'
import { authStore } from 'src/model/auth'
import { routeMap } from 'src/shared/route-map'

import { Head } from 'src/shared/head-meta/head'
import { TemplateContent } from 'src/shared/template'
import { useReadTime } from 'src/shared/hooks/useReadTime'
import { getUrl } from 'src/shared/utils/get-url'

const BlogDiaryId: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const auth = useStore(authStore.store)
  const params = useParams()
  const foundDiary = allDiaries?.find((d) => d.id === params.id)
  //TODO: MAKE A HOOK
  const getLikedIds = (): string[] => JSON.parse(localStorage.getItem('isLiked') || '[]')
  const [isLiked, setIsLiked] = useState(() => {
    const likedIds = getLikedIds()
    if (params.id) return likedIds.includes(params.id)
    else return false
  })

  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const readTime = useReadTime(foundDiary?.content)

  if (allDiaries === null) return <TemplateContent />

  if (!foundDiary) {
    navigate(routeMap.errorNotFound)
    return <TemplateContent />
  }

  const likeToggle = () => {
    const likedIds = getLikedIds()
    if (params.id) {
      const updatedLikedIds = likedIds.includes(params.id)
        ? likedIds.filter((likedId) => likedId !== params.id)
        : [...likedIds, params.id]

      if (updatedLikedIds.length > 0) localStorage.setItem('isLiked', JSON.stringify(updatedLikedIds))
      else localStorage.removeItem('isLiked')
      setIsLiked(!isLiked)
    }
  }

  return (
    <TemplateContent>
      <Head title={foundDiary.title} description={foundDiary.content.slice(0, 240) + '...'} />
      {open && (
        <Notification
          toast
          time={2000}
          icon={<Icons.StatusGood color='brand' />}
          message='Link copied!'
          onClose={() => setOpen(false)}
        />
      )}
      <Heading size='medium' alignSelf='start' margin={{ top: 'xlarge', bottom: 'medium' }}>
        {foundDiary.title}
      </Heading>
      <Box gap='medium' margin={{ bottom: 'medium' }}>
        <Box direction='row' align='center' alignSelf='start'>
          <Box direction='row' align='center' justify='between'>
            <Button
              icon={isLiked ? <Icons.LikeFill color='brand' /> : <Icons.Like color='text' />}
              hoverIndicator
              onClick={likeToggle}
            />
            <Box direction='row' align='center'>
              <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
                ·
              </Text>
            </Box>
            <Box direction='row' align='center' justify='between' gap='small'>
              <Box direction='row' align='center'>
                <Button icon={<Icons.Clock color='text' />} hoverIndicator />
                <Text size='small'>{readTime} min read</Text>
              </Box>
              <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
                ·
              </Text>
            </Box>
          </Box>
          <Box direction='row' align='center' justify='between'>
            <Box direction='row' align='center'>
              <Button icon={<Icons.ShareRounded color='text' />} hoverIndicator
                      onClick={async () => await getUrl(setOpen, foundDiary.id)} />
              <Text size='small'>{'Share'}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box margin={{ bottom: 'medium' }} gap={'medium'}>
        {foundDiary.content.map((block, index) => {
          switch (block.kind) {
            case 'paragraph':
              return <Text key={index}>{block.text}</Text>
            case 'image':
              return <Image key={index} src={block.url} />
            case 'iframe':
              return <iframe key={index} src={block.url} />
          }
        })}

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
                  search: createSearchParams({ tags: [tag] }).toString()
                })
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
