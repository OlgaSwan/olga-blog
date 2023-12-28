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
    <Box className='container' ref={container} gap='medium'>
      <Box className='box'>
        <Heading level='3' margin={{ bottom: 'small' }}>
          Hard-skills
        </Heading>
        <Text>
          I've worked with a lot of technologies in production and on pet-projects.
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <li>Vanilla JS, TypeScript</li>
            <li>REST and CRUD APIs, Firebase, Appwrite, MongoDB</li>
            <li>React ecosystem: Next.js, UI kits, SPA and SSR frameworks</li>
            <li>CSS processors and CSS-in-JS libraries: SASS, PostCSS, Styled Components.</li>
            <li>State management libraries: Effector, Redux</li>
            <li>Testing libraries: Jest, Vitest</li>
          </ul>
        </Text>
      </Box>
      <Box className='box'>
        <Heading level='3' margin={{ bottom: 'small' }}>
          T-shaped skills
        </Heading>
        <Text>
          I'm mostly in development, but I've explored a few similar areas.
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <li>Design systems and UI kits</li>
            <li>UX research and analytics</li>
            <li>Product analytics</li>
          </ul>
        </Text>
      </Box>
      <Box className='box'>
        <Heading level='3' margin={{ bottom: 'small' }}>
          Soft-skills
        </Heading>
        <Text>
          I have necessary communicative and presentational skills.
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <li>Solution research, argumentation and presentation</li>
            <li>Experienced interaction with the team</li>
            <li>Management and delegation</li>
          </ul>
        </Text>
      </Box>
    </Box>
  )
}

export default Content
