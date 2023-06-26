import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'
import { atom } from 'nanostores'
import { company, lorem } from 'faker'
import { random, sampleSize } from 'lodash-es'
import { v4 as uuid } from 'uuid'

import { firebaseApp } from '../../shared/firebase-app'

import { Diary } from './types'

const firestore = getFirestore(firebaseApp)
const diaryCollection = collection(firestore, 'diary')

const store = atom<Array<Diary>>([])

export const diaryStore = {
  store,
  add: () => {},
  addRandom: () => {
    const data = {
      id: uuid(),
      title: company.catchPhrase(),
      content: lorem.paragraph(2),
      tags: sampleSize(
        [
          'JS',
          'TS',
          'Semantic HTML',
          'CSS Property',
          'SCSS',
          'react',
          'redux',
          'vue',
          'Git',
          'GitHub',
          'SAAS',
          'Vite',
          'Responsive Design',
          'MVP',
          'UX/UI',
        ],
        random(2, 6)
      ),
      likes: random(10, 1000, false),
    }
    addDoc(diaryCollection, data).then((docRef) => {
      // prettier-ignore
      store.set([
        ...store.get(),
        { ...data, id: docRef.id }
      ])
    })
  },
  edit: () => {},
  remove: () => {},
  fetchAll: () => {
    getDocs(diaryCollection).then((querySnapshot) => {
      // prettier-ignore
      store.set(querySnapshot.docs.map(doc =>
        ({ id: doc.id, ...doc.data() } as Diary)
      ))
    })
  },
  clearAll: () => {},
}

diaryStore.fetchAll()

store.subscribe((value) => console.log(value))
