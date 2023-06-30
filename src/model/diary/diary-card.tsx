import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Tag, Text } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

import { diaryStore } from './store'

export interface DiaryCardProps {
  id: string
}

export const DiaryCard: FunctionComponent<PropsWithChildren<DiaryCardProps>> = ({ id }) => {
  const allDiaries = useStore(diaryStore.list)
  const foundDiary = allDiaries.find((p) => p.id === id)

  return (
    <Card height='medium' width='large' background='light-1'>
      <CardHeader pad='medium' alignSelf='end'>
        {foundDiary && (
          <Box direction='row' flex='grow' gap='small'>
            {foundDiary.tags ? foundDiary.tags.map((tag) => <Tag size='small' value={tag} />) : <></>}
          </Box>
        )}
      </CardHeader>
      {foundDiary && (
        <CardBody pad='medium' gap='medium'>
          <Text size='3xl' weight='bold'>
            {foundDiary ? foundDiary.title : 'Post not found'}
          </Text>
          <Text size='medium' weight='normal'>
            {foundDiary.content}
          </Text>
        </CardBody>
      )}
      {foundDiary && (
        <CardFooter pad={{ horizontal: 'small' }} background='background-back'>
          <Box direction='row' align='center'>
            <Button icon={<Icons.Favorite color='red' />} hoverIndicator />
            <Text size='small' weight='normal'>
              {foundDiary.likes}
            </Text>
          </Box>
          <Button icon={<Icons.ShareOption color='plain' />} hoverIndicator />
        </CardFooter>
      )}
    </Card>
  )
}
