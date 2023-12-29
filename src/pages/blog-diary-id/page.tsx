import React, { FunctionComponent } from 'react'
import { createPath, createSearchParams, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Heading, Image, Tag, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { diaryStore, SharedBtn } from 'src/model/diary'
import { authStore } from 'src/model/auth'
import { routeMap } from 'src/shared/route-map'

import { Head } from 'src/shared/head-meta/head'
import { TemplateContent } from 'src/shared/template'
import { useReadTime } from 'src/shared/hooks/useReadTime'
import { useIsLiked } from 'src/shared/hooks/useIsLiked'

const BlogDiaryId: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const auth = useStore(authStore.store)
  const params = useParams()
  const foundDiary = allDiaries?.find(d => d.id === params.id)

  const navigate = useNavigate()
  const readTime = useReadTime(foundDiary?.content)
  const [isLiked, likeToggle] = useIsLiked(foundDiary?.id)

  if (allDiaries === null) return <TemplateContent />

  if (!foundDiary) {
    navigate(routeMap.errorNotFound)
    return <TemplateContent />
  }
  const date = new Date(foundDiary.timestamp).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
  })

  return (
    <TemplateContent>
      <Head title={foundDiary.title} description={foundDiary.content.slice(0, 240) + '...'} />
      <Heading size='medium' alignSelf='start' margin={{ bottom: 'medium' }}>
        {foundDiary.title}
      </Heading>
      <Box gap='medium' margin={{ bottom: 'medium' }}>
        <Box direction='row' align='center' alignSelf='start'>
          <Box direction='row' align='center' justify='between'>
            <Button
              icon={isLiked ? <Icons.LikeFill color='brand' size='22px' /> : <Icons.Like color='text' size='22px' />}
              hoverIndicator
              style={{ borderRadius: '4px' }}
              onClick={likeToggle}
            />
            <Text size='small' weight='bold' style={{ lineHeight: '24px' }}>
              ·
            </Text>
            <Box direction='row' align='center' justify='between' gap='small'>
              <Box direction='row' align='center'>
                <Button icon={<Icons.Clock color='text' size='24px' />} />
                <Text size='small'>{readTime} min read</Text>
              </Box>
              <Text size='small' weight='bold' style={{ lineHeight: '24px' }}>
                ·
              </Text>
            </Box>
          </Box>
          <Box direction='row' align='center' justify='between' gap='small'>
            <Box direction='row' align='center'>
              <SharedBtn diary_id={foundDiary.id} size='24px' />
              <Text size='small'>{'Share'}</Text>
            </Box>
            <Text size='small' weight='bold' style={{ lineHeight: '24px' }}>
              ·
            </Text>
            <Text size='small'>{date}</Text>
          </Box>
        </Box>
      </Box>
      <Box margin={{ bottom: 'medium' }} gap={'medium'}>
        {foundDiary.content.map((block, index) => {
          switch (block.kind) {
            case 'paragraph':
              return <Text key={index}>{block.text}</Text>
            case 'title&paragraph':
              return (
                <Box gap='xsmall'>
                  <Text size='large' key={index}>
                    {block.title}
                  </Text>
                  <Text key={index}>{block.text}</Text>
                </Box>
              )
            case 'title':
              return (
                <Text size='xlarge' weight='bold' key={index}>
                  {block.text}
                </Text>
              )
            case 'image':
              return <Image key={index} src={block.url} style={{ borderRadius: '12px' }} />
            case 'iframe':
              return <iframe key={index} src={block.url} />
            default:
              return null
          }
        })}
      </Box>
      <Box direction='row' flex='grow' gap='small' alignSelf='start' margin={{ top: 'medium', bottom: 'large' }}>
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
