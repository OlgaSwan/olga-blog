import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateContent } from '../../shared/template'

const ErrorNotFound: FunctionComponent = () => (
  <TemplateContent>
    <PageHeader size='small' title='Error: not found' margin={{ bottom: 'medium', top: 'medium' }} />
  </TemplateContent>
)

export default ErrorNotFound
