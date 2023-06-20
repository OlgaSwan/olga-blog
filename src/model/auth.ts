import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { atom } from 'nanostores'

import { firebaseApp } from '../shared/firebase-app'

const firebaseAuth = getAuth(firebaseApp)

const store = atom<User | null>(firebaseAuth.currentUser)

const login = (loginData: { login: string; password: string }) => {
  signInWithEmailAndPassword(firebaseAuth, loginData.login, loginData.password)
    .then((userCredential) => {
      store.set(userCredential.user)
    })
    .catch((error) => {
      store.set(null)
      console.error(error)
    })
}

const logout = () => {
  signOut(firebaseAuth)
    .then(() => {
      store.set(null)
    })
    .catch((error) => {
      console.error(error)
    })
}

const register = (loginData: { login: string; password: string }) => {
  createUserWithEmailAndPassword(firebaseAuth, loginData.login, loginData.password)
    .then((userCredential) => {
      store.set(userCredential.user)
    })
    .catch((error) => {
      store.set(null)
      console.error(error)
    })
}

export const auth = {
  store,
  login,
  logout,
  register,
}
