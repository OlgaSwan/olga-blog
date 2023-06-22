import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'

const BlogDiaryId: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Diary' margin={{ bottom: 'large', top: 'large' }} />
  </Template>
)

export default BlogDiaryId
