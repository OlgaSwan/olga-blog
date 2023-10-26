export interface DiaryInternal {
  title: string
  content: Array<Block>
  tags: Array<string>
  timestamp: number
}

export type Block = {
  kind: 'paragraph'
  text: string
} | {
  kind: 'iframe'
  url: string
} | {
  kind: 'image'
  url: string
}

export interface DiaryExternal extends DiaryInternal {
  id: string
}
