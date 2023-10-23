import React, { FunctionComponent } from 'react'
import { Avatar, Box, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { routeMap } from 'src/shared/route-map'

import { LinkCustom } from 'src/shared/link-custom'
import { MenuComponent } from 'src/shared/template/abstract/menu/menu'

import { TemplateProps } from './props'
import avatar from './avatar.jpg'

export const TemplateTablet: FunctionComponent<TemplateProps> = ({ sidebarLeft, main, sidebarRight }) => {

  return <>
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
        backdropFilter: 'blur(6px)'
      }}
    >
      <Box direction='row' gap='medium' align='center'>
        <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home} />
        <LinkCustom size='large' label='Olga Swan' href={routeMap.home} />
      </Box>
      <MenuComponent />
    </Box>
    <Box flex='grow' direction='row' pad={{ horizontal: 'medium' }} gap='medium' justify='center'>
      {sidebarLeft ? (
        <>
          <Box basis='240px' flex={false}>
            {sidebarLeft}
          </Box>
          <Box as='main' basis='768px' flex='shrink'>
            {main}
          </Box>
        </>
      ) : (
        <>
          <Box basis='0' flex='grow' />
          <Box as='main' basis='768px' flex='shrink'>
            {main}
          </Box>
          <Box basis='0' flex='grow' />
        </>
      )}
    </Box>
    <Box as='footer' height='xsmall' pad='medium' direction='row' align='center' justify='between'>
      <Text>© Olga Swan, 2023</Text>
      <Box direction='row' gap='small' justify='center'>
        <LinkCustom target='_blank' href='https://www.instagram.com/olyasswan/' icon={<Icons.Instagram />} />
        <LinkCustom target='_blank' href='https://github.com/OlgaSwan' icon={<Icons.Github />} />
        <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint />} />
      </Box>
    </Box>
  </>
}

