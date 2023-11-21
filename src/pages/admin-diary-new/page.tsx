import React, { FunctionComponent } from 'react'
import { Box, Heading } from 'grommet'

import { TemplateAdmin } from 'src/shared/template'
import { diaryStore } from 'src/model/diary'
import { useAuthRedirect } from 'src/model/auth'

import { Head } from 'src/shared/head-meta/head'

import { routeMap } from 'src/shared/route-map'
import { metadata } from 'src/shared/head-meta/metadata'
import { AdminDiaryIdEditor } from 'src/model/diary/diary-editor'
import { useNavigate } from 'react-router-dom'

const AdminDiaryNew: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden)
  const navigate = useNavigate()

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
            content: [
              {
                kind: 'paragraph',
                text: '',
              },
            ],
            tags: [],
            timestamp: Date.now(),
          }}
          onSubmit={async value => {
            await diaryStore.add(value)
            navigate(routeMap.adminDiaryList)
          }}
        />
      </Box>
    </TemplateAdmin>
  )
}

export default AdminDiaryNew
