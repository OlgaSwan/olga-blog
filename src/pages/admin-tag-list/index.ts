import { createLoadablePage } from '../../shared/loadable-page'

export const AdminTagList = createLoadablePage(() => import('./page'))
