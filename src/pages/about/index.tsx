import React, { FunctionComponent } from 'react'
import { Box, PageHeader, Text, Heading, Image } from 'grommet'
import { lorem } from 'faker'

import { Template } from '../../shared/template'

import selfie from './selfie.jpg'

export const About: FunctionComponent = () => (
  <Template>
    <PageHeader size='small' title='About' margin={{ bottom: 'medium', top: 'medium' }} />
    <Box direction='row' align='center' gap='medium'>
      <Box gap='medium' width='large'>
        <Heading level='3' margin='none'>
          {lorem.sentence()}
        </Heading>
        <Text>{lorem.paragraph(5)}</Text>
      </Box>
      <Box height='medium' width='medium'>
        <Image fit='cover' src={selfie} />
      </Box>
    </Box>
  </Template>
)
