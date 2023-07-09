import React, { FunctionComponent } from 'react'
import { Box, Text, Heading, Image, PageHeader } from 'grommet'
import { lorem } from 'faker'

import { Template } from '../../shared/template-new'

import selfie from './selfie.jpg'

const AboutMe: FunctionComponent = () => (
  <Template
    main={
      <>
        <PageHeader size='small' title='About me' margin={{ bottom: 'medium', top: 'medium' }} />
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
      </>
    }
  />
)

export default AboutMe
