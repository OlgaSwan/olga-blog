import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const BlogTagId: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Tag' margin={{ bottom: 'large', top: 'large' }} />
  </Template>
)

export default BlogTagId
