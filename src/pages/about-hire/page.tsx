import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateContent } from '../../shared/template'

const AboutHire: FunctionComponent = () => (
  <TemplateContent>
    <PageHeader size='small' title='Hire me' margin={{ bottom: 'medium', top: 'medium' }} />
  </TemplateContent>
)

export default AboutHire
