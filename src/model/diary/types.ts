export interface DiaryInternal {
  title: string
  content: Array<Block>
  tags: Array<string>
  timestamp: number
}

export type Block =
  | {
      kind: 'paragraph'
      text: string
    }
  | {
      kind: 'iframe'
      url: string
    }
  | {
      kind: 'image'
      url: string
      file_name?: string
    }
  | {
      kind: 'file'
      file?: File
    }

export interface DiaryExternal extends DiaryInternal {
  id: string
}
