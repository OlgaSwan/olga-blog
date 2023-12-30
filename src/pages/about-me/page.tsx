import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import { About } from 'src/pages/about-me/about'
import { metadata } from 'src/shared/head-meta/metadata'

const AboutMe: FunctionComponent = () => {
  return (
    <TemplateContent>
      <Head title={metadata.aboutMe.title} description={metadata.aboutMe.description} />

      <Heading level='2' margin={{ bottom: 'medium' }}>
        About me
      </Heading>
      <About />
    </TemplateContent>
  )
}

export default AboutMe
