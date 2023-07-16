import { DiaryExternal } from 'src/model/diary'

export const filterDiaries = (arr: DiaryExternal[] | null, isSliced: boolean, chosenTags: string[]) => {
  if (arr === null) return null
  if (chosenTags.length !== 0) {
    return arr.filter((diary) => {
      for (let tag of diary.tags) {
        let foundTag = chosenTags.includes(tag)
        if (foundTag) return true
      }
      return false
    })
  }
  if (isSliced) return arr.slice(0, 3)
  return arr
}
