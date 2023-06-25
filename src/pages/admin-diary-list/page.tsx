import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const AdminDiaryList: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='AdminDiaryList' margin={{ bottom: 'medium', top: 'medium' }} />
  </Template>
)

export default AdminDiaryList
