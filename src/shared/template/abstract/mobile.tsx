import React, { FunctionComponent } from 'react'
import { Avatar, Box, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { routeMap } from 'src/shared/route-map'

import { LinkCustom } from '../../utils/link-custom'
import { MenuComponent } from 'src/shared/template/abstract/menu/menu'

import { TemplateProps } from './props'
import avatar from '../header/avatar.jpeg'
import { SwanLogo } from 'src/shared/template/abstract/swan-logo'

export const TemplateMobile: FunctionComponent<TemplateProps> = ({ sidebarLeft, main, sidebarRight }) => (
  <>
    <Box
      as='header'
      height='xsmall'
      pad='medium'
      direction='row'
      align='center'
      justify='between'
      background={{ color: 'background', opacity: 'medium' }}
      style={{
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(6px)',
        zIndex: 1,
      }}
    >
      <Box direction='row' gap='medium' align='center'>
        <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home} />
        <LinkCustom size='large' label='Olga Swan' href={routeMap.home} />
      </Box>
      <MenuComponent />
    </Box>
    <Box as='main' flex='grow' margin={{ top: '30px' }} pad='medium'>
      {main}
    </Box>
    <Box
      as='footer'
      direction='column'
      margin={{ top: '20px', bottom: '10px' }}
      pad='medium'
      align='center'
      gap='small'
    >
      <SwanLogo />
      <Box direction='row' gap='small' justify='center'>
        <LinkCustom
          target='_blank'
          href='https://www.linkedin.com/in/olga-lebedeva-110722386/'
          icon={<Icons.Linkedin size='18px' />}
        />
        <LinkCustom target='_blank' href='https://github.com/OlgaSwan' icon={<Icons.Github size='18px' />} />
        <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint size='18px' />} />
      </Box>
      <Text size='14px'>© Olga Swan, 2025</Text>
    </Box>
  </>
)
