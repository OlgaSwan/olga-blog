import React, { FunctionComponent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Button, Heading, PageHeader, Paragraph } from 'grommet'
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
      <Paragraph fill size='large' margin={{ bottom: 'medium' }}>
        And welcome to my Blog
        <Icons.Diamond size='medium' color='brand' />
      </Paragraph>
      <Paragraph fill size='large' margin={{ bottom: 'medium' }}>
        I'm a frontend developer from Moscow. I <LinkCustom label='write' href={routeMap.blogHome} color='brand' />{' '}
        about code, ux/ui and art. <br />
        Passionate about traditional and digital drawing, gaming and paleontology.
      </Paragraph>
      <PageHeader size='small' title='Latest posts' margin={{ bottom: 'medium', top: 'small' }} />
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
