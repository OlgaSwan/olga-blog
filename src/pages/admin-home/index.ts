import { createLoadablePage } from 'src/shared/loadable-page'

export const AdminHome = createLoadablePage(() => import('./page'))
