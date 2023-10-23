import React, { CSSProperties, ReactElement } from 'react'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

import { routeMap } from 'src/shared/route-map'
import { authStore } from 'src/model/auth'
import { colorScheme } from 'src/model/color-scheme'

type MenuDataItem = {
  style?: CSSProperties
  icon?: (colorSchemeValue: string) => ReactElement
  label?: string
  href: string
  onClick?: (event: any) => void
}

const menuData: MenuDataItem[] = [{
  label: 'Blog',
  href: routeMap.blogHome
}, {
  label: 'About',
  href: routeMap.aboutMe
}, {
  label: 'Hire me',
  href: routeMap.aboutHire
}]

const adminMenuData: MenuDataItem[] = [{
  label: 'Admin',
  href: routeMap.adminDiaryList
}, {
  label: 'Sign out',
  href: '#',
  onClick: async (event) => {
    event.preventDefault()
    await authStore.logout()
  }
}]

const menuDataIcon: MenuDataItem = {
  style: { lineHeight: '0' },
  icon: (colorSchemeValue: string) => colorSchemeValue === 'dark' ? <Icons.Moon /> : <Icons.Sun />,
  href: '#',
  onClick: (event) => {
    event.preventDefault()
    colorScheme.toggle()
  }
}
export const useMenuData = () => {
  const authStoreValue = useStore(authStore.store)
  if (!authStoreValue) return [...menuData, menuDataIcon]
  else return [...menuData, ...adminMenuData, menuDataIcon]
}