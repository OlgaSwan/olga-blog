import { createLoadablePage } from '../../shared/loadable-page'

export const AdminUserList = createLoadablePage(() => import('./page'))
