import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from '../../shared/template'

import { FormLogin } from './form'
import { useAuthRedirect } from '../../model/auth'
import { routeMap } from '../index'

const AuthLogin: FunctionComponent = () => {
  useAuthRedirect(false, routeMap.home.path)

  return (
    <TemplateContent>
      <Heading level='1' margin={{ bottom: 'medium' }}>
        Login
      </Heading>
      <FormLogin />
    </TemplateContent>
  )
}

export default AuthLogin
