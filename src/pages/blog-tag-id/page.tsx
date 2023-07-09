import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from '../../shared/template'

const BlogTagId: FunctionComponent = () => (
  <TemplateContent>
    <Heading level='1' margin={{ bottom: 'medium' }}>
      Tag
    </Heading>
  </TemplateContent>
)

export default BlogTagId
