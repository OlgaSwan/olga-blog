import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Heading, TextInput, TextArea } from 'grommet'
import * as Icons from 'grommet-icons'

import { TemplateAdmin } from 'src/shared/template'
import { useAuthRedirect } from 'src/model/auth'
import { routeMap } from '../index'

const AdminDiaryId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')

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
        <Button primary label='Create' size='small' margin={{ top: 'medium' }} style={{ width: '200px' }} />
      </Box>
    </TemplateAdmin>
  )
}

export default AdminDiaryId
