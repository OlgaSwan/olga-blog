import React, { FunctionComponent } from 'react'
import { PageHeader, Button } from 'grommet'

import { routeMap } from '..'

import { Template } from '../../shared/template'
import { DiaryList } from '../../model/diary'

const Home: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='Home' margin={{ bottom: 'medium', top: 'medium' }} />
    <DiaryList isSliced={true} />
    <Button
      hoverIndicator
      alignSelf='start'
      size='large'
      margin={{ bottom: 'large', top: 'large' }}
      label='Show more'
      href={routeMap.blogHome.path}
    />
  </Template>
)

export default Home
