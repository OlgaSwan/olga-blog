import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateCommon } from '../../shared/template-common'

const ErrorForbidden: FunctionComponent = () => (
  <TemplateCommon>
    <PageHeader size='small' title='Error: forbidden' margin={{ bottom: 'medium', top: 'medium' }} />
  </TemplateCommon>
)

export default ErrorForbidden
