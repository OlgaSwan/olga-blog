import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const AdminUserList: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='AdminUserList' margin={{ bottom: 'medium', top: 'medium' }} />
  </Template>
)

export default AdminUserList
