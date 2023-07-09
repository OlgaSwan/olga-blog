import { createLoadablePage } from 'src/shared/loadable-page'

export const AdminTagId = createLoadablePage(() => import('./page'))
