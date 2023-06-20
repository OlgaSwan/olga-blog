import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../components/template'
import { FormLogin } from '../components/form-login'

export const Login: FunctionComponent = () => {
  return (
    <Template>
      <PageHeader size='small' title='Login' margin={{ bottom: 'large' }} />
      <FormLogin />
    </Template>
  )
}
