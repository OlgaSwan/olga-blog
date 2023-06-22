import React, { FunctionComponent, useContext } from 'react'
import { Avatar, Box, Header, Nav, ResponsiveContext } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

import { routeMap } from '../../pages'
import { auth } from '../../model/auth'
import { colorScheme } from '../../model/color-scheme'
import { LinkCustom } from '../link-custom'

import avatar from './avatar.jpg'

const TemplateHeaderMobile: FunctionComponent = () => {
  const colorSchemeValue = useStore(colorScheme)

  return (
    <Header
      sticky='scrollup'
      height='xsmall'
      pad='medium'
      background={{ color: 'background', opacity: 'weak' }}
      style={{ backdropFilter: 'blur(6px)' }}
    >
      <Box direction='row' gap='small' align='center'>
        <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home.path} />
        <LinkCustom size='large' label='Olga Swan' href={routeMap.home.path} />
      </Box>
      <LinkCustom
        icon={<Icons.Menu />}
        href='#'
        onClick={(event) => {
          event.preventDefault()
          colorScheme.set(colorSchemeValue === 'dark' ? 'light' : 'dark')
        }}
        style={{ lineHeight: 0 }}
      />
    </Header>
  )
}

const TemplateHeaderDesktop: FunctionComponent = () => {
  const authStoreValue = useStore(auth.store)
  const colorSchemeValue = useStore(colorScheme)

  return (
    <Header
      sticky='scrollup'
      height='xsmall'
      pad='medium'
      background={{ color: 'background', opacity: 'weak' }}
      style={{ backdropFilter: 'blur(6px)' }}
    >
      <Box direction='row' gap='small' align='center'>
        <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home.path} />
        <LinkCustom size='large' label='Olga Swan' href={routeMap.home.path} />
      </Box>
      <Nav direction='row' align='center'>
        <LinkCustom label='Blog' href={routeMap.blogHome.path} />
        <LinkCustom label='About' href={routeMap.aboutMe.path} />
        <LinkCustom label='Uses' href={routeMap.aboutUses.path} />
        <LinkCustom label='Hire me' href={routeMap.aboutHire.path} />
        {authStoreValue ? (
          <LinkCustom
            label='Sign out'
            href='#'
            onClick={(event) => {
              event.preventDefault()
              auth.logout()
            }}
          />
        ) : (
          <LinkCustom label='Sign in' href={routeMap.authLogin.path} />
        )}
        <LinkCustom
          icon={colorSchemeValue === 'dark' ? <Icons.Moon /> : <Icons.Sun />}
          href='#'
          onClick={(event) => {
            event.preventDefault()
            colorScheme.set(colorSchemeValue === 'dark' ? 'light' : 'dark')
          }}
          style={{ lineHeight: 0 }}
        />
      </Nav>
    </Header>
  )
}

export const TemplateHeader: FunctionComponent = () => {
  const size = useContext(ResponsiveContext)

  return size === 'small' ? <TemplateHeaderMobile /> : <TemplateHeaderDesktop />
}
