import React, { FunctionComponent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { Box, Heading } from 'grommet'

import { TemplateAdmin } from 'src/shared/template'
import { DiaryExternal, DiaryInternal, diaryStore } from 'src/model/diary'
import { useAuthRedirect } from 'src/model/auth'

import { Head } from 'src/shared/head-meta/head'

import { routeMap } from 'src/shared/route-map'
import { metadata } from 'src/shared/head-meta/metadata'
import { AdminDiaryIdEditor } from 'src/model/diary/diary-editor'

const AdminDiaryId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden)
  const allDiaries = useStore(diaryStore.list)
  const params = useParams()
  const navigate = useNavigate()
  const foundDiary = allDiaries?.find(d => d.id === params.id)

  if (!allDiaries) return <TemplateAdmin />
  if (!foundDiary) return <TemplateAdmin />

  const updateDiary = async (value: DiaryInternal) => {
    await diaryStore.edit({ id: foundDiary.id, ...value } as DiaryExternal)
    navigate(routeMap.blogDiaryId(foundDiary.id))
  }

  return (
    <TemplateAdmin>
      <Head title={metadata.adminDiaryId.title} description={metadata.adminDiaryId.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Diary editor
      </Heading>
      <Box gap='small' margin={{ top: 'medium' }}>
        <AdminDiaryIdEditor initialValue={foundDiary} onSubmit={value => updateDiary(value)} />
      </Box>
    </TemplateAdmin>
  )
}

export default AdminDiaryId
