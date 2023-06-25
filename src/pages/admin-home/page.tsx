import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const AdminHome: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='AdminHome' margin={{ bottom: 'medium', top: 'medium' }} />
  </Template>
)

export default AdminHome
