import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import { Hire } from 'src/pages/about-hire/hire'
import { metadata } from 'src/shared/head-meta/metadata'

const AboutHire: FunctionComponent = () => {
  return (
    <TemplateContent>
      <Head title={metadata.aboutHire.title} description={metadata.aboutHire.description} />
      <Heading level='2' margin={{ bottom: 'xlarge' }}>
        Hire me
      </Heading>
      <Hire />
    </TemplateContent>
  )
}

export default AboutHire
