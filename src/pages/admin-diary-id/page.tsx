import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateContent } from '../../shared/template'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminDiaryId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateContent>
      <PageHeader size='small' title='AdminDiaryId' margin={{ bottom: 'medium', top: 'medium' }} />
    </TemplateContent>
  )
}

export default AdminDiaryId
