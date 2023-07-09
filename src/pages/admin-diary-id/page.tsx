import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateAdmin } from 'src/shared/template'
import { useAuthRedirect } from 'src/model/auth'
import { routeMap } from '../index'

const AdminDiaryId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <Heading level='1' margin={{ bottom: 'medium' }}>
        Diary editor
      </Heading>
    </TemplateAdmin>
  )
}

export default AdminDiaryId
