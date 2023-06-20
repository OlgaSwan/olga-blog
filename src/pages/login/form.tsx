import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Form, FormField, Text, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../model/auth'

interface FormData {
  login: string
  password: string
}

export const FormLogin: FunctionComponent = () => {
  const [value, setValue] = useState<FormData>({ login: '', password: '' })
  const navigate = useNavigate()

  return (
    <Box gap='medium'>
      <Box onClick={() => navigate('/login')}>
        <Icons.FormPrevious size='large' opacity='0%' />
      </Box>
      <Form
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onReset={() => setValue({ login: '', password: '' })}
        onSubmit={(event) => auth.login(event.value)}
      >
        <FormField label='Login'>
          <TextInput type='email' name='login' size='small' placeholder='email@example.com' />
        </FormField>
        <FormField label='Password' margin={{ top: 'small' }}>
          <TextInput type='password' name='password' size='small' placeholder='password' />
        </FormField>
        <Box direction='row' justify='between' margin={{ top: 'large' }}>
          <Box direction='row' gap='medium'>
            <Button type='submit' primary label={<Text weight='bold'>Sign in</Text>} />
            <Button type='reset' label={<Text weight='normal'>Reset</Text>} />
          </Box>
          <Box>
            <Button primary label={<Text weight='bold'>Create an account</Text>} href='/createaccount' />
          </Box>
        </Box>
      </Form>
    </Box>
  )
}
