import React, { FunctionComponent } from 'react'
import { Avatar, Box, Nav, Text } from 'grommet'
import { useStore } from '@nanostores/react'
import * as Icons from 'grommet-icons'

import { authStore } from 'src/model/auth'
import { colorScheme } from 'src/model/color-scheme'
import { LinkCustom } from '../../link-custom'

import { TemplateProps } from './props'
import avatar from './avatar.jpg'
import { routeMap } from 'src/shared/route-map'

export const TemplateDesktop: FunctionComponent<TemplateProps> = ({
  sidebarLeft,
  main,
  sidebarRight,
}) => {
  const authStoreValue = useStore(authStore.store)
  const colorSchemeValue = useStore(colorScheme.store)

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
        <Box direction='row' align='center' gap='medium'>
          <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home} />
          <LinkCustom size='large' label='Olga Swan' href={routeMap.home} />
        </Box>
        <Nav direction='row' align='center' gap='medium'>
          <LinkCustom label='Blog' href={routeMap.blogHome} />
          <LinkCustom label='About' href={routeMap.aboutMe} />
          <LinkCustom label='Hire me' href={routeMap.aboutHire} />
          {authStoreValue && (
            <LinkCustom
              label='Sign out'
              href='#'
              onClick={(event) => {
                event.preventDefault()
                authStore.logout()
              }}
            />
          )}
          <LinkCustom
            icon={colorSchemeValue === 'dark' ? <Icons.Moon /> : <Icons.Sun />}
            href='#'
            onClick={(event) => {
              event.preventDefault()
              colorScheme.toggle()
            }}
            style={{ lineHeight: 0 }}
          />
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
