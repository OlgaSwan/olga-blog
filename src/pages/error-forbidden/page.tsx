import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateContent } from '../../shared/template'

const ErrorForbidden: FunctionComponent = () => (
  <TemplateContent>
    <PageHeader size='small' title='Error: forbidden' margin={{ bottom: 'medium', top: 'medium' }} />
  </TemplateContent>
)

export default ErrorForbidden
