import { company, lorem } from 'faker'
import { v4 as uuid } from 'uuid'
import { random, sampleSize } from 'lodash-es'
import { atom } from 'nanostores'
import { getDatabase, onValue, ref } from 'firebase/database'

import { firebaseApp } from '../../shared/firebase-app'

export interface Post {
  id: string
  title: string
  desc: string
  likes: number
  tags: string[]
}

export const allPostsStore = atom<Array<Post>>([])

const database = getDatabase(firebaseApp)
const postsRef = ref(database, 'posts')

onValue(postsRef, (snapshot) => {
  const posts: Array<Post> = []
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key
    const childData = childSnapshot.val()
    posts.push(childData)
  })
  allPostsStore.set(posts)
})

const generateRandomPosts = () => {
  const devTerms: string[] = ['JS', 'TS', 'SCSS', 'react', 'redux', 'vue']

  allPostsStore.set(
    new Array(random(10, 20, false)).fill('').map(() => ({
      id: uuid(),
      title: company.catchPhrase(),
      desc: lorem.paragraph(2),
      likes: random(10, 1000, false),
      tags: sampleSize(devTerms, random(1, 3)),
    }))
  )
}
