import React, { FunctionComponent, useRef } from 'react'
import { Controller, FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form'
import { Box, Button, TextArea, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'

import { useStore } from '@nanostores/react'
import { tagsStore } from 'src/model/tag/store'

import { DiaryInternal } from 'src/model/diary/index'
import { deleteImageFromFirebase, uploadPhoto } from 'src/shared/utils/image-storage'
import { TagInput } from 'src/model/tag'
import ImageUrlInput from 'src/model/diary/imageurl-input'
import ImageInput from 'src/model/diary/image-input'

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
  const { control, register, handleSubmit } = useForm({
    defaultValues: initialValue, mode: 'onChange',
  })
  const { fields, append, move, remove } = useFieldArray({
    control,
    name: 'content',
  })

  const tagsDB = useStore(tagsStore.tags)

  const uploadPhotos = async (diary: DiaryInternal) => {
    const diaryCopy = { ...diary }
    diaryCopy.content = []

    for (let block of diary.content) {
      if (block.kind === 'file' && block.file) {
        const arr = await uploadPhoto(block.file)
        if (arr) {
          diaryCopy.content.push({ kind: 'image', url: arr[0], file_name: arr[1] })
        }
      } else diaryCopy.content.push(block)
    }
    onSubmit(diaryCopy)
  }

  const createBlock = (field: FieldArrayWithId<DiaryInternal, 'content'>, index: number) => {
    switch (field.kind) {
      case 'paragraph':
        return <TextArea
          placeholder='Paragraph content'
          {...register(`content.${index}.text` as const, { required: true, minLength: 20 })}
        />
      case 'image':
        return <ImageUrlInput control={control} index={index} />
      case 'iframe':
        return <TextInput
          placeholder='IFrame URL'
          {...register(`content.${index}.url` as const, { required: true })}
        />
      case 'file':
        return <ImageInput control={control} index={index} />
      default:
        return null
    }
  }

  const deleteBlock = async (index: number) => {
    const field = fields.at(index)
    if (field && field.kind === 'image') await deleteImageFromFirebase(field.url)
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

  const dragItem = useRef<number | null>(null)
  const dragOverItem = useRef<number | null>(null)

  const handleDrag = () => {
    if (dragItem.current === null || dragOverItem.current === null) return
    move(dragItem.current, dragOverItem.current)
  }

  return (
    <form onSubmit={handleSubmit(async (diary) => await uploadPhotos(diary))}>
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
            return <Box gap='small' direction='row' key={field.id} draggable
                        onDragOver={(e) => e.preventDefault()}
                        onDragStart={() => dragItem.current = index}
                        onDragEnter={() => dragOverItem.current = index}
                        onDrop={handleDrag}
                        style={{ cursor: 'move' }}>
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
            icon={<Icons.Add size='16px' />}
            label='Paragraph'
            onClick={() => {
              append({ kind: 'paragraph', text: '' })
            }}
          />
          <Button
            icon={<Icons.Add size='16px' />}
            label='IFrame'
            onClick={() => {
              append({ kind: 'iframe', url: '' })
            }}
          />
          <Button
            icon={<Icons.Add size='16px' />}
            label='Image'
            onClick={() => {
              append({ kind: 'image', url: '' })
            }}
          />
          <Button
            icon={<Icons.Add size='16px' />}
            label='File'
            onClick={() => {
              append({ kind: 'file' })
            }}
          />
        </Box>
        <Controller control={control} name='tags' rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <TagInput value={value} suggestions={tagsDB?.map(t => t.name)}
                                onChange={onChange} />
                    )} />
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
