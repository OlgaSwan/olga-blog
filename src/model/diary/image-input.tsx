import React, { FunctionComponent } from 'react'
import { Control, Controller, useWatch } from 'react-hook-form'
import { DiaryInternal } from 'src/model/diary/types'
import { Box, Image, TextInput, Tip } from 'grommet'

interface ImageInputProps {
  control: Control<DiaryInternal>
  index: number
}

const ImageInput: FunctionComponent<ImageInputProps> = ({ control, index }) => {
  const fileName = useWatch({
    name: `content.${index}.file_name`,
    control,
  })

  const url = useWatch({
    name: `content.${index}.url`,
    control,
  })

  return (
    <Controller
      control={control}
      name={`content.${index}.url`}
      rules={{ required: true }}
      render={({ field }) =>
        <Tip
          content={<Box pad='none' height='small' width='small' alignSelf='center' justify='center'><Image src={url} />
          </Box>}
          dropProps={{ background: { opacity: 40 } }}>
          <TextInput
            placeholder='Image URL'
            readOnly={!!fileName}
            {...field}
          />
        </Tip>
      }
    />
  )
}
export default ImageInput

