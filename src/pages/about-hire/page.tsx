import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template-new'

const AboutHire: FunctionComponent = () => (
  <Template
    main={(
      <PageHeader size='small' title='Hire me' margin={{ bottom: 'medium', top: 'medium' }} />
    )}
  />
)

export default AboutHire
