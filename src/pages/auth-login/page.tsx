import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from 'src/shared/template'
import { FormLogin } from './form-login'
import { useAuthRedirect } from 'src/model/auth'

import { Head } from 'src/shared/head-meta/head'

import { metadata } from 'src/shared/head-meta/metadata'
import { routeMap } from 'src/shared/route-map'

const AuthLogin: FunctionComponent = () => {
  useAuthRedirect(false, routeMap.home)

  return (
    <TemplateContent>
      <Head title={metadata.authLogin.title} description={metadata.authLogin.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Login
      </Heading>
      <FormLogin />
    </TemplateContent>
  )
}

export default AuthLogin
