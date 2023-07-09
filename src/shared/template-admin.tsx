import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Template } from './template-new'

export const TemplateAdmin: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <Template main={children} />
)
