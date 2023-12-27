import React, { FunctionComponent } from 'react'
import { Box, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { LinkCustom } from '../../utils/link-custom'
import { TemplateProps } from './props'

import { SwanLogo } from 'src/shared/template/abstract/swan-logo'
import { MainContent } from 'src/shared/template/abstract/maincontent'
import Header from './header'

export const TemplateDesktop: FunctionComponent<TemplateProps> = ({ sidebarLeft, main, sidebarRight }) => {
  //renders twice when 'main' prop loads cards and animation flashes(( Nujno kak-to peredavat' main v otdel'nyi
  // component no eto impossible
  console.log('render')

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
        <MainContent main={main} />
        <Box basis='240px' flex='shrink'>
          {sidebarRight}
        </Box>
      </Box>
      <Box
        as='footer'
        margin={{ top: '100px' }}
        height='xsmall'
        pad='medium'
        direction='row'
        align='center'
        justify='between'
      >
        <Text>© Olga Swan, 2023 </Text>
        <SwanLogo />
        <Box direction='row' gap='medium' justify='center'>
          <LinkCustom target='_blank' href='https://www.instagram.com/olyasswan/' icon={<Icons.Instagram />} />
          <LinkCustom target='_blank' href='https://github.com/OlgaSwan' icon={<Icons.Github />} />
          <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint />} />
        </Box>
      </Box>
    </>
  )
}
