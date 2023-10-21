import React, { FunctionComponent, PropsWithChildren } from 'react'
import { FormClose } from 'grommet-icons'
import { Box, BoxExtendedProps, Text } from 'grommet'

interface TagProps extends BoxExtendedProps {
  onRemove: () => void
}

const Tag: FunctionComponent<PropsWithChildren<TagProps>> = ({ children, onRemove, ...rest }) => {
  return (
    <Box
      direction='row'
      align='center'
      background='brand'
      pad={{ horizontal: 'xsmall', vertical: 'xxsmall' }}
      margin={{ vertical: 'xxsmall' }}
      round='medium'
      onClick={onRemove}
      {...rest}
    >
      <Text size='xsmall' margin={{ right: 'xxsmall' }}>
        {children}
      </Text>
      <FormClose size='small' color='white' />
    </Box>
  )
}

export default Tag
