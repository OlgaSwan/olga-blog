import React, { FunctionComponent } from 'react'
import { Heading } from 'grommet'

import { TemplateContent } from 'src/shared/template'

const BlogTagId: FunctionComponent = () => (
  <TemplateContent>
    <Heading level='2' margin={{ bottom: 'medium' }}>
      Tag
    </Heading>
  </TemplateContent>
)

export default BlogTagId
