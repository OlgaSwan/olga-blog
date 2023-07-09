import React, { FunctionComponent } from 'react'
import * as Icons from 'grommet-icons'
import { Box } from 'grommet'

import { TemplateContent } from '../template'

export const Placeholder: FunctionComponent = () => (
  <TemplateContent>
    <Box flex='grow' direction='column' align='center' justify='center'>
      <Box animation={{ type: 'pulse', duration: 200, size: 'medium' }}>
        <Icons.Diamond size='xlarge' color='brand' />
      </Box>
    </Box>
  </TemplateContent>
)
