import React, { FunctionComponent } from 'react'
import { Menu } from 'grommet'
import * as Icons from 'grommet-icons'

import { useStore } from '@nanostores/react'

import { useMenuData } from 'src/shared/template/abstract/menu/menu-data'
import { colorScheme } from 'src/model/color-scheme'

export const MenuComponent: FunctionComponent = () => {
  const menuData = useMenuData()
  const colorSchemeValue = useStore(colorScheme.store)
  return <Menu
    justifyContent='end'
    dropAlign={{ top: 'top', right: 'right' }}
    icon={<Icons.Menu color='brand' />}
    items={menuData.map(e => ( {
      label: e.label,
      href: e.href,
      style: e.style,
      icon: e.icon ? e.icon(colorSchemeValue) : undefined,
      onClick: e.onClick
    } ))}
  />
}
