import React, { FunctionComponent, useState } from 'react'
import { Box, Heading, Notification, Paragraph } from 'grommet'

import { TemplateContent } from 'src/shared/template'
import { Head } from 'src/shared/head-meta/head'

import { metadata } from 'src/shared/head-meta/metadata'
import { LinkCustom } from 'src/shared/utils/link-custom'
import * as Icons from 'grommet-icons'

const AboutHire: FunctionComponent = () => {
  const [open, setOpen] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(`olgaswan.dev@gmail.com`)
    setOpen(true)
  }

  return (
    <TemplateContent>
      {open && (
        <Notification
          toast
          time={2000}
          icon={<Icons.StatusGood color='brand' />}
          message='Email copied!'
          onClose={() => setOpen(false)}
        />
      )}
      <Head title={metadata.aboutHire.title} description={metadata.aboutHire.description} />
      <Heading level='2' margin={{ bottom: 'xlarge' }}>
        Hire me
      </Heading>
      <Box gap='small' align='end'>
        <Paragraph size='large'>
          <LinkCustom href='#' onClick={copy} color='white'>{`olgaswan.dev@gmail.com`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom href='https://www.youtube.com/' color='white' target='_blank'>{`Telegram`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom href='https://www.youtube.com/' color='white' target='_blank'>{`LinkedIn`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom href='https://www.youtube.com/' color='white' target='_blank'>{`Habr Career`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom href='https://github.com/OlgaSwan' color='white' target='_blank'>{`GitHub`}</LinkCustom>
        </Paragraph>
      </Box>
    </TemplateContent>
  )
}

export default AboutHire
