import { addDoc, collection, deleteDoc, doc, getFirestore, onSnapshot } from 'firebase/firestore'
import { atom } from 'nanostores'

import { firebaseApp } from 'src/shared/firebase-app'
import { TagExternal, TagInternal } from 'src/model/tag/types'

const firestore = getFirestore(firebaseApp)
const tagsCollection = collection(firestore, 'tags')

const tags = atom<Array<TagExternal> | null>(null)

onSnapshot(tagsCollection, (snapshot) => {
  tags.set(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as TagExternal))
})

export const tagsStore = {
  tags,
  add: async (tag: TagInternal) => {
    await addDoc(tagsCollection, tag)
  },
  remove: async (id: string) => {
    await deleteDoc(doc(tagsCollection, id))
  },
}
