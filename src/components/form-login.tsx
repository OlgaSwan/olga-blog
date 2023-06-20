import React, { FunctionComponent, useContext, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Box, Button, Form, FormField, Text, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'
import { useNavigate } from 'react-router-dom'

import { auth } from '../model/auth'
import { AuthContext } from '../model/context/auth-context'

interface FormLoginData {
  login: string
  pass: string
}

export const FormLogin: FunctionComponent = () => {
  const [value, setValue] = useState<FormLoginData>({ login: '', pass: '' })
  const { setIsAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const reset = () => {
    setValue({ login: '', pass: '' })
  }

  const submit = () => {
    signInWithEmailAndPassword(auth, value.login, value.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setIsAuth(true)
        localStorage.setItem('isAuth', 'true')
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorMessage)
      })
  }

  return (
    <Box gap='medium'>
      <Box onClick={() => navigate('/login')}>
        <Icons.FormPrevious size='large' opacity='0%' />
      </Box>
      <Form value={value} onChange={(newValue) => setValue(newValue)} onReset={reset} onSubmit={submit}>
        <FormField label='Login'>
          <TextInput
            name='login'
            size='small'
            placeholder={
              <Text size='small' weight='normal' color='dark-3'>
                example@gmail.com
              </Text>
            }
          />
        </FormField>
        <FormField label='Password' margin={{ top: 'small' }}>
          <TextInput
            name='pass'
            size='small'
            placeholder={
              <Text size='small' weight='normal' color='dark-3'>
                enter your password
              </Text>
            }
          />
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
