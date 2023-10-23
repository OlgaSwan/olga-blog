import React, { FunctionComponent } from 'react'
import { Avatar, Box, Nav, Text } from 'grommet'
import { useStore } from '@nanostores/react'
import * as Icons from 'grommet-icons'
import { routeMap } from 'src/shared/route-map'
import { useMenuData } from 'src/shared/template/abstract/menu/menu-data'
import { colorScheme } from 'src/model/color-scheme'

import { LinkCustom } from '../../link-custom'
import { TemplateProps } from './props'
import avatar from './avatar.jpg'

export const TemplateDesktop: FunctionComponent<TemplateProps> = ({ sidebarLeft, main, sidebarRight }) => {
  const colorSchemeValue = useStore(colorScheme.store)
  const menuData = useMenuData()

  return (
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
          zIndex: 1
        }}
      >
        <Box direction='row' align='center' gap='medium'>
          <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home} />
          <LinkCustom size='large' label='Olga Swan' href={routeMap.home} />
        </Box>
        <Nav direction='row' align='center' gap='medium'>
          {menuData.map(e => <LinkCustom style={e.style} label={e.label} href={e.href} onClick={(event) => {
            if (e.onClick) e.onClick(event)
          }} icon={e.icon ? e.icon(colorSchemeValue) : undefined} />)}
        </Nav>
      </Box>
      <Box direction='row' flex='grow' pad={{ horizontal: 'medium' }} gap='medium' justify='between'>
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
      <Box as='footer' height='xsmall' pad='medium' direction='row' align='center' justify='between'>
        <Text>© Olga Swan, 2023</Text>
        <Box direction='row' gap='small' justify='center'>
          <LinkCustom target='_blank' href='https://www.instagram.com/olyasswan/' icon={<Icons.Instagram />} />
          <LinkCustom target='_blank' href='https://github.com/OlgaSwan' icon={<Icons.Github />} />
          <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint />} />
        </Box>
      </Box>
    </>
  )
}
