import React from 'react'

export const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>,
  cardRef: React.RefObject<HTMLDivElement>,
  moveCard: Function,
) => {
  if (cardRef.current) {
    const rect = cardRef.current.getBoundingClientRect()
    const isInCard =
      e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
    if (isInCard) {
      const halfWidth = rect.width / 2
      const halfHeight = rect.height / 2
      const centerX = rect.left + halfWidth
      const centerY = rect.top + halfHeight
      const rotateX = ((e.clientY - centerY) / halfHeight) * -10
      const rotateY = ((e.clientX - centerX) / halfWidth) * 10
      moveCard(rotateX, rotateY)
    }
  }
}
