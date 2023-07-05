import React, { FunctionComponent, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, redirect } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Tag, Text, PageHeader, ResponsiveContext } from 'grommet'
import * as Icons from 'grommet-icons'

import { Template } from '../../shared/template'
import { diaryStore } from '../../model/diary'
import { DiaryExternal } from '../../model/diary'
import { routeMap } from '..'

const BlogDiaryId: FunctionComponent = () => {
  const allDiaries = useStore(diaryStore.list)
  const [Diary, setDiary] = useState<DiaryExternal>()
  const params = useParams()
  const navigate = useNavigate()
  const screenSize = useContext(ResponsiveContext)
  useEffect(() => {
    const foundDiary = allDiaries.find((p) => p.id === params.id)
    if (!foundDiary) {
      navigate(routeMap.errorNotFound.path)
    }
    setDiary(foundDiary)
  }, [])

  return (
    <Template>
      {Diary && (
        <>
          <PageHeader size='small' title='Diary' margin={{ bottom: 'large', top: 'large' }} />
          <Card width='large' background='light-1'>
            <CardHeader direction='column' pad='medium' focusIndicator={false}>
              <Text size='3xl' weight='bold' alignSelf='start'>
                {Diary!.title}
              </Text>
            </CardHeader>
            <CardBody pad='medium' gap='medium' focusIndicator={false}>
              <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
                {Diary!.content}
              </Text>
              <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
                {Diary!.content} {Diary!.content}
              </Text>
              <Text size='medium' weight='normal' margin={{ bottom: 'medium' }}>
                {Diary!.content} {Diary!.content}
              </Text>
              {screenSize !== 'small' && (
                <Box direction='row' flex='grow' gap='small' alignSelf='start'>
                  {Diary!.tags.map((tag) => (
                    <Tag key={tag} size='small' value={tag} />
                  ))}
                </Box>
              )}
            </CardBody>
            <CardFooter pad={{ horizontal: 'small' }} background='background-back'>
              <Box direction='row' align='center'>
                <Button icon={<Icons.Favorite color='red' />} hoverIndicator />
                <Text size='small' weight='normal'>
                  {Diary!.likes}
                </Text>
              </Box>
              <Button icon={<Icons.ShareOption color='plain' />} hoverIndicator />
            </CardFooter>
          </Card>
        </>
      )}
    </Template>
  )
}

export default BlogDiaryId
