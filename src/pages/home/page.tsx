import React, { FunctionComponent } from 'react'
import { Button, Heading, PageHeader, Paragraph, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { LinkCustom } from 'src/shared/utils/link-custom'
import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import { DiaryList } from 'src/model/diary'
import { routeMap } from 'src/shared/route-map'
import { metadata } from 'src/shared/head-meta/metadata'

const Home: FunctionComponent = () => (
  <TemplateContent>
    <Head title={metadata.home.title} description={metadata.home.description} />
    <Heading level='1' margin={{ top: 'large', bottom: 'medium' }}>
      Howdy, I'm Olga!
    </Heading>
    <Paragraph fill size='large' margin={{ bottom: 'medium' }}>
      And welcome to my Blog
      <Icons.Diamond size='medium' color='brand' />
    </Paragraph>
    <Paragraph fill size='large' margin={{ bottom: 'medium' }}>
      I'm a frontend developer from Moscow. I <LinkCustom label='write' href={routeMap.blogHome} color='brand' /> about code, ux/ui and art.{' '}
      <br />
      Passionate about traditional and digital drawing, gaming and paleontology.
    </Paragraph>
    <PageHeader size='small' title='Latest posts' margin={{ bottom: 'medium', top: 'small' }} />
    <DiaryList isSliced={true} />
    <Button
      hoverIndicator
      alignSelf='start'
      size='medium'
      margin={{ bottom: 'large', top: 'large' }}
      label='Show more'
      href={routeMap.blogHome}
    />
    <Heading level='2' margin={{ top: 'medium', bottom: 'medium' }}>
      My skill set
    </Heading>
    <Heading level='3' margin={{ bottom: 'small' }}>
      Hard-skills
    </Heading>
    <Text margin={{ bottom: 'small' }}>
      I've worked with a lot of technologies on pet-projects and in production
      <ul>
        <li>Vanilla JS, TypeScript</li>
        <li>REST and CRUD APIs, Firebase</li>
        <li>CSS processors and CSS-in-JS libraries: SASS, PostCSS, Stitches, Styled Components, etc</li>
        <li>React ecosystem: UI kits and frameworks, SPA and SSR frameworks</li>
        <li>State management libraries: Effector, RXjs, Redux</li>
      </ul>
    </Text>
    <Heading level='3' margin={{ bottom: 'small' }}>
      T-shaped skills
    </Heading>
    <Text margin={{ bottom: 'small' }}>
      I am mainly engaged in development, but I've learnt some similar areas
      <ul>
        <li>UI design</li>
        <li>UX research and analytics</li>
        <li>Design systems and UI kits</li>
        <li>Product analytics</li>
      </ul>
    </Text>
    <Heading level='3' margin={{ bottom: 'small' }}>
      Soft-skills
    </Heading>
    <Text margin={{ bottom: 'medium' }}>
      ALso, over time, I learned how to communicate with people and nuances of teamwork (maybe even better than some technologies)
      <ul>
        <li>Solution research and presentation</li>
        <li>Management and delegation</li>
        <li>Communication and conflict resolution</li>
      </ul>
    </Text>
  </TemplateContent>
)

export default Home
