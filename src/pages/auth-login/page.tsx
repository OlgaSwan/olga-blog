import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

import { FormLogin } from './form'

const AuthLogin: FunctionComponent = () => {
  return (
    <Template>
      <PageHeader size='small' title='Login' margin={{ bottom: 'medium', top: 'medium' }} />
      <FormLogin />
    </Template>
  )
}

export default AuthLogin
