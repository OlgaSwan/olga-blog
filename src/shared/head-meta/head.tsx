import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

interface HelmetProps {
  title: string
  description: string
}
export const Head: FunctionComponent<HelmetProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  )
}
