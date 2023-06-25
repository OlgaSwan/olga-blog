import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAF4SYW1AGBbPUDFqM49pX3dR5esdn5hTY',
  authDomain: 'olya-blog-23a06.firebaseapp.com',
  projectId: 'olya-blog-23a06',
  storageBucket: 'olya-blog-23a06.appspot.com',
  messagingSenderId: '691086364086',
  appId: '1:691086364086:web:4ed1bb53acb4d658558517',
  measurementId: 'G-X0Z3SHYFML',
}

export const firebaseApp = initializeApp(firebaseConfig)
