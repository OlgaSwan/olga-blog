import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Heading } from 'grommet'

import { TemplateAbstract } from './abstract'
import { LinkCustom } from '../link-custom'

import { routeMap } from 'src/shared/route-map'

const Sidebar: FunctionComponent = () => (
  <>
    <Heading level='2'>Admin panel</Heading>
    <LinkCustom href={routeMap.adminHome} size='xlarge'>Home</LinkCustom>
    <LinkCustom href={routeMap.adminDiaryList} size='xlarge'>Diaries</LinkCustom>
    <LinkCustom href={routeMap.adminTagList} size='xlarge'>Tags</LinkCustom>
  </>
)

export const TemplateAdmin: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <TemplateAbstract
    sidebarLeft={<Sidebar />}
    main={children}
  />
)
