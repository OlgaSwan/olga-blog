import React, { FunctionComponent, useState, useRef, ChangeEvent } from 'react'
import Tag from './tag'
import { Box, Keyboard, TextInput, TextInputProps } from 'grommet'

interface TagInputProps extends Omit<TextInputProps, 'value' | 'onChange'> {
  value: string[]
  onAdd: (tag: string) => void
  onChange: (value: string) => void
  onRemove: (tag: string) => void
}

const TagInput: FunctionComponent<TagInputProps> = ({ value = [], onAdd, onChange, onRemove, ...rest }) => {
  const [currentTag, setCurrentTag] = useState('')
  const boxRef = useRef(null)

  const updateCurrentInputValueBlyat = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(event.target.value)
    onChange(event.target.value)
  }

  const onAddTag = (tag: string) => {
    onAdd(tag)
  }

  const onEnter = () => {
    if (currentTag.length) {
      onAddTag(currentTag)
      setCurrentTag('')
    }
  }

  const renderValue = () =>
    value.map((v, index) => (
      <Tag margin='xxsmall' key={`${v}${index + 0}`} onRemove={() => onRemove(v)}>
        {v}
      </Tag>
    ))

  return (
    <Keyboard onEnter={onEnter}>
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
        {value.length > 0 && renderValue()}
        <Box flex style={{ minWidth: '120px' }}>
          <TextInput
            type='search'
            dropProps={{ round: 'small' }}
            plain
            // grommet types r rly broken
            // @ts-ignore
            dropTarget={boxRef.current}
            {...rest}
            onChange={updateCurrentInputValueBlyat}
            value={currentTag}
            onSuggestionSelect={(event) => onAddTag(event.suggestion)}
          />
        </Box>
      </Box>
    </Keyboard>
  )
}

export default TagInput
