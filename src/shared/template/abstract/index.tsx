import React, { FunctionComponent } from 'react'
import { useStore } from '@nanostores/react'
import { grommet, Grommet, ResponsiveContext } from 'grommet'
import { deepMerge } from 'grommet/utils'

import { colorScheme } from 'src/model/color-scheme'

import { TemplateDesktop } from './desktop'
import { TemplateProps } from './props'
import { TemplateTablet } from './tablet'
import { TemplateMobile } from './mobile'

const theme = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 640,
      },
      medium: {
        value: 1024,
      },
      large: {}
    }
  }
})

export const TemplateAbstract: FunctionComponent<TemplateProps> = (props) => {
  const colorSchemeValue = useStore(colorScheme.store)

  return (
    <Grommet
      theme={theme}
      full='min'
      options={{
        box: { cssGap: true },
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
      themeMode={colorSchemeValue}>
      <ResponsiveContext.Consumer>
        {(screenSize => (
          <>
            {screenSize === 'large' && <TemplateDesktop {...props} />}
            {screenSize === 'medium' && <TemplateTablet {...props} />}
            {screenSize === 'small' && <TemplateMobile {...props} />}
          </>
        ))}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
