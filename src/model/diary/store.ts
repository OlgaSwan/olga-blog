import { collection, getFirestore, addDoc, updateDoc, doc, onSnapshot, deleteDoc, getDocs } from 'firebase/firestore'
import { atom } from 'nanostores'
import { faker } from '@faker-js/faker/locale/en'
import { random, sampleSize } from 'lodash-es'
import { eachLimit } from 'async'

import { firebaseApp } from 'src/shared/firebase-app'

import {
  DiaryExternal,
  diaryInternalSchema,
  DiaryInternal,
  tagInternalSchema,
  TagInternal,
  TagExternalSchema,
  TagExternal,
} from './types'

const firestore = getFirestore(firebaseApp)
const diaryCollection = collection(firestore, 'diary')
const tagsCollection = collection(firestore, 'tags')

const list = atom<Array<DiaryExternal> | null>(null)
const tagList = atom<Array<TagExternal>>([])

onSnapshot(diaryCollection, (snapshot) => {
  list.set(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as DiaryExternal))
})

onSnapshot(tagsCollection, (snapshot) => {
  tagList.set(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as TagExternal))
})

export const diaryStore = {
  list,
  tagList,
  add: async (diary: DiaryInternal) => {
    diaryInternalSchema.parse(diary)
    await addDoc(diaryCollection, diary)
  },
  // TODO addBatch
  addRandom: async () => {
    const data = {
      title: faker.company.catchPhrase(),
      content: faker.helpers.multiple(faker.hacker.phrase, { count: random(8, 25, false) }).join(' '),
      tags: sampleSize(
        tagList.get().map((e) => e.title),
        random(2, 6),
      ),
      minRead: random(3, 15, false),
      likes: random(100, 1000, false),
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
