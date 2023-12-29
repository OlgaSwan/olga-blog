import React, { FunctionComponent, useState } from 'react'
import './code-block.scss'
import { Box, Button, Notification } from 'grommet'
import * as Icons from 'grommet-icons'

const addLineNumbers = (str: string) => {
  const lines = str.split('\n')
  const digitCount = lines.length.toString().length
  return lines.map((line, index) => `${(index + 1).toString().padStart(digitCount, ' ')} | ${line}`)
}

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
      <Box margin={{ bottom: 'small' }}>
        <Button
          className='btn-copy'
          hoverIndicator
          label='Copy code'
          icon={<Icons.Copy size='18px' />}
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
