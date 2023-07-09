import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateAdmin } from '../../shared/template'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AdminTagId: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <Heading level='1' margin={{ bottom: 'medium' }}>
        Tag editor
      </Heading>
    </TemplateAdmin>
  )
}

export default AdminTagId
