import React, { FunctionComponent } from 'react'
import { PageHeader } from 'grommet'

import { Template } from '../../shared/template'
import { DiaryList } from '../../model/diary'

const Home: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Home' margin={{ bottom: 'medium', top: 'medium' }} />
    <DiaryList />
  </Template>
)

export default Home
