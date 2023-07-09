import React, { FunctionComponent } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Tag } from 'grommet'
import { useStore } from '@nanostores/react'
import * as Icons from 'grommet-icons'

import { TemplateAdmin } from '../../shared/template'
import { diaryStore } from '../../model/diary'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminDiaryList: FunctionComponent = () => {
  const diaryList = useStore(diaryStore.list)
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <Heading level='1' margin={{ bottom: 'medium' }}>
        Diary list
      </Heading>
      <Box direction='column' gap='medium'>
        <Box direction='row' justify='start' gap='small' wrap>
          <Button label='Create post' primary icon={<Icons.Edit />} />
          <Button label='Create random post' icon={<Icons.Risk />} onClick={() => diaryStore.addRandom()} />
          <Button
            label='Delete all posts'
            icon={<Icons.Threats />}
            color='status-critical'
            onClick={() => diaryStore.removeAll()}
          />
        </Box>
        <Box gap='medium'>
          {diaryList.map((diary) => (
            <Card key={diary.title} gap='small' pad='medium' background='background-contrast'>
              <CardHeader>
                <Heading size='small'>{diary.title}</Heading>
              </CardHeader>
              <CardBody>{diary.content}</CardBody>
              <CardFooter direction='column' justify='start' align='start' gap='small'>
                <Box direction='row' justify='start' gap='xsmall' wrap>
                  {diary.tags.map((tag) => (
                    <Tag key={tag} value={tag} />
                  ))}
                  <Tag value={`${diary.likes} likes`} />
                </Box>
                <Box direction='row' justify='start' gap='xsmall' wrap>
                  <Button label='Edit' icon={<Icons.Edit />} />
                  <Button
                    label='Delete'
                    icon={<Icons.Trash />}
                    color='status-critical'
                    onClick={() => diaryStore.remove(diary.id)}
                  />
                </Box>
              </CardFooter>
            </Card>
          ))}
        </Box>
      </Box>
    </TemplateAdmin>
  )
}

export default AdminDiaryList
