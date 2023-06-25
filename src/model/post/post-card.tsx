import React, { FunctionComponent, PropsWithChildren } from 'react'
import { allPostsStore } from './store'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Tag, Text } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

export interface PostCardProps {
  id: string
}

export const PostCard: FunctionComponent<PropsWithChildren<PostCardProps>> = ({ id }) => {
  const allPosts = useStore(allPostsStore)
  const foundPost = allPosts.find((p) => p.id === id)

  return (
    <Card height='medium' width='large' background='light-1'>
      <CardHeader pad='medium' align='start'>
        <Text size='3xl' weight='bold'>
          {foundPost ? foundPost.title : 'Post not found'}
        </Text>
        {foundPost && (
          <Box direction='row' flex='grow' gap='small'>
            {foundPost.tags ? foundPost.tags.map((tag) => <Tag size='small' value={tag} />) : <></>}
          </Box>
        )}
      </CardHeader>
      {foundPost && (
        <CardBody pad='medium'>
          <Text size='medium' weight='normal'>
            {foundPost.desc}
          </Text>
        </CardBody>
      )}
      {foundPost && (
        <CardFooter pad={{ horizontal: 'small' }} background='light-2'>
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
