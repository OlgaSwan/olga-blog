import React, { FunctionComponent, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { DiaryInternal } from 'src/model/diary/types'
import { Box, FileInput, Image, Tip } from 'grommet'

interface FileInputProps {
  control: Control<DiaryInternal>
  index: number
}

const ImageInput: FunctionComponent<FileInputProps> = ({ control, index }) => {
  const [image, setImage] = useState('')

  return (
    <Controller
      control={control}
      name={`content.${index}.file`}
      rules={{ required: true }}
      render={({ field: { onChange } }) => (
        <Box fill={true}>
          <Tip
            content={
              <Box height='small' width='small' alignSelf='center' justify='center'>
                <Image src={image} />
              </Box>
            }
            dropProps={{ background: { opacity: 40 } }}
          >
            <Box fill={true}>
              <FileInput
                multiple={false}
                onChange={event => {
                  const file = event?.target.files?.[0]
                  onChange(file)
                  setImage(file ? URL.createObjectURL(file) : '')
                }}
              />
            </Box>
          </Tip>
        </Box>
      )}
    />
  )
}
export default ImageInput
