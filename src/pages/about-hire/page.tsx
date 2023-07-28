import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'

import { metadata } from 'src/shared/head-meta/metadata'

const AboutHire: FunctionComponent = () => (
  <TemplateContent>
    <Head title={metadata.aboutHire.title} description={metadata.aboutHire.description} />
    <Heading level='2' margin={{ bottom: 'medium' }}>
      Hire me
    </Heading>
  </TemplateContent>
)

export default AboutHire
