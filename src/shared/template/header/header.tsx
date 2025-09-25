import { Avatar, Box, Nav } from 'grommet'
import React, { memo } from 'react'
import { routeMap } from 'src/shared/route-map'
import { LinkCustom } from 'src/shared/utils/link-custom'

import avatar from './avatar.jpeg'
import { useMenuData } from '../abstract/menu/menu-data'

import './header.scss'

const Header = () => {
  const menuData = useMenuData()

  return (
    <Box
      className='blur-header'
      as='header'
      height='xsmall'
      pad='medium'
      direction='row'
      align='center'
      justify='between'
      background={{ color: 'background', opacity: 'medium' }}
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
  )
}

export default memo(Header)
