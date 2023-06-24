import React, { FunctionComponent, useState, useEffect } from 'react'
import { getDatabase, ref, onValue, push, set } from 'firebase/database'
import { firebaseApp } from '../../shared/firebase-app'
import { allPostsStore, Post } from './store'
import { useStore } from '@nanostores/react'

import { Box } from 'grommet'

import { PostCard } from './post-card'

export const PostList: FunctionComponent = () => {
  const [allPosts, setAllPosts] = useState<Array<Post>>([])
  // const allRandomPosts = useStore(allPostsStore)
  const database = getDatabase(firebaseApp)
  const postsRef = ref(database, 'posts')

  useEffect(() => {
    // allRandomPosts.map((p) => {
    //   const newPostRef = push(postsRef)
    //   set(newPostRef, p)
    // })
    onValue(postsRef, (snapshot) => {
      const posts: Array<Post> = []
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key
        const childData = childSnapshot.val()
        posts.push(childData)
      })
      setAllPosts(posts)
    })
  }, [])

  return (
    <Box gap='medium'>
      {allPosts.map((p) => (
        <PostCard key={p.id} id={p.id} posts={allPosts} />
      ))}
    </Box>
  )
}
