import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../shared/template'
import { PostList } from '../model/post/post-list'

export const Home: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Home' margin={{ bottom: 'medium', top: 'medium' }} />
    <PostList />
  </Template>
)
