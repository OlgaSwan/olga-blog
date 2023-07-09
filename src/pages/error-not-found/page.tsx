import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from '../../shared/template'

const ErrorNotFound: FunctionComponent = () => (
  <TemplateContent>
    <Heading level='1' margin={{ bottom: 'medium' }}>
      Error: not found
    </Heading>
  </TemplateContent>
)

export default ErrorNotFound
