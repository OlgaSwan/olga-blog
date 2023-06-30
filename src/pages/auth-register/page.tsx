import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

import { FormCreateAccount } from './form'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AuthRegister: FunctionComponent = () => {
  useAuthRedirect(false, routeMap.home.path)

  return (
    <Template>
      <PageHeader size='small' title='Create an account' margin={{ bottom: 'medium', top: 'medium' }} />
      <FormCreateAccount />
    </Template>
  )
}

export default AuthRegister
