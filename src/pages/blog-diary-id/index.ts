import { createLoadablePage } from 'src/shared/loadable-page'

export const BlogDiaryId = createLoadablePage(() => import('./page'))
