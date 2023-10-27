import React, { FunctionComponent, useState } from 'react'
import { FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form'
import { Box, Button, FileInput, Notification, TextArea, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'

import { useStore } from '@nanostores/react'
import { tagsStore } from 'src/model/tag/store'

import { DiaryInternal } from 'src/model/diary/index'
import { deleteImageFromFirebase, uploadPhoto } from 'src/shared/utils/image-storage'
import TagInput from 'src/pages/blog-home/tag-input'

interface Props {
  disabled?: boolean
  initialValue: DiaryInternal
  onSubmit: (value: DiaryInternal) => void
}

export const AdminDiaryIdEditor: FunctionComponent<Props> = ({
                                                               disabled = false,
                                                               initialValue,
                                                               onSubmit,
                                                             }) => {
  const { control, register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: initialValue, mode: 'onChange',
  })
  const { fields, append, move, remove } = useFieldArray({
    control,
    name: 'content',
  })

  const tagsDB = useStore(tagsStore.tags)
  const tagsValue = getValues('tags')

  const getFirebaseFileUrl = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target.files) return
    const file = event.target.files[0]
    const url = await uploadPhoto(file)
    if (url) append({ kind: 'image', url: url })
    setOpen(true)
  }

  const [open, setOpen] = useState(false)
  const createBlock = (field: FieldArrayWithId<DiaryInternal, 'content', 'id'>, index: number) => {
    switch (field.kind) {
      case 'paragraph':
        return <TextArea
          placeholder='Paragraph content'
          {...register(`content.${index}.text` as const, { required: true, minLength: 20 })}
        />
      case 'image':
        return <TextInput
          placeholder='Image URL'
          {...register(`content.${index}.url` as const, { required: true })}
        />
      case 'iframe':
        return <TextInput
          placeholder='IFrame URL'
          {...register(`content.${index}.url` as const, { required: true })}
        />
      default:
        return null
    }
  }

  const deleteBlock = async (field: FieldArrayWithId<DiaryInternal, 'content', 'id'>, index: number) => {
    if (field.kind === 'image') await deleteImageFromFirebase(field.url)
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
      {open && (
        <Notification
          toast
          time={2000}
          icon={<Icons.StatusGood color='brand' />}
          message='Image uploaded!'
          onClose={() => setOpen(false)}
        />
      )}
      <Box gap='medium'>
        <Box>
          <TextInput
            placeholder='Title'
            disabled={disabled}
            {...register('title' as const, { required: true, minLength: 4, maxLength: 50 })}
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
                <Icons.FormTrash onClick={() => deleteBlock(field, index)} cursor='pointer' />
              </Box>
            </Box>
          })}
        </Box>
        <Box direction='row' align='start' gap='small'>
          <Button
            icon={<Icons.Add size='18px' />}
            label='Paragraph'
            onClick={() => {
              append({ kind: 'paragraph', text: '' })
            }}
          />
          <Button
            icon={<Icons.Add size='18px' />}
            label='IFrame'
            onClick={() => {
              append({ kind: 'iframe', url: '' })
            }}
          />
          <Button
            icon={<Icons.Add size='18px' />}
            label='Image'
            onClick={() => {
              append({ kind: 'image', url: '' })
            }}
          />
        </Box>
        <Box>
          <TagInput value={tagsValue} suggestions={tagsDB?.map(t => t.name)}
                    onChange={(value) => setValue('tags', value)} />
        </Box>
        <FileInput
          name='file'
          multiple={false}
          onChange={async event => {
            if (event) await getFirebaseFileUrl(event)
          }}
        />
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
