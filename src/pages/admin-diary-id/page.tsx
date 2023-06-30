import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminDiaryId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <Template>
      <PageHeader size='small' title='AdminDiaryId' margin={{ bottom: 'medium', top: 'medium' }} />
    </Template>
  )
}

export default AdminDiaryId
