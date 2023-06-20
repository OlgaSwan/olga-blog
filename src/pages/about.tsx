import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../shared/template'

export const About: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='About' margin={{ bottom: 'large' }} />
  </Template>
)
