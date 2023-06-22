import { createLoadablePage } from '../../shared/loadable-page'

export const BlogDiaryId = createLoadablePage(() => import('./page'))
