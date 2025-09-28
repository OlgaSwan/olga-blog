import React, { FunctionComponent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Box, Button, Heading, PageHeader, Paragraph } from 'grommet'
import * as Icons from 'grommet-icons'

import { LinkCustom } from 'src/shared/utils/link-custom'
import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import { DiaryList } from 'src/model/diary'
import { routeMap } from 'src/shared/route-map'
import { metadata } from 'src/shared/head-meta/metadata'
import Content from 'src/pages/home/content'

gsap.registerPlugin(ScrollTrigger)

const Home: FunctionComponent = () => {
  return (
    <TemplateContent>
      <Head title={metadata.home.title} description={metadata.home.description} />
      <Heading level='1' margin={{ top: 'large', bottom: 'medium' }} data-testid='home-page'>
        Howdy, I'm Olga!
      </Heading>
      <Box direction='row' gap='xsmall'>
        <Paragraph fill size='large' margin={{ bottom: 'medium' }}>
          And welcome to my Blog
        </Paragraph>
        <Icons.Diamond size='medium' color='brand' />
      </Box>
      <Paragraph fill size='large' margin={{ bottom: 'medium' }}>
        I'm a frontend developer who <LinkCustom label='writes' href={routeMap.blogHome} color='brand' /> about code and
        life. <br />
        Passionate about coding, especially in TypeScript and React. <br /> Interested in learning different development
        methodologies and tools that can help me create efficient and scalable software.
      </Paragraph>
      <PageHeader size='small' title='Latest posts' margin={{ bottom: 'medium' }} />
      <DiaryList isSliced={true} />
      <Button
        primary
        alignSelf='start'
        size='medium'
        margin={{ bottom: 'large', top: 'large' }}
        label='Show more'
        href={routeMap.blogHome}
      />
      <Heading level='2' margin={{ top: 'medium', bottom: 'large' }}>
        My skill set
      </Heading>
      <Content />
    </TemplateContent>
  )
}

export default Home
