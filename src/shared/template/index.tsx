import React, { FunctionComponent, PropsWithChildren } from 'react'
import { grommet, Grommet, Page, PageContent, Box, Button, Nav } from 'grommet'
import * as Icons from 'grommet-icons'
import { useStore } from '@nanostores/react'

import { colorScheme } from '../../model/color-scheme'

import { TemplateHeader } from './header'
import { TemplateFooter } from './footer'
import { LinkCustom } from '../link-custom'

export const Template: FunctionComponent<PropsWithChildren> = (props) => {
  const colorSchemeValue = useStore(colorScheme.store)

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
      themeMode={colorSchemeValue}
    >
      <TemplateHeader />
      <Page direction='row' pad='medium' gap='medium'>
        <Box flex='grow' style={{ position: 'relative' }}>
          <Nav
            style={{ position: 'sticky', top: '50%', translate: '0 -50%' }}
            pad='medium'
            align='center'
            background='brand'
            round='small'
            width='small'
          >
            <Box pad='small' hoverIndicator>
              <LinkCustom icon={<Icons.Projects />} label='Posts' href='#' />
            </Box>
            <Box pad='small' hoverIndicator>
              <LinkCustom icon={<Icons.Tag />} label='Tags' href='#' />
            </Box>
          </Nav>
        </Box>
        <Box flex='grow'>
          {props.children}
        </Box>
        <Box flex='grow' />
      </Page>
      <TemplateFooter />
    </Grommet>
  )
}
