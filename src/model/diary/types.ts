export interface DiaryInternal {
  title: string
  content: Array<{
    kind: 'paragraph'
    text: string
  } | {
    kind: 'image'
    url: string
  } | {
    kind: 'iframe'
    url: string
  }>
  tags: Array<string>
}

export interface DiaryExternal extends DiaryInternal {
  id: string
}
