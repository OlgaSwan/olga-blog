import { z } from 'zod'

//#region Diary
export const diaryInternalSchema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  minRead: z.number().int().gte(0),
  likes: z.number().int().gte(0),
})

export type DiaryInternal = z.infer<typeof diaryInternalSchema>

export const diaryExternalSchema = diaryInternalSchema.extend({
  id: z.string(),
})

export type DiaryExternal = z.infer<typeof diaryExternalSchema>
//#endregion Diary

//#region Tags
export const tagInternalSchema = z.object({
  title: z.string(),
  content: z.string(),
  sortOrder: z.number().int().gte(0),
})

export type TagInternal = z.infer<typeof tagInternalSchema>

export const TagExternalSchema = tagInternalSchema.extend({
  id: z.string(),
})

export type TagExternal = z.infer<typeof TagExternalSchema>
//#endregion Tags
