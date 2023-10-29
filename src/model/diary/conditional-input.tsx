import React, { FunctionComponent } from 'react'
import { Control, Controller, FieldArrayWithId, useWatch } from 'react-hook-form'
import { DiaryInternal } from 'src/model/diary/types'
import { TextInput } from 'grommet'

interface ConditionalInputProps {
  control: Control<DiaryInternal> | undefined
  index: number
  field?: FieldArrayWithId<DiaryInternal, 'content', 'id'>
}

const ConditionalInput: FunctionComponent<ConditionalInputProps> = ({ control, index }) => {
  const value = useWatch({
    name: `content.${index}.file_name`,
    control,
  })

  return (
    <Controller
      control={control}
      name={`content.${index}.url`}
      render={({ field }) =>
        <TextInput
          placeholder='Image URL'
          disabled={!!value}
          {...field}
        />
      }
    />
  )
}
export default ConditionalInput

//{...register(`content.${index}.url` as const, { required: true })}
