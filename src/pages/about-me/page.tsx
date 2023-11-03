import React, { FunctionComponent } from 'react'
import { Box, Heading, Image, Text } from 'grommet'
import { faker } from '@faker-js/faker'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'

import { metadata } from 'src/shared/head-meta/metadata'

import selfie from './selfie.jpg'

const AboutMe: FunctionComponent = () => (
  <TemplateContent>
    <Head title={metadata.aboutMe.title} description={metadata.aboutMe.description} />
    <Heading level='2' margin={{ bottom: 'medium' }}>
      About me
    </Heading>
    <Box direction='row' align='start' gap='medium'>
      <Box gap='medium' width='large'>
        <Heading level='3' margin='none'>
          {'OLYA: CHUDO, OLYA: CHUDO, OLYA: CHUDO, OLYA: CHUDO, OLYA: CHUDO, OLYA: CHUDO,'}
        </Heading>
        <Text>{faker.lorem.paragraph(5)}</Text>
      </Box>
      <Box height='medium' width='medium'>
        <Image fit='cover' src={selfie} />
      </Box>
    </Box>
  </TemplateContent>
)

export default AboutMe
