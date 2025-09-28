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
          I've worked with a lot of technologies in production and pet-projects.
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <li>Vanilla JS, TypeScript.</li>
            <li>Frameworks and libs: React, Vue, SolidJS.</li>
            <li>React ecosystem: Next.js, Gatsby, UI kits, SPA and SSR frameworks.</li>
            <li>State management: Zustand, Redux, MobX, React Signals.
              <br />
              TanStack Query, RTK Query.
            </li>
            <li>Architecture methodologies: FSD, Micro frontends, Monolithic.</li>
            <li>Graphics and interactivity: Three.js, PixiJS, D3.js, WebXR, GSAP.</li>
            <li>CSS processors and CSS-in-JS libraries: SASS, PostCSS, Styled Components.</li>
            <li>Performance and optimization: Web Vitals, Lighthouse, DevTools Profiler/Performance.</li>
            <li>Testing: Jest, Vitest, React Testing Library, Playwright.
              <br />
              Storybook, Snapshots.
              </li>
            <li>PWA: Service and Web workers.</li>
            <li>Other: JetBrains AI, Docker, GitLab CI/CD, Open API/Swagger.</li>
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
            <li>Researching for modern solutions, presentation, ensuring quality through
              <br />
              cross-team code reviews.</li>
            <li>Mentoring junior developers and upskilling team members.</li>
            <li>Communication, teamwork skills and knowledge sharing.</li>
          </ul>
        </Text>
      </Box>

      <Box className='box'>
        <Heading level='3' margin={{ bottom: 'small' }}>
          T-shaped skills
        </Heading>
        <Text>
          I'm mostly in frontend development, but I've explored a few similar areas.
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <li>DevOps/Platform Engineering fundamentals.</li>
            <li>Backend fundamentals.</li>
            <li>Design systems and UI kits.</li>
            <li>UX research and analytics.</li>
            <li>Product analytics.</li>
          </ul>
        </Text>
      </Box>
    </Box>
  )
}

export default Content
