import React, { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react'
import { Box, TextInput } from 'grommet'
import { isEqual } from 'lodash-es'
import { TagCustom } from 'src/model/tag/tag-custom'

interface TagInputProps {
  value?: string[]
  suggestions?: string[]
  onChange?: (value: string[]) => void
}

export const TagInput: FunctionComponent<TagInputProps> = ({ value = [], suggestions = [], onChange }) => {
  const [inputValue, setInputValue] = useState('')
  const [chosenTags, setChosenTags] = useState(value)
  useEffect(() => {
    if (!isEqual(value, chosenTags)) setChosenTags(value)
  }, [value])
  useEffect(() => {
    if (!isEqual(value, chosenTags)) onChange?.(chosenTags)
  }, [chosenTags])

  const leftSuggestions = useMemo(
    () => suggestions.filter(s => !chosenTags.includes(s)).filter(s => s.includes(inputValue)),
    [chosenTags, suggestions, inputValue],
  )

  const boxRef = useRef(null)

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
          <TagCustom
            key={tag}
            margin='xxsmall'
            onRemove={() => {
              setChosenTags(chosenTags.filter(t => t !== tag))
            }}
          >
            {tag}
          </TagCustom>
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
