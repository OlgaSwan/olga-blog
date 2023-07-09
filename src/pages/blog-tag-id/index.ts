import { createLoadablePage } from 'src/shared/loadable-page'

export const BlogTagId = createLoadablePage(() => import('./page'))
