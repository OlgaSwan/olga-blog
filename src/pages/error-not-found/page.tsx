import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const ErrorNotFound: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Error: not found' margin={{ bottom: 'medium', top: 'medium' }} />
  </Template>
)

export default ErrorNotFound
