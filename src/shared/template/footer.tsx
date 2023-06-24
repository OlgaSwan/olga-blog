import React, { FunctionComponent } from 'react'
import { Box, Footer, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { LinkCustom } from '../link-custom'

export const TemplateFooter: FunctionComponent = () => (
  <Footer pad='medium'>
    <Text>© Olga Swan, 2023</Text>
    <Box direction='row' gap='small' justify='center'>
      <LinkCustom target='_blank' href='https://www.instagram.com/olyasswan/' icon={<Icons.Instagram />} />
      <LinkCustom target='_blank' href='https://github.com/OlgaSwan' icon={<Icons.Github />} />
      <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint />} />
    </Box>
  </Footer>
)
