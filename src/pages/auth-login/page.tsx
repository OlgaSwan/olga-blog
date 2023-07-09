import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateContent } from '../../shared/template'

import { FormLogin } from './form'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AuthLogin: FunctionComponent = () => {
  useAuthRedirect(false, routeMap.home.path)

  return (
    <TemplateContent>
      <PageHeader size='small' title='Login' margin={{ bottom: 'medium', top: 'medium' }} />
      <FormLogin />
    </TemplateContent>
  )
}

export default AuthLogin
