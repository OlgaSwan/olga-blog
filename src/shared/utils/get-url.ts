import React, { Dispatch } from 'react'

export const getUrl = async (setOpen: Dispatch<React.SetStateAction<boolean>>, diary_id: string) => {
  const diaryURL = `/blog/diary/${diary_id}`
  try {
    await navigator.clipboard.writeText(window.location.origin + diaryURL)
    setOpen(true)
  } catch (error: unknown) {
    if (error instanceof Error) console.warn(error.message)
  }
}

//сложный выбор

// const getUrl1 = () => {
//   navigator.clipboard.writeText(window.location.href).then(() => alert('success')).catch(error => console.warn(error.message))
// }