import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { atom } from 'nanostores'

import { firebaseApp } from '../shared/firebase-app'

const firebaseAuth = getAuth(firebaseApp)

const store = atom<{} | null>(localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth') as string) : null)

store.subscribe((storeValue) => {
  if (localStorage.getItem('auth') !== storeValue) {
    if (storeValue) localStorage.setItem('auth', JSON.stringify(storeValue))
    else localStorage.removeItem('auth')
  }
})

// TODO подписать store на изменение localStorage
// window.addEventListener("storage", (event) => {})

const login = (loginData: { login: string; password: string }) => {
  signInWithEmailAndPassword(firebaseAuth, loginData.login, loginData.password)
    .then((userCredential) => {
      store.set(userCredential.user.toJSON())
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
      store.set(userCredential.user.toJSON())
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
