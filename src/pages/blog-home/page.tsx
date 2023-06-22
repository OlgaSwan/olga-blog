import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const BlogHome: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Blog' margin={{ bottom: 'medium', top: 'medium' }} />
  </Template>
)

export default BlogHome
