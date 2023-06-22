import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const AuthRecover: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Recover password' margin={{ bottom: 'large', top: 'large' }} />
  </Template>
)

export default AuthRecover
