import React, { FunctionComponent } from 'react'
import { Avatar, Box, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { LinkCustom } from '../../link-custom'

import { TemplateProps } from './props'
import avatar from './avatar.jpg'
import { routeMap } from 'src/shared/route-map'

export const TemplateMobile: FunctionComponent<TemplateProps> = ({
  sidebarLeft,
  main,
  sidebarRight,
}) => (
  <>
    <Box
      as='header'
      height='xsmall'
      pad='medium'
      direction='row'
      align='center'
      justify='between'
      background={{ color: 'background', opacity: 'medium' }}
      style={{
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(6px)',
      }}
    >
      <Box direction='row' align='center' gap='medium'>
        <LinkCustom
          icon={<Icons.Menu />}
          href='#'
          onClick={(event) => {
            event.preventDefault()
          }}
          style={{ lineHeight: 0 }}
        />
      </Box>
      <Box direction='row' gap='medium' align='center'>
        <LinkCustom size='large' label={<Avatar src={avatar} size='medium' />} href={routeMap.home} />
        <LinkCustom size='large' label='Olga Swan' href={routeMap.home} />
      </Box>
      <Box direction='row' align='center' gap='medium'>
        <LinkCustom
          icon={<Icons.Menu />}
          href='#'
          onClick={(event) => {
            event.preventDefault()
          }}
          style={{ lineHeight: 0 }}
        />
      </Box>
    </Box>
    <Box as='main' flex='grow' pad='medium'>
      {main}
    </Box>
    <Box as='footer' direction='column' pad='medium' align='center' gap='small'>
      <Box direction='row' gap='small' justify='center'>
        <LinkCustom target='_blank' href='https://www.instagram.com/olyasswan/' icon={<Icons.Instagram />} />
        <LinkCustom target='_blank' href='https://github.com/OlgaSwan' icon={<Icons.Github />} />
        <LinkCustom target='_blank' href='https://www.behance.net/olyasswan' icon={<Icons.Paint />} />
      </Box>
      <Text>© Olga Swan, 2023</Text>
    </Box>
  </>
)
