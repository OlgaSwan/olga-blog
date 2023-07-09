import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Heading } from 'grommet'

import { TemplateAbstract } from './abstract'
import { LinkCustom } from '../link-custom'
import { routeMap } from '../../pages'

const Sidebar: FunctionComponent = () => (
  <>
    <Heading level='2'>Admin panel</Heading>
    <LinkCustom href={routeMap.adminHome.path} size='xlarge'>Home</LinkCustom>
    <LinkCustom href={routeMap.adminDiaryList.path} size='xlarge'>Diaries</LinkCustom>
    <LinkCustom href={routeMap.adminTagList.path} size='xlarge'>Tags</LinkCustom>
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
