import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateCommon } from '../../shared/template-common'

const ErrorNotFound: FunctionComponent = () => (
  <TemplateCommon>
    <PageHeader size='small' title='Error: not found' margin={{ bottom: 'medium', top: 'medium' }} />
  </TemplateCommon>
)

export default ErrorNotFound
