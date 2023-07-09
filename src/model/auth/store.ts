import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from 'firebase/auth'
import { atom } from 'nanostores'

import { firebaseApp } from 'src/shared/firebase-app'

const firebaseAuth = getAuth(firebaseApp)

const store = atom<User | null>(firebaseAuth.currentUser)

onAuthStateChanged(firebaseAuth, (user) => store.set(user))

export const authStore = {
  store,
  login: async (loginData: { login: string; password: string }) => {
    await signInWithEmailAndPassword(firebaseAuth, loginData.login, loginData.password)
  },
  logout: async () => {
    await signOut(firebaseAuth)
  },
  register: async (loginData: { login: string; password: string }) => {
    await createUserWithEmailAndPassword(firebaseAuth, loginData.login, loginData.password)
  },
}
