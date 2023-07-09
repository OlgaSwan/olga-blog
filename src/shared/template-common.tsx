import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Template } from './template-new'

export const TemplateCommon: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <Template main={children} />
)
