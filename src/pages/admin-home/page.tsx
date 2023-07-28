import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateAdmin } from 'src/shared/template'
import { useAuthRedirect } from 'src/model/auth'
import { Head } from 'src/shared/head-meta/head'

import { routeMap } from '../index'
import { metadata } from 'src/shared/head-meta/metadata'

const AdminHome: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <Head title={metadata.adminHome.title} description={metadata.adminHome.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Admin panel
      </Heading>
    </TemplateAdmin>
  )
}

export default AdminHome
