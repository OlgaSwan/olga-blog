import React, { FunctionComponent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Heading, TextInput, TextArea } from 'grommet'
import * as Icons from 'grommet-icons'

import { TemplateAdmin } from 'src/shared/template'
import { diaryStore } from 'src/model/diary'
import { useAuthRedirect } from 'src/model/auth'
import { routeMap } from '../index'

const AdminDiaryId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)
  const allDiaries = useStore(diaryStore.list)
  const params = useParams()
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')

  const addOrEdit = () => {
    const foundDiary = allDiaries?.find((p) => p.id === params.id)
    if (foundDiary) diaryStore.edit({ ...foundDiary, title: titleValue, content: contentValue })
    else
      diaryStore.add({ title: titleValue, content: contentValue, tags: ['TS', 'CSS', 'react'], minRead: 4, likes: 138 })
  }

  const isDisabled = () => {
    if (titleValue && contentValue) return false
    return true
  }

  useEffect(() => {
    const foundDiary = allDiaries?.find((p) => p.id === params.id)
    if (foundDiary) {
      setTitleValue(foundDiary.title)
      setContentValue(foundDiary.content)
    }
  }, [allDiaries])

  if (allDiaries === null) return <TemplateAdmin />

  return (
    <TemplateAdmin>
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Diary editor
      </Heading>
      <Box gap='small' margin={{ top: 'medium' }}>
        <Box>
          <TextInput placeholder='Title' value={titleValue} onChange={(event) => setTitleValue(event.target.value)} />
        </Box>
        <Box>
          <TextArea
            placeholder='Content'
            value={contentValue}
            onChange={(event) => setContentValue(event.target.value)}
          />
        </Box>
        <Box direction='row' gap='small' margin={{ top: 'small' }}>
          <Heading level='4'>Add tags</Heading>
          <Icons.AddCircle size='medium' color='placeholder' />
        </Box>
        <Button
          primary
          label='Submit'
          size='small'
          margin={{ top: 'medium' }}
          style={{ width: '200px' }}
          onClick={addOrEdit}
          disabled={isDisabled()}
        />
      </Box>
    </TemplateAdmin>
  )
}

export default AdminDiaryId
