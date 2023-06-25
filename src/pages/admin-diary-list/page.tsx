import React, { FunctionComponent } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, PageHeader, Tag } from 'grommet'
import { useStore } from '@nanostores/react'

import { Template } from '../../shared/template'
import { diaryStore } from '../../model/diary/store'

const AdminDiaryList: FunctionComponent = () => {
  const diaryList = useStore(diaryStore.store)

  return (
    <Template>
      <Box gap='medium'>
        <PageHeader size='small' title='AdminDiaryList' margin={{ bottom: 'medium', top: 'medium' }} />
        <Box gap='small'>
          {diaryList.map((diary) => (
            <Card key={diary.title} gap='small' pad='small'>
              <CardHeader>{diary.title}</CardHeader>
              <CardBody>{diary.content}</CardBody>
              <CardFooter>
                {diary.tags.map((tag) => (
                  <Tag key={tag} value={tag} />
                ))}
              </CardFooter>
            </Card>
          ))}
        </Box>
        <Box>
          <Button label='Add random post' onClick={() => diaryStore.addRandom()} />
        </Box>
      </Box>
    </Template>
  )
}

export default AdminDiaryList
