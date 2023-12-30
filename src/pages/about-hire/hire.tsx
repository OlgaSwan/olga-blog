import { Box, Notification, Paragraph } from 'grommet'
import { LinkCustom } from 'src/shared/utils/link-custom'
import React, { useState } from 'react'
import * as Icons from 'grommet-icons'

export const Hire = () => {
  const [open, setOpen] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(`olgaswan.dev@gmail.com`)
    setOpen(true)
  }

  return (
    <>
      {open && (
        <Notification
          toast
          time={2000}
          icon={<Icons.StatusGood color='brand' />}
          message='Email copied!'
          onClose={() => setOpen(false)}
        />
      )}
      <Box gap='small' align='end' flex='grow' justify='center'>
        <Paragraph size='large'>
          <LinkCustom href='#' onClick={copy} color='text'>{`olgaswan.dev@gmail.com`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom href='https://t.me/olgaswandev' color='text' target='_blank'>{`Telegram`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom
            href='https://www.linkedin.com/in/olga-lebedeva-66773b2a7/'
            color='text'
            target='_blank'
          >{`LinkedIn`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom
            href='https://career.habr.com/olgaswandev'
            color='text'
            target='_blank'
          >{`Habr Career`}</LinkCustom>
        </Paragraph>
        <Paragraph size='large'>
          <LinkCustom href='https://github.com/OlgaSwan' color='text' target='_blank'>{`GitHub`}</LinkCustom>
        </Paragraph>
      </Box>
    </>
  )
}
