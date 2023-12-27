import React, { FunctionComponent } from 'react'
import { ResponsiveContext } from 'grommet'

import { TemplateDesktop } from './desktop'
import { TemplateProps } from './props'
import { TemplateTablet } from './tablet'
import { TemplateMobile } from './mobile'
import GrommetContainer from './grommet-container'

export const TemplateAbstract: FunctionComponent<TemplateProps> = props => {
  return (
    <GrommetContainer>
      <ResponsiveContext.Consumer>
        {screenSize => (
          <>
            {screenSize === 'large' && <TemplateDesktop {...props} />}
            {screenSize === 'medium' && <TemplateTablet {...props} />}
            {screenSize === 'small' && <TemplateMobile {...props} />}
          </>
        )}
      </ResponsiveContext.Consumer>
    </GrommetContainer>
  )
}
