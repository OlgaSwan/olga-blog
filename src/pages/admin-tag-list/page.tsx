import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateCommon } from '../../shared/template-common'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminTagList: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateCommon>
      <PageHeader size='small' title='AdminTagList' margin={{ bottom: 'medium', top: 'medium' }} />
    </TemplateCommon>
  )
}

export default AdminTagList
