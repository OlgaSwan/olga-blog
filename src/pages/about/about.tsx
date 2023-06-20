import React, { FunctionComponent } from 'react'
import { Box, PageHeader, Text, Heading, Image } from 'grommet'

import { Template } from '../../shared/template'

import img1 from './img-1.jpg'

export const About: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='About' margin={{ bottom: 'large' }} />
    <Box direction='row' align='center' gap='medium'>
      <Box gap='medium' width='large'>
        <Heading level='3' margin='none'>
          Lorem ipsum dolor sit amet consectetur.
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut reprehenderit nam repudiandae illum aperiam
          libero eum consequuntur ratione, quibusdam numquam quam ad. Pariatur deleniti enim officiis dolor, ipsam
          tenetur ab.
        </Text>
      </Box>
      <Box height='medium' width='medium'>
        <Image fit='cover' src={img1} />
      </Box>
    </Box>
  </Template>
)
