import { createLoadablePage } from '../../shared/loadable-page'

export const AdminHome = createLoadablePage(() => import('./page'))
