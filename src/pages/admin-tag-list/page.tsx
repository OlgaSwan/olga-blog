import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateAdmin } from '../../shared/template'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminTagList: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <PageHeader size='small' title='AdminTagList' margin={{ bottom: 'medium', top: 'medium' }} />
    </TemplateAdmin>
  )
}

export default AdminTagList
