import React, { FunctionComponent } from 'react'
import { FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form'
import { Box, Button, TextArea, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'

import { DiaryInternal } from 'src/model/diary/index'
import TagInput from 'src/pages/blog-home/tag-input'
import { useAllTAgs } from 'src/shared/hooks/useAllTAgs'

interface Props {
  disabled?: boolean
  initialValue: DiaryInternal
  onSubmit: (value: DiaryInternal) => void
}

export const AdminDiaryIdEditor: FunctionComponent<Props> = ({
                                                               disabled = false,
                                                               initialValue,
                                                               onSubmit
                                                             }) => {
  const { control, register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: initialValue
  })
  const { fields, append, move, remove } = useFieldArray({
    control,
    name: 'content'
  })

  const tagsValue = getValues('tags')

  const createBlock = (field: FieldArrayWithId<DiaryInternal, 'content', 'id'>, index: number) => {
    if (field.kind === 'paragraph') return (
      <TextArea
        placeholder='Paragraph content'
        {...register(`content.${index}.text`)}
        required={true}
      />
    )
    if (field.kind === 'iframe') return (
      <TextInput
        placeholder='IFrame URL'
        {...register(`content.${index}.url`)}
        required={true}
      />
    )
    if (field.kind === 'image') return (
      <TextInput
        placeholder='Image URL'
        {...register(`content.${index}.url`)}
        required={true}
      />
    )
    return null
  }

  const deleteBlock = (index: number) => {
    remove(index)
  }

  const formUp = (index: number) => {
    if (index === 0) return
    move(index, index - 1)
  }

  const formDown = (index: number) => {
    if (index === fields.length - 1) return
    move(index, index + 1)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box gap='medium'>
        <Box>
          <TextInput
            placeholder='Title'
            disabled={disabled}
            {...register('title')}
            required={true}
          />
        </Box>
        <Box gap='medium'>

          {fields.map((field, index) => {
            return <Box gap='small' direction='row' key={field.id}>
              <Box direction='column' alignSelf='center'>
                <Icons.FormUp onClick={() => formUp(index)} cursor='pointer' />
                <Icons.FormDown onClick={() => formDown(index)} cursor='pointer' />
              </Box>
              {
                createBlock(field, index)
              }
              <Box direction='column' alignSelf='center'>
                <Icons.FormTrash onClick={() => deleteBlock(index)} cursor='pointer' />
              </Box>
            </Box>
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
        <Box>
          <TagInput value={tagsValue} suggestions={useAllTAgs()} onChange={(value) => setValue('tags', value)} />
        </Box>
        <Button
          type='submit'
          primary
          label='Submit'
          size='small'
          margin={{ top: 'medium' }}
          style={{ width: '200px' }}
        />
      </Box>
    </form>

  )
}