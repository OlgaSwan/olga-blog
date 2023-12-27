import React, { FunctionComponent } from 'react'
import { Avatar, Box, Nav, Text } from 'grommet'
import * as Icons from 'grommet-icons'
import { routeMap } from 'src/shared/route-map'
import { useMenuData } from 'src/shared/template/abstract/menu/menu-data'

import { LinkCustom } from '../../utils/link-custom'
import { TemplateProps } from './props'

import avatar from './avatar.jpg'
import { SwanLogo } from 'src/shared/template/abstract/swan-logo'

export const TemplateDesktop: FunctionComponent<TemplateProps> = ({ sidebarLeft, main, sidebarRight }) => {
  const menuData = useMenuData()
  //renders twice when 'main' prop loads cards and animation flashes(( Nujno kak-to peredavat' main v otdel'nyi
  // component no eto impossible
  console.log('render')

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
          zIndex: 1,
        }}
      >
        <Box direction='row' align='center' gap='medium' animation='slideRight'>
          <LinkCustom
            size='large'
            label={<Avatar src={avatar} size='medium' />}
            href={routeMap.home}
            data-testid='avatar-link'
          />
          <LinkCustom size='large' label='Olga Swan' href={routeMap.home} />
        </Box>
        <Nav direction='row' align='center' gap='medium' animation='slideLeft'>
          {menuData.map((e, index) => (
            <LinkCustom key={index} style={e.style} label={e.label} href={e.href} onClick={e.onClick} icon={e.icon} />
          ))}
        </Nav>
      </Box>
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
