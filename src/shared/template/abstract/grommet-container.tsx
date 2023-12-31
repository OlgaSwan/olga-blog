import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Grommet, grommet } from 'grommet'

import { useStore } from '@nanostores/react'
import { deepMerge } from 'grommet/utils'
import { colorScheme } from './color-scheme'

import './global.scss'

const theme = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 640,
      },
      medium: {
        value: 1024,
      },
      large: {},
    },
    colors: {
      brand: {
        dark: '#FFFF00',
        light: '#009CBA',
      },
      background: {
        dark: '#1F1F1F',
        light: 'light-2',
      },
      focus: 'brand',
      menuColor: {
        dark: '#1F1F1F',
        light: 'light-2',
      },
    },
    font: {
      family: 'Mulish',
    },
    elevation: {
      dark: {
        xsmall: '0px 12px 26px #1B1B1B',
        small: '0px 16px 30px #1B1B1B',
        medium: '0px 16px 30px #1B1B1B',
        large: '0px 20px 34px #1B1B1B',
        xlarge: '0px 24px 38px #1B1B1B',
      },
      light: {
        xsmall: '0px 12px 26px #CCC',
        small: '0px 16px 30px #CCC',
        medium: '0px 16px 30px #CCC',
        large: '0px 20px 34px #CCC',
        xlarge: '0px 24px 38px #CCC',
      },
    },
    focus: {
      border: {
        color: 'none',
      },
    },
  },
  heading: {
    font: {
      family: 'Ubuntu',
    },
  },
  menu: {
    background: 'menuColor',
  },
  anchor: {
    color: 'brand',
  },
  button: {
    primary: {
      color: 'brand',
    },
    secondary: {
      font: {
        weight: 'normal',
      },
    },
    border: {
      color: 'brand',
    },
  },
  notification: {
    toast: {
      container: {
        elevation: 'none',
      },
    },
  },
})

const GrommetContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const colorSchemeValue = useStore(colorScheme.store)

  return (
    <Grommet
      className={`grommet ${colorSchemeValue}`}
      theme={theme}
      full='min'
      options={{
        box: { cssGap: true },
      }}
      themeMode={colorSchemeValue}
    >
      {children}
    </Grommet>
  )
}

export default GrommetContainer
