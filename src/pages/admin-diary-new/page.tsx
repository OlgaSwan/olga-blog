import React, { FunctionComponent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Button, Heading, TextInput, TextArea } from 'grommet'
import * as Icons from 'grommet-icons'

import { TemplateAdmin } from 'src/shared/template'
import { diaryStore } from 'src/model/diary'
import { useAuthRedirect } from 'src/model/auth'

import { Head } from 'src/shared/head-meta/head'

import { routeMap } from 'src/shared/route-map'
import { metadata } from 'src/shared/head-meta/metadata'
import { AdminDiaryIdEditor } from 'src/model/diary/diary-editor'

const AdminDiaryNew: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden)

  return (
    <TemplateAdmin>
      <Head title={metadata.adminDiaryId.title} description={metadata.adminDiaryId.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Diary editor
      </Heading>
      <Box gap='small' margin={{ top: 'medium' }}>
        <AdminDiaryIdEditor
          initialValue={{
            title: '',
            content: [{
              kind: 'paragraph',
              text: ''
            }],
            tags: [],
          }}
          onChange={value => console.log(value)}
        />
        <Button
          primary
          label='Submit'
          size='small'
          margin={{ top: 'medium' }}
          style={{ width: '200px' }}
          onClick={() => alert('АХАХАХАХАХАХААХХААХАХАХАХАХА')}
        />
      </Box>
    </TemplateAdmin>
  )
}

export default AdminDiaryNew
