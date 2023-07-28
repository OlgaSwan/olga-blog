import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { metadata } from 'src/shared/head-meta/metadata'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'

const ErrorForbidden: FunctionComponent = () => (
  <TemplateContent>
    <Head title={metadata.errorForbidden.title} description={metadata.errorForbidden.description} />
    <Heading level='1' margin={{ bottom: 'medium' }}>
      Error: forbidden
    </Heading>
  </TemplateContent>
)

export default ErrorForbidden
