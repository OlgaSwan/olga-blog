import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'
import { atom } from 'nanostores'
import { company, lorem } from 'faker'
import { random, sampleSize } from 'lodash-es'

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
      title: company.catchPhrase(),
      content: lorem.paragraph(2),
      tags: sampleSize(['JS', 'TS', 'SCSS', 'react', 'redux', 'vue'], random(1, 3)),
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
