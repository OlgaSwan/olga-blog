import React, { FunctionComponent } from 'react'
import { Box, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { LinkCustom } from '../../utils/link-custom'
import { TemplateProps } from './props'

import { SwanLogo } from 'src/shared/template/abstract/swan-logo'
import Header from '../header/header'

export const TemplateDesktop: FunctionComponent<TemplateProps> = ({ sidebarLeft, main, sidebarRight }) => {
  return (
    <>
      <Header />
      <Box
        direction='row'
        flex='grow'
        margin={{ top: '100px' }}
        pad={{ horizontal: 'medium' }}
        gap='medium'
        justify='between'
      >
        <Box basis='240px' flex='shrink'>
          {sidebarLeft}
        </Box>
        <Box as='main' basis='768px' flex='shrink'>
          {main}
        </Box>
        <Box basis='240px' flex='shrink'>
          {sidebarRight}
        </Box>
      </Box>
      <Box
        as='footer'
        margin={{ top: '100px' }}
        height='xsmall'
        pad={{ top: 'medium', left: 'medium', right: 'medium' }}
        direction='row'
        align='center'
        justify='between'
      >
        <Text size='16px'>© Olga Swan, 2025 </Text>
        <SwanLogo />
        <Box direction='row' gap='medium' justify='center'>
          <LinkCustom target='_blank' href='https://www.linkedin.com/in/olga-lebedeva-frontend/' icon={<Icons.Linkedin />} />
          <LinkCustom target='_blank' href='https://github.com/OlgaSwan' icon={<Icons.Github />} />
          <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint />} />
        </Box>
      </Box>
    </>
  )
}
