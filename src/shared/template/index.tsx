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
      <Box style={{ position: 'relative' }} align='start' margin='medium'>
        <Nav
          style={{ position: 'sticky', top: '50%', translate: '0 -50%' }}
          pad='medium'
          align='center'
          background='brand'
          round='small'
        >
          <Box pad='small' hoverIndicator>
            <LinkCustom icon={<Icons.Projects />} label='Posts' href='#' />
          </Box>
          <Box pad='small' hoverIndicator>
            <LinkCustom icon={<Icons.Tag />} label='Tags' href='#' />
          </Box>
        </Nav>

        <Page kind='narrow' flex='grow' direction='column'>
          <PageContent flex='grow' pad='medium'>
            {props.children}
          </PageContent>
        </Page>
      </Box>
      <TemplateFooter />
    </Grommet>
  )
}
