import { atom } from 'nanostores'
import { company, lorem } from 'faker'
import { v4 as uuid } from 'uuid'
import { random, sampleSize } from 'lodash-es'

export interface Post {
  id: string
  title: string
  desc: string
  likes: number
  tags: string[]
}

export const allPostsStore = atom<Array<Post>>([])

export const devTerms: string[] = ['JS', 'TS', 'SCSS', 'react', 'redux', 'vue']

allPostsStore.set(
  new Array(random(10, 20, false)).fill('').map(() => ({
    id: uuid(),
    title: company.catchPhrase(),
    desc: lorem.paragraph(2),
    likes: random(10, 1000, false),
    tags: sampleSize(devTerms, random(1, 3))
  }))
)




