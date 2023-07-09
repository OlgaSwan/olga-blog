import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateAdmin } from '../../shared/template'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminHome: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <PageHeader size='small' title='AdminHome' margin={{ bottom: 'medium', top: 'medium' }} />
    </TemplateAdmin>
  )
}

export default AdminHome
