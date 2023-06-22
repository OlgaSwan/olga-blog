import { createLoadablePage } from '../../shared/loadable-page'

export const BlogTagId = createLoadablePage(() => import('./page'))
