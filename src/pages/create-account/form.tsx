import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Form, FormField, Text, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../model/auth'

interface FormData {
  login: string
  password: string
}

export const FormCreateAccount: FunctionComponent = () => {
  const [value, setValue] = useState<FormData>({ login: '', password: '' })
  const navigate = useNavigate()

  return (
    <Box gap='medium'>
      <Box onClick={() => navigate('/login')}>
        <Icons.FormPrevious size='large' />
      </Box>
      <Form
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onReset={() => setValue({ login: '', password: '' })}
        onSubmit={(event) => auth.register(event.value)}
      >
        <FormField label='Login'>
          <TextInput type='email' name='login' size='small' placeholder='example@gmail.com' />
        </FormField>
        <FormField label='Password' margin={{ top: 'small' }}>
          <TextInput type='password' name='password' size='small' placeholder='password' />
        </FormField>
        <Box direction='row' gap='medium' margin={{ top: 'large' }}>
          <Button type='submit' primary label={<Text weight='bold'>Create an account</Text>} />
          <Button type='reset' label={<Text weight='normal'>Reset</Text>} />
        </Box>
      </Form>
    </Box>
  )
}
