import { createLoadablePage } from 'src/shared/loadable-page'

export const AdminDiaryList = createLoadablePage(() => import('./page'))
