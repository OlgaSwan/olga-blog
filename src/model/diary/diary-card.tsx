import React, { FunctionComponent, PropsWithChildren } from 'react'
import { diaryStore } from './store'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Tag, Text } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

export interface DiaryCardProps {
  id: string
}

export const DiaryCard: FunctionComponent<PropsWithChildren<DiaryCardProps>> = ({ id }) => {
  const allPosts = useStore(diaryStore.store)
  const foundPost = allPosts.find((p) => p.id === id)

  return (
    <Card height='medium' width='large' background='light-1'>
      <CardHeader pad='medium' alignSelf='end'>
        {foundPost && (
          <Box direction='row' flex='grow' gap='small'>
            {foundPost.tags ? foundPost.tags.map((tag) => <Tag size='small' value={tag} />) : <></>}
          </Box>
        )}
      </CardHeader>
      {foundPost && (
        <CardBody pad='medium' gap='medium'>
          <Text size='3xl' weight='bold'>
            {foundPost ? foundPost.title : 'Post not found'}
          </Text>
          <Text size='medium' weight='normal'>
            {foundPost.content}
          </Text>
        </CardBody>
      )}
      {foundPost && (
        <CardFooter pad={{ horizontal: 'small' }} background='background-back'>
          <Box direction='row' align='center'>
            <Button icon={<Icons.Favorite color='red' />} hoverIndicator />
            <Text size='small' weight='normal'>
              {foundPost.likes}
            </Text>
          </Box>
          <Button icon={<Icons.ShareOption color='plain' />} hoverIndicator />
        </CardFooter>
      )}
    </Card>
  )
}
