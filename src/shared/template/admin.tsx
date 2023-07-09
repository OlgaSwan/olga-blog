import React, { FunctionComponent, PropsWithChildren } from 'react'
import { TemplateAbstract } from './abstract'

export const TemplateAdmin: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <TemplateAbstract main={children} />
)
