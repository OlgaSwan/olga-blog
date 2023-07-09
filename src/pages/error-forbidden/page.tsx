import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from 'src/shared/template'

const ErrorForbidden: FunctionComponent = () => (
  <TemplateContent>
    <Heading level='1' margin={{ bottom: 'medium' }}>
      Error: forbidden
    </Heading>
  </TemplateContent>
)

export default ErrorForbidden
