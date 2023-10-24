import React, { FunctionComponent, useState } from 'react'
import { Button, Notification } from 'grommet'
import * as Icons from 'grommet-icons'

interface SharedBtnProps {
  diary_id: string
  size?: string
}

const getUrl = (diary_id: string) => window.location.origin + `/blog/diary/${diary_id}`

export const SharedBtn: FunctionComponent<SharedBtnProps> = ({ diary_id, size }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <Notification
          toast
          time={2000}
          icon={<Icons.StatusGood color='brand' />}
          message='Link copied!'
          onClose={() => setOpen(false)}
        />
      )}
      <Button icon={<Icons.ShareRounded color='text' size={size} />} hoverIndicator
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(getUrl(diary_id))
                  setOpen(true)
                } catch (error) {
                  if (error instanceof Error) console.warn(error.message)
                }
              }} />
    </>
  )
}

