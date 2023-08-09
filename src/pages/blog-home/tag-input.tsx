import React, { FunctionComponent, useState, useRef, useEffect, useMemo } from 'react'
import Tag from './tag'
import { Box, TextInput } from 'grommet'

interface TagInputProps {
  initialValue?: string[]
  suggestions?: string[]
  onChange?: (value: string[]) => void
}

const TagInput: FunctionComponent<TagInputProps> = ({
  initialValue = [],
  suggestions = [],
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [chosenTags, setChosenTags] = useState<Array<string>>(initialValue)
  const leftSuggestions = useMemo(() => (
    suggestions
      .filter(s => !chosenTags.includes(s))
      .filter(s => s.includes(inputValue))
  ), [chosenTags, suggestions, inputValue])
  const boxRef = useRef(null)

  useEffect(() => {
    onChange?.(chosenTags)
  }, [chosenTags])

  return (
    <>
      <Box
        direction='row'
        align='center'
        pad={{ horizontal: 'xsmall' }}
        margin={{ bottom: 'large', top: 'small' }}
        border='all'
        round='small'
        ref={boxRef}
        wrap
      >
        {chosenTags.map(tag => (
          <Tag
            key={tag}
            margin='xxsmall'
            onRemove={() => {
              setChosenTags(chosenTags.filter(t => t !== tag))
            }}>
            {tag}
          </Tag>
        ))}
        <Box flex style={{ minWidth: '120px' }}>
          <TextInput
            type='search'
            plain
            placeholder='Filter by tags'
            value={inputValue}
            onChange={event => setInputValue(event.currentTarget.value)}
            suggestions={leftSuggestions}
            onSuggestionSelect={event => {
              setInputValue('')
              setChosenTags([...chosenTags, event.suggestion])
            }}
            // @ts-ignore
            dropTarget={boxRef.current}
            dropProps={{ round: 'small' }}
          />
        </Box>
      </Box>
    </>
  )
}

export default TagInput
