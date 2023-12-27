import { Box, Avatar, Nav } from 'grommet'
import React, { memo } from 'react'
import { routeMap } from 'src/shared/route-map'
import { LinkCustom } from 'src/shared/utils/link-custom'

import avatar from './avatar.jpg'
import { useMenuData } from './menu/menu-data'

const Header = () => {
  const menuData = useMenuData()
  console.log('header')

  return (
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
  )
}

export default memo(Header)
