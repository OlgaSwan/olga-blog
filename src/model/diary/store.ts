import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  limit,
} from 'firebase/firestore'
import { atom } from 'nanostores'
import { faker } from '@faker-js/faker/locale/en'
import { random, sampleSize } from 'lodash-es'
import { eachLimit } from 'async'

import { firebaseApp } from 'src/shared/firebase-app'

import { DiaryExternal, DiaryInternal } from './types'

const firestore = getFirestore(firebaseApp)
const diaryCollection = collection(firestore, 'diary')

const orderedDiaryCollection = query(diaryCollection, orderBy('timestamp', 'desc'))
const limitedDiaryCollection = query(diaryCollection, orderBy('timestamp', 'desc'), limit(3))

const list = atom<Array<DiaryExternal> | null>(null)
const listLimited = atom<Array<DiaryExternal> | null>(null)

onSnapshot(orderedDiaryCollection, snapshot => {
  list.set(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as DiaryExternal))
})

onSnapshot(limitedDiaryCollection, snapshot => {
  listLimited.set(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as DiaryExternal))
})

export const diaryStore = {
  list,
  listLimited,
  add: async (diary: DiaryInternal) => {
    await addDoc(diaryCollection, diary)
  },
  addRandom: async () => {
    const data: DiaryInternal = {
      title: faker.company.catchPhrase(),
      content: new Array(random(5, 10)).fill('').map(() => ({
        kind: 'markdown',
        text: faker.helpers.multiple(faker.hacker.phrase, { count: random(10, 15, false) }).join(' '),
      })),
      tags: sampleSize(
        [
          'react',
          'vue',
          'angular',
          'graphql',
          'html',
          'css',
          'semantic-markup',
          'architecture',
          'security',
          'accessibility',
        ],
        random(2, 6),
      ),
      timestamp: Date.now(),
    }
    await addDoc(diaryCollection, data)
  },
  edit: async ({ id, ...diary }: DiaryExternal) => {
    await updateDoc(doc(diaryCollection, id), diary)
  },
  remove: async (id: string) => {
    await deleteDoc(doc(diaryCollection, id))
  },
  removeAll: async () => {
    const docsQuerySnapshot = await getDocs(diaryCollection)
    await eachLimit(docsQuerySnapshot.docs, 5, async d => await deleteDoc(d.ref))
  },
}
