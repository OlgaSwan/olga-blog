import React, { FunctionComponent, useState } from 'react'
import './code-block.scss'
import { Box, Button, Notification } from 'grommet'
import * as Icons from 'grommet-icons'

const addLineNumbers = (str: string) => str.split('\n').map((line, index) => `${index + 1} | ${line}`)

interface CodeBlockProps {
  code: string
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({ code }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <Notification
          toast
          time={2000}
          icon={<Icons.StatusGood color='brand' />}
          message='Code copied!'
          onClose={() => setOpen(false)}
        />
      )}
      <Box margin={{ top: 'small', bottom: 'small' }}>
        <Button
          className='btn-copy'
          hoverIndicator
          icon={<Icons.Copy size='20px' />}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code)
              setOpen(true)
            } catch (error) {
              if (error instanceof Error) console.warn(error.message)
            }
          }}
        />
        <pre>
          {addLineNumbers(code).map((line, index) => (
            <div key={index} className='non-selectable'>
              {line}
            </div>
          ))}
        </pre>
      </Box>
    </>
  )
}
