import { createLoadablePage } from 'src/shared/loadable-page'

export const AdminDiaryId = createLoadablePage(() => import('./page'))
