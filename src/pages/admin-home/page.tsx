import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateAdmin } from 'src/shared/template'
import { useAuthRedirect } from 'src/model/auth'
import { routeMap } from '../index'

const AdminHome: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Admin panel
      </Heading>
    </TemplateAdmin>
  )
}

export default AdminHome
