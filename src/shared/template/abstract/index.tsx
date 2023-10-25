import React, { FunctionComponent } from 'react'
import { useStore } from '@nanostores/react'
import { grommet, Grommet, ResponsiveContext } from 'grommet'
import { deepMerge } from 'grommet/utils'

import { colorScheme } from 'src/shared/template/abstract/color-scheme'

import { TemplateDesktop } from './desktop'
import { TemplateProps } from './props'
import { TemplateTablet } from './tablet'
import { TemplateMobile } from './mobile'

const theme = deepMerge(grommet, {

  global: {
    breakpoints: {
      small: {
        value: 640
      },
      medium: {
        value: 1024
      },
      large: {}
    },
    colors: {
      background: {
        dark: '#222',
        light: 'light-2'
      },
      focus: 'brand',
      menuColor: {
        dark: '#222',
        light: 'light-2'
      },
      brand: {
        dark: 'accent-4',
        light: 'neutral-3'
      }
    },
    elevation: {
      dark: {
        xsmall: '0px 12px 16px #111',
        small: '0px 16px 20px #111',
        medium: '0px 16px 20px #111',
        large: '0px 20px 24px #111',
        xlarge: '0px 24px 28px #111'
      },
      light: {
        xsmall: '0px 12px 16px #CCC',
        small: '0px 16px 20px #CCC',
        medium: '0px 16px 20px #CCC',
        large: '0px 20px 24px #CCC',
        xlarge: '0px 24px 28px #CCC'
      }
    }
  },
  menu: {
    background: 'menuColor'
  },
  anchor: {
    color: 'brand'
  },
  button: {
    primary: {
      background: {
        color: 'brand'
      }
    },
    secondary: {
      font: {
        weight: 'normal'
      }
    },
    border: {
      color: 'brand'
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
        box: { cssGap: true }
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      themeMode={colorSchemeValue}
    >
      <ResponsiveContext.Consumer>
        {(screenSize) => (
          <>
            {screenSize === 'large' && <TemplateDesktop {...props} />}
            {screenSize === 'medium' && <TemplateTablet {...props} />}
            {screenSize === 'small' && <TemplateMobile {...props} />}
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
