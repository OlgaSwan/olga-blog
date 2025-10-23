import React, { FunctionComponent, useContext, useMemo, useState } from 'react'
import './code-block.scss'
import { Box, Button, Notification, ResponsiveContext } from 'grommet'
import * as Icons from 'grommet-icons'
import { microlight } from 'microlight-string'

const addLineNumbers = (str: string, highlighted: string) => {
  const lines = str.split('\n')
  const highlightedLines = highlighted.split('\n')
  const digitCount = lines.length.toString().length
  return lines.map((line, index) => ({
    lineNumber: `${(index + 1).toString().padStart(digitCount, ' ')} | `,
    code: highlightedLines[index] || line,
  }))
}

interface CodeBlockProps {
  code: string
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({ code }) => {
  const [open, setOpen] = useState(false)
  const screenSize = useContext(ResponsiveContext)

  const highlightedCode = useMemo(() => {
    return microlight.process(code, '255, 255, 255')
  }, [code])

  const linesWithNumbers = useMemo(() => {
    return addLineNumbers(code, highlightedCode)
  }, [code, highlightedCode])

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
          {linesWithNumbers.map((line, index) => (
            <div key={index} className={screenSize === 'small' ? 'smol-code' : ''}>
              <span className='non-selectable'>{line.lineNumber}</span>
              <code dangerouslySetInnerHTML={{ __html: line.code }} />
            </div>
          ))}
        </pre>
      </Box>
    </>
  )
}
