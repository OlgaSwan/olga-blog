import { createLoadablePage } from 'src/shared/loadable-page'

export const AdminTagList = createLoadablePage(() => import('./page'))
