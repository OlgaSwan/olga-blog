import { createLoadablePage } from '../../shared/loadable-page'

export const AdminDiaryList = createLoadablePage(() => import('./page'))
