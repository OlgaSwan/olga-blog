import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateCommon } from '../../shared/template-common'

import { FormLogin } from './form'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AuthLogin: FunctionComponent = () => {
  useAuthRedirect(false, routeMap.home.path)

  return (
    <TemplateCommon>
      <PageHeader size='small' title='Login' margin={{ bottom: 'medium', top: 'medium' }} />
      <FormLogin />
    </TemplateCommon>
  )
}

export default AuthLogin
