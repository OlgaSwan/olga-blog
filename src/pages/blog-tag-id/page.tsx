import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateContent } from '../../shared/template'

const BlogTagId: FunctionComponent = () => (
  <TemplateContent>
    <PageHeader size='small' title='Tag' margin={{ bottom: 'large', top: 'large' }} />
  </TemplateContent>
)

export default BlogTagId
