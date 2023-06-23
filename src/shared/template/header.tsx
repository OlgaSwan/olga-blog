import React, { FunctionComponent, useContext, useRef, useState } from 'react'
import { Avatar, Box, Drop, Header, Heading, Layer, Nav, ResponsiveContext } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

import { routeMap } from '../../pages'
import { auth } from '../../model/auth'
import { colorScheme } from '../../model/color-scheme'
import { LinkCustom } from '../link-custom'

import avatar from './avatar.jpg'

const TemplateHeaderMobile: FunctionComponent = () => {
  const colorSchemeValue = useStore(colorScheme)
  const authStoreValue = useStore(auth.store)
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false)

  return (
    <>
      <Header
        sticky='scrollup'
        height='xsmall'
        pad='medium'
        background={{ color: 'background', opacity: 'weak' }}
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home.path} />
        <LinkCustom size='large' label='Olga Swan' href={routeMap.home.path} />
        <LinkCustom
          icon={<Icons.Menu />}
          href='#'
          onClick={(event) => {
            event.preventDefault()
            setMenuOpened(!isMenuOpened)
          }}
          style={{ lineHeight: 0 }}
        />
      </Header>
      {isMenuOpened && (
        <Layer
          modal
          position='top-right'
          responsive={false}
          margin='small'
          onClickOutside={() => setMenuOpened(false)}
          onEsc={() => setMenuOpened(false)}
        >
          <Nav pad='large' gap='large'>
            <LinkCustom size='xlarge' label='Blog' href={routeMap.blogHome.path} />
            <LinkCustom size='xlarge' label='About' href={routeMap.aboutMe.path} />
            <LinkCustom size='xlarge' label='Uses' href={routeMap.aboutUses.path} />
            <LinkCustom size='xlarge' label='Hire me' href={routeMap.aboutHire.path} />
            {authStoreValue ? (
              <LinkCustom
                size='xlarge'
                label='Sign out'
                href='#'
                onClick={(event) => {
                  event.preventDefault()
                  auth.logout()
                }}
              />
            ) : (
              <LinkCustom size='xlarge' label='Sign in' href={routeMap.authLogin.path} />
            )}
            <LinkCustom
              label='Color scheme'
              size='xlarge'
              href='#'
              onClick={(event) => {
                event.preventDefault()
                colorScheme.set(colorSchemeValue === 'dark' ? 'light' : 'dark')
              }}
            />
          </Nav>
        </Layer>
      )}
    </>
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
