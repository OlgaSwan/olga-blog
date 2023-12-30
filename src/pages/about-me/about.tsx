import React, { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Box, Image, Paragraph, ResponsiveContext } from 'grommet'

import { handleMouseMove } from 'src/shared/utils/tilting'
import selfie from 'src/pages/about-me/selfie.jpg'

export const About = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const { contextSafe } = useGSAP({ scope: imageRef })
  const screenSize = useContext(ResponsiveContext)

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
    <Box direction={screenSize === 'small' ? 'column' : 'row'} gap='small' align='center'>
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
  )
}
