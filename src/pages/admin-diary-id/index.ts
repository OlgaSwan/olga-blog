import { createLoadablePage } from '../../shared/loadable-page'

export const AdminDiaryId = createLoadablePage(() => import('./page'))
