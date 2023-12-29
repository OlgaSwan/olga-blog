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
      kind: 'title&paragraph'
      title: string
      text: string
    }
  | {
      kind: 'iframe'
      url: string
    }
  | {
      kind: 'code'
      text: string
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
  | {
      kind: 'title'
      text: string
    }

export interface DiaryExternal extends DiaryInternal {
  id: string
}
