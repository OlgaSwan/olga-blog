import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Form, FormField, Text, TextInput } from 'grommet'

import { auth } from '../../model/auth'

import { routeMap } from '../index'

interface FormData {
  login: string
  password: string
}

export const FormCreateAccount: FunctionComponent = () => {
  const [value, setValue] = useState<FormData>({ login: '', password: '' })

  return (
    <Box gap='medium'>
      <Form
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onReset={() => setValue({ login: '', password: '' })}
        onSubmit={(event) => auth.register(event.value)}
      >
        <FormField label='Email'>
          <TextInput type='email' name='login' size='small' placeholder='email@example.com' />
        </FormField>
        <FormField label='Password' margin={{ top: 'small' }}>
          <TextInput type='password' name='password' size='small' placeholder='password' />
        </FormField>
        <Box direction='row' justify='between' gap='small' margin={{ top: 'large' }} wrap>
          <Box direction='row' gap='medium'>
            <Button type='submit' primary label={<Text weight='bold'>Create an account</Text>} />
            <Button type='reset' label={<Text weight='normal'>Reset</Text>} />
          </Box>
          <Box>
            <Button label={<Text weight='bold'>Sign in</Text>} href={routeMap.authLogin.path} />
          </Box>
        </Box>
      </Form>
    </Box>
  )
}
