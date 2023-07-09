import { createLoadablePage } from 'src/shared/loadable-page'

export const BlogHome = createLoadablePage(() => import('./page'))
