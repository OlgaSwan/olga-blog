import { createLoadablePage } from '../../shared/loadable-page'

export const BlogHome = createLoadablePage(() => import('./page'))
