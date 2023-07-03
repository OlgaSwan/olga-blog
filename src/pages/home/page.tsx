import React, { FunctionComponent } from 'react'
import { PageHeader, Paragraph, Button, Box, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { routeMap } from '..'
import { LinkCustom } from '../../shared/link-custom'

import { Template } from '../../shared/template'
import { DiaryList } from '../../model/diary'

const Home: FunctionComponent = () => (
  <Template>
    <PageHeader
      size='medium'
      title={`Howdy, I'm Olga!`}
      subtitle={
        <Box direction='row' gap='small' margin={{ top: 'medium' }}>
          <Text size='large'>And welcome to my Blog</Text>
          <Icons.Diamond size='medium' color='brand' />
        </Box>
      }
      margin={{ top: 'medium' }}
    />
    <Paragraph style={{ maxWidth: '768px' }} margin={{ bottom: 'medium' }} size='large'>
      I'm a frontend developer from Moscow. I <LinkCustom label='write' href={routeMap.blogHome.path} /> about code,
      ux/ui and art. <br /> Passionate about traditional and digital drawing, gaming and paleontology.
    </Paragraph>
    <PageHeader size='small' title='Latest posts' margin={{ bottom: 'medium', top: 'small' }} />
    <DiaryList isSliced={true} />
    <Button
      hoverIndicator
      alignSelf='start'
      size='large'
      margin={{ bottom: 'large', top: 'large' }}
      label='Show more'
      href={routeMap.blogHome.path}
    />
    <PageHeader size='small' title='Technology stack' margin={{ bottom: 'small', top: 'small' }} />
    <Paragraph style={{ maxWidth: '768px' }} margin={{ bottom: 'medium' }} size='large'>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>
          Est, corporis. <LinkCustom label='click here' href='#' />
        </li>
        <li>Pizda.</li>
      </ul>
    </Paragraph>
  </Template>
)

export default Home
