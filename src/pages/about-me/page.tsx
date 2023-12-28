import React, { FunctionComponent, useRef } from 'react'
import { Box, Heading, Image, Paragraph } from 'grommet'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'

import { metadata } from 'src/shared/head-meta/metadata'

import selfie from './selfie.jpg'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { handleMouseMove } from 'src/shared/utils/tilting'

const AboutMe: FunctionComponent = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const { contextSafe } = useGSAP({ scope: imageRef })

  const moveCard = contextSafe((rotateX: number, rotateY: number) => {
    gsap.to(imageRef.current, {
      rotationY: rotateY,
      rotationX: rotateX,
      duration: 0.8,
      ease: 'circ.out',
    })
  })

  const resetCard = contextSafe(() => {
    gsap.to(imageRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'circ.out',
    })
  })

  return (
    <TemplateContent>
      <Head title={metadata.aboutMe.title} description={metadata.aboutMe.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        About me
      </Heading>
      <Box direction='row' align='start' gap='small'>
        <Box gap='medium' width='large'>
          <Paragraph>{`Beyond the technologies, I'm interested in many aspects of life. Sometimes, when I have free time from reading tech documentation, I spend hours with biographical and World War literature.`}</Paragraph>
          <Paragraph>{`Art holds a special place in my heart, helps expressing my creativity through both traditional and digital drawing. The canvas serves for me as a means of conveying emotions and ideas into visual expressions.`}</Paragraph>
          <Paragraph>{`Equally enamored with the simple joys of nature, I'm taking walks outside. In these moments I find clarity, inspiration, and a connection to the world around me.`}</Paragraph>
          <Paragraph>{`I'm an individual who lives on the intersection of technology, empathy and art.`}</Paragraph>
        </Box>
        <Box
          ref={imageRef}
          onMouseMove={e => handleMouseMove(e, imageRef, moveCard)}
          onMouseLeave={() => resetCard()}
          height='420px'
          width='medium'
        >
          <Image fit='cover' src={selfie} style={{ borderRadius: '10px', cursor: 'pointer' }} />
        </Box>
      </Box>
    </TemplateContent>
  )
}

export default AboutMe
