import React, { FunctionComponent, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { Box, Button, Heading, PageHeader, Paragraph, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { LinkCustom } from 'src/shared/utils/link-custom'
import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'
import { DiaryList } from 'src/model/diary'
import { routeMap } from 'src/shared/route-map'
import { metadata } from 'src/shared/head-meta/metadata'

gsap.registerPlugin(ScrollTrigger)

const Home: FunctionComponent = () => {
  // const boxes = gsap.utils.toArray('.box')
  //
  // useGSAP(() => {
  //   boxes.forEach(box => {
  //     // @ts-ignore
  //     gsap.to(box, {
  //       x: 300,
  //       scrollTrigger: {
  //         trigger: box,
  //         scrub: true,
  //       },
  //     })
  //   })
  // })

  //u menya nichego ne poluchilos' Rabotaet tol'ko esli sdelat' polovinku okna browser Ili Cntrl+S nazhat pushto
  // togda boxes uzhe tochno est')
  // Sorry((
  //Budu zavtra ewe smotret' na eto.. uzhe 7 utra..
  //all good, you are doing great, take your time
  //check test page

  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)

  console.log(box3.current)

  useGSAP(() => {
    gsap.from(box1.current, {
      scrollTrigger: box1.current,
      x: '-200',
      opacity: 0,
      duration: 1,
    })

    gsap.from(box2.current, {
      scrollTrigger: box2.current,
      x: '200',
      opacity: 0,
      duration: 1,
    })

    gsap.from(box3.current, {
      scrollTrigger: box3.current,
      x: '-200',
      opacity: 0,
      duration: 1,
    })
  })

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

      <Box className='box' ref={box1}>
        <Heading level='3' margin={{ bottom: 'medium' }}>
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
      </Box>
      <Box className='box' ref={box2}>
        <Heading level='3' margin={{ bottom: 'medium' }}>
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
      </Box>
      <Box className='box' ref={box3}>
        <Heading level='3' margin={{ bottom: 'medium' }}>
          Soft-skills
        </Heading>
        <Text margin={{ bottom: 'medium' }}>
          ALso, over time, I learned how to communicate with people and nuances of teamwork (maybe even better than some
          technologies)
          <ul>
            <li>Solution research and presentation</li>
            <li>Management and delegation</li>
            <li>Communication and conflict resolution</li>
          </ul>
        </Text>
      </Box>
    </TemplateContent>
  )
}

export default Home
