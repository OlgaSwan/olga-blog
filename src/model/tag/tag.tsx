import React, { FunctionComponent, PropsWithChildren } from 'react'
import { FormClose } from 'grommet-icons'
import { Box, BoxExtendedProps, Text } from 'grommet'

interface TagProps extends BoxExtendedProps {
  onRemove: () => void
}

export const Tag: FunctionComponent<PropsWithChildren<TagProps>> = ({ children, onRemove, ...rest }) => {
  return (
    <Box
      direction='row'
      align='center'
      background={{ color: 'brand' }}
      pad={{ horizontal: 'xsmall', vertical: 'xxsmall' }}
      margin={{ vertical: 'xxsmall' }}
      round='small'
      onClick={onRemove}
      {...rest}
    >
      <Text size='xsmall' margin={{ right: 'xxsmall' }}>
        {children}
      </Text>
      <FormClose size='small' color='text' />
    </Box>
  )
}

