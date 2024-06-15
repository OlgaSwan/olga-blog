import React, { FunctionComponent, useContext, useState } from 'react'
import './code-block.scss'
import { Box, Button, Notification, ResponsiveContext } from 'grommet'
import * as Icons from 'grommet-icons'

const addLineNumbers = (str: string) => {
  const lines = str.split('\n')
  const digitCount = lines.length.toString().length
  return lines.map((line, index) => ({
    lineNumber: `${(index + 1).toString().padStart(digitCount, ' ')} | `,
    code: line,
  }))
}

interface CodeBlockProps {
  code: string
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({ code }) => {
  const [open, setOpen] = useState(false)
  const screenSize = useContext(ResponsiveContext)

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
      <Box width={screenSize === 'small' ? 'medium' : 'large'} margin={{ bottom: 'small' }}>
        <Button
          className='btn-copy'
          hoverIndicator
          label='Copy code'
          plain
          icon={<Icons.Copy size={screenSize === 'small' ? '14px' : '18px'} />}
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
            <div key={index} className={screenSize === 'small' ? 'smol-code' : ''}>
              <span className='non-selectable'>{line.lineNumber}</span>
              <span>{line.code}</span>
            </div>
          ))}
        </pre>
      </Box>
    </>
  )
}
