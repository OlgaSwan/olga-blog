import React, { FunctionComponent } from 'react'
import { Menu } from 'grommet'
import * as Icons from 'grommet-icons'

import { useMenuData } from 'src/shared/template/abstract/menu/menu-data'

export const MenuComponent: FunctionComponent = () => {
  const menuData = useMenuData()
  return (
    <Menu
      title='menu'
      justifyContent='end'
      dropProps={{ round: 'small' }}
      dropAlign={{ top: 'top', right: 'right' }}
      icon={<Icons.Menu color='brand' />}
      items={menuData.map(e => ({
        label: e.label,
        href: e.href,
        style: e.style,
        icon: e.icon,
        onClick: e.onClick,
      }))}
    />
  )
}
