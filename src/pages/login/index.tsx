import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

import { FormLogin } from './form'

export const Login: FunctionComponent = () => {
  return (
    <Template>
      <PageHeader size='small' title='Login' margin={{ bottom: 'large' }} />
      <FormLogin />
    </Template>
  )
}
