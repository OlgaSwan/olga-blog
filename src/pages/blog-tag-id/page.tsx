import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { TemplateCommon } from '../../shared/template-common'

const BlogTagId: FunctionComponent = () => (
  <TemplateCommon>
    <PageHeader size='small' title='Tag' margin={{ bottom: 'large', top: 'large' }} />
  </TemplateCommon>
)

export default BlogTagId
