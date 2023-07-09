import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateCommon } from '../../shared/template-common'

const AboutHire: FunctionComponent = () => (
  <TemplateCommon>
    <PageHeader size='small' title='Hire me' margin={{ bottom: 'medium', top: 'medium' }} />
  </TemplateCommon>
)

export default AboutHire
