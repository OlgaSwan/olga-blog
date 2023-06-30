import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminTagId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <Template>
      <PageHeader size='small' title='AdminTagId' margin={{ bottom: 'medium', top: 'medium' }} />
    </Template>
  )
}

export default AdminTagId
