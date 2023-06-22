import React, { FunctionComponent, PropsWithChildren } from 'react'
import { grommet, Grommet, Page, PageContent } from 'grommet'
import { useStore } from '@nanostores/react'

import { colorScheme } from '../../model/color-scheme'

import { TemplateHeader } from './header'
import { TemplateFooter } from './footer'

export const Template: FunctionComponent<PropsWithChildren> = (props) => {
  const colorSchemeValue = useStore(colorScheme)

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
      <Page kind='narrow' flex='grow' direction='column'>
        <PageContent flex='grow' pad='medium'>
          {props.children}
        </PageContent>
      </Page>
      <TemplateFooter />
    </Grommet>
  )
}
