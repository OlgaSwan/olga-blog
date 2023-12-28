import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { Box, Heading, Text } from 'grommet'

gsap.registerPlugin(ScrollTrigger)

const Content = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLDivElement>('.box')
      boxes.forEach((box, index) => {
        gsap.from(box, {
          x: index % 2 === 0 ? -300 : 300,
          scrollTrigger: box,
          opacity: 0,
          duration: 1,
        })
      })
    },
    { scope: container },
  )

  return (
    <Box className='container' ref={container}>
      <Box className='box'>
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
      <Box className='box'>
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
      <Box className='box'>
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
    </Box>
  )
}

export default Content
