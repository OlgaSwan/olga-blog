import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Post } from './store'
import { Card, CardHeader, CardBody, CardFooter, Box, Button, Text, Tag } from 'grommet'
import * as Icons from 'grommet-icons'

export interface PostCardProps {
  id: string
  posts: Array<Post>
}

export const PostCard: FunctionComponent<PropsWithChildren<PostCardProps>> = ({ id, posts }) => {
  const allPosts = posts
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
