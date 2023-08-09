import React, { FunctionComponent } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { Box, Button, TextArea, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'

import { DiaryInternal } from 'src/model/diary/index'

interface Props {
  disabled?: boolean
  initialValue: DiaryInternal
  onChange?: (value: DiaryInternal) => void
}

export const AdminDiaryIdEditor: FunctionComponent<Props> = ({
  disabled = false,
  initialValue,
  onChange,
}) => {
  const { control, register, watch } = useForm({
    defaultValues: initialValue,
  })
  const { fields, append } = useFieldArray({
    control,
    name: 'content'
  })

  watch(value => console.log(value))

  return (
    <Box gap='medium'>
      <Box>
        <TextInput
          placeholder='Title'
          disabled={disabled}
          {...register('title')}
        />
      </Box>
      <Box gap='small'>
        {fields.map((field, index) => {
          if (field.kind === 'paragraph') return (
            <TextArea
              key={field.id}
              placeholder='Paragraph content'
              {...register(`content.${index}.text`)}
            />
          )
          if (field.kind === 'iframe') return (
            <TextInput
              key={field.id}
              placeholder='IFrame URL'
              {...register(`content.${index}.url`)}
            />
          )
          if (field.kind === 'image') return (
            <TextInput
              key={field.id}
              placeholder='Image URL'
              {...register(`content.${index}.url`)}
            />
          )
          return null
        })}
      </Box>
      <Box direction='row' align='start' gap='small'>
        <Button
          icon={<Icons.Add />}
          label='Paragraph'
          onClick={() => {
            append({ kind: 'paragraph', text: '' })
          }}
        />
        <Button
          icon={<Icons.Add />}
          label='IFrame'
          onClick={() => {
            append({ kind: 'iframe', url: '' })
          }}
        />
        <Button
          icon={<Icons.Add />}
          label='Image'
          onClick={() => {
            append({ kind: 'image', url: '' })
          }}
        />
      </Box>
    </Box>
  )
}