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
    <Controller control={control} name={`content.${index}.file`} rules={{ required: true }}
                render={({ field: { onChange } }) =>
                  <Tip
                    content={<Box pad='none' height='small' width='small' alignSelf='center' justify='center'><Image
                      src={image} />
                    </Box>}
                    dropProps={{ background: { opacity: 40 } }}>
                    <FileInput multiple={false} onChange={(event) => {
                      if (event?.target.files && event.target.files[0]) {
                        onChange(event.target.files[0])
                        setImage(URL.createObjectURL(event.target.files[0]))
                      }
                    }
                    } />
                  </Tip>
                }
    />
  )
}
export default ImageInput
