import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

import { FormLogin } from './form'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AuthLogin: FunctionComponent = () => {
  useAuthRedirect(false, routeMap.home.path)

  return (
    <Template>
      <PageHeader size='small' title='Login' margin={{ bottom: 'medium', top: 'medium' }} />
      <FormLogin />
    </Template>
  )
}

export default AuthLogin
