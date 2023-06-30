import { z } from 'zod'

export const diaryInternalSchema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  likes: z.number().int().gte(0),
})

export type DiaryInternal = z.infer<typeof diaryInternalSchema>

export const diaryExternalSchema = diaryInternalSchema.extend({
  id: z.string()
})

export type DiaryExternal = z.infer<typeof diaryExternalSchema>
