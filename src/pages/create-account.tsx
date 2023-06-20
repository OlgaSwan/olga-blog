import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../components/template'
import { FormCreateAccount } from '../components/form-create-account'

export const CreateAccount: FunctionComponent = () => {
  return (
    <Template>
      <PageHeader size='small' title='Create an account' margin={{ bottom: 'large' }} />
      <FormCreateAccount />
    </Template>
  )
}
