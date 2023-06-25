import { createLoadablePage } from '../../shared/loadable-page'

export const AdminTagId = createLoadablePage(() => import('./page'))
