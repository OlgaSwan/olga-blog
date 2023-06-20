import React from 'react'
import { signOut } from 'firebase/auth'

import { auth } from '../model/auth'

export const signOutCustom = (setIsAuth: React.Dispatch<React.SetStateAction<boolean>>) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      setIsAuth(false)
      localStorage.setItem('isAuth', 'false')
    })
    .catch((error) => {
      // An error happened.
      console.log(error.message)
    })
}
