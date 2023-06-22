import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const ErrorForbidden: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Error: forbidden' margin={{ bottom: 'medium', top: 'medium' }} />
  </Template>
)

export default ErrorForbidden
