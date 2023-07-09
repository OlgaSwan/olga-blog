import React, { FunctionComponent, PropsWithChildren } from 'react'
import { TemplateAbstract } from './abstract'

export const TemplateContent: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <TemplateAbstract main={children} />
)
