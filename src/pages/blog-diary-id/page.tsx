import React, { FunctionComponent, useState } from 'react'
import { createPath, createSearchParams, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Heading, Image, Tag, Text } from 'grommet'
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
  //TODO: MAKE A HOOK
  const getLikedIds = (): string[] => JSON.parse(localStorage.getItem('isLiked') || '[]')
  const [isLiked, setIsLiked] = useState(() => {
    const likedIds = getLikedIds()
    //TODO: WHAT THE ACTUAL FUCK IS THIS SHIT?
    if (typeof params.id === 'string') return likedIds.includes(params.id)
    else return false
  })
  const navigate = useNavigate()

  if (allDiaries === null) return <TemplateContent />

  const foundDiary = allDiaries.find((d) => d.id === params.id)

  if (!foundDiary) {
    navigate(routeMap.errorNotFound)
    return <TemplateContent />
  }

  const likeToggle = () => {
    const likedIds = getLikedIds()
    //TODO: ????
    if (typeof params.id === 'string') {
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
                <Text size='small'>69 min read</Text>
              </Box>
              <Text size='small' weight='bold' style={{ lineHeight: '20px' }}>
                ·
              </Text>
            </Box>
          </Box>
          <Box direction='row' align='center' justify='between'>
            <Box direction='row' align='center'>
              <Button icon={<Icons.ShareRounded color='text' />} hoverIndicator />
              <Text size='small'>{'Share'}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box margin={{ bottom: 'medium' }} gap={'medium'}>
        {foundDiary.content.map(block => {
          switch (block.kind) {
            case 'paragraph':
              return <Text>{block.text}</Text>
            case 'image':
              return <Image src={block.url} />
            case 'iframe':
              return <iframe src={block.url} />
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
