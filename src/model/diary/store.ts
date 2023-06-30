import { collection, getFirestore, addDoc, updateDoc, doc, onSnapshot, deleteDoc, getDocs } from 'firebase/firestore'
import { atom } from 'nanostores'
import { company, lorem } from 'faker'
import { random, sampleSize } from 'lodash-es'
import { eachLimit } from 'async'

import { firebaseApp } from '../../shared/firebase-app'

import { DiaryExternal, diaryInternalSchema, DiaryInternal } from './types'

const firestore = getFirestore(firebaseApp)
const diaryCollection = collection(firestore, 'diary')

const list = atom<Array<DiaryExternal>>([])

onSnapshot(diaryCollection, (snapshot) => {
  list.set(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DiaryExternal)))
})

export const diaryStore = {
  list,
  add: async (diary: DiaryInternal) => {
    diaryInternalSchema.parse(diary)
    await addDoc(diaryCollection, diary)
  },
  // TODO addBatch
  addRandom: async () => {
    const data = {
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
    await addDoc(diaryCollection, data)
  },
  // TODO addRandomBatch
  edit: async ({ id, ...diary }: DiaryExternal) => {
    await updateDoc(doc(diaryCollection, id), diary)
  },
  remove: async (id: string) => {
    await deleteDoc(doc(diaryCollection, id))
  },
  // TODO removeBatch
  removeAll: async () => {
    const docsQuerySnapshot = await getDocs(diaryCollection)
    await eachLimit(docsQuerySnapshot.docs, 5, async (d) => await deleteDoc(d.ref))
  },
}
