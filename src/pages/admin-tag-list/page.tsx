import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateAdmin } from 'src/shared/template'
import { useAuthRedirect } from 'src/model/auth'
import { Head } from 'src/shared/head-meta/head'

import { routeMap } from '../index'
import { metadata } from 'src/shared/head-meta/metadata'

const AdminTagList: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden.path)

  return (
    <TemplateAdmin>
      <Head title={metadata.adminTagList.title} description={metadata.adminTagList.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Tag list
      </Heading>
    </TemplateAdmin>
  )
}

export default AdminTagList
