import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Avatar, Box, Button, Footer, grommet, Grommet, Header, Nav, Page, PageContent, Text } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'
import { useDarkMode } from 'color-scheme-hook'

import { auth } from '../../model/auth'
import { routeMap } from '../../pages'
import { LinkCustom } from '../link-custom'

import avatar from './avatar.jpg'

export const Template: FunctionComponent<PropsWithChildren> = (props) => {
  const authStoreValue = useStore(auth.store)
  const [isDarkMode, toggleColorScheme, resetPreference] = useDarkMode()

  return (
    <Grommet
      theme={grommet}
      full='min'
      options={{
        box: { cssGap: true },
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      themeMode={isDarkMode ? 'dark' : 'light'}
    >
      <Header
        sticky='scrollup'
        height='xsmall'
        pad='medium'
        background={{ color: 'background', opacity: 'weak' }}
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <Box direction='row' gap='small' align='center'>
          <Avatar src={avatar} size='medium' />
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
              onClick={event => {
                event.preventDefault()
                auth.logout()
              }}
            />
          ) : (
            <LinkCustom label='Sign in' href={routeMap.authLogin.path} />
          )}
          <Button onClick={() => toggleColorScheme()} icon={isDarkMode ? <Icons.Moon /> : <Icons.Sun />} />
        </Nav>
      </Header>
      <Page kind='narrow' flex='grow' direction='column'>
        <PageContent flex='grow'>{props.children}</PageContent>
      </Page>
      <Footer pad='medium'>
        <Text>Copyright</Text>
        <Box direction='row' gap='small' justify='center'>
          <LinkCustom target='_blank' href='https://www.instagram.com/olyasswan/' icon={<Icons.Instagram />} />
          <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint />} />
          <LinkCustom target='_blank' href='https://rus.bongacams.com/' icon={<Icons.Webcam />} />
        </Box>
      </Footer>
    </Grommet>
  )
}
