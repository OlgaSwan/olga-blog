import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../components/template'

export const Diary: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Diary' margin={{ bottom: 'large' }} />
  </Template>
)
