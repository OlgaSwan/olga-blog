import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { metadata } from 'src/shared/head-meta/metadata'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'

const ErrorNotFound: FunctionComponent = () => (
  <TemplateContent>
    <Head title={metadata.errorNotFound.title} description={metadata.errorNotFound.description} />
    <Heading level='1' margin={{ bottom: 'medium' }}>
      Error: not found
    </Heading>
  </TemplateContent>
)

export default ErrorNotFound
