import { createLoadablePage } from '../../shared/loadable-page'

export const AuthLogin = createLoadablePage(() => import('./page'))
