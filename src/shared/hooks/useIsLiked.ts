import { useCallback, useEffect, useState } from 'react'

const getLikedIds = (): string[] => JSON.parse(localStorage.getItem('isLiked') || '[]')

export const useIsLiked = (id?: string): [boolean, () => void] => {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (id) {
      const likedIds = getLikedIds()
      setIsLiked(likedIds.includes(id))
    }
  }, [id])

  const likeToggle = useCallback(() => {
    if (id) {
      const likedIds = getLikedIds()
      const updatedLikedIds = likedIds.includes(id) ? likedIds.filter(likedId => likedId !== id) : [...likedIds, id]
      if (updatedLikedIds.length > 0) localStorage.setItem('isLiked', JSON.stringify(updatedLikedIds))
      else localStorage.removeItem('isLiked')
      setIsLiked(prevState => !prevState)
    }
  }, [id])
  return [isLiked, likeToggle]
}
