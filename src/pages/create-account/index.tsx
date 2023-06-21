import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

import { FormCreateAccount } from './form'

export const CreateAccount: FunctionComponent = () => {
  return (
    <Template>
      <PageHeader size='small' title='Create an account' margin={{ bottom: 'medium', top: 'medium' }} />
      <FormCreateAccount />
    </Template>
  )
}
