import { createLoadablePage } from 'src/shared/loadable-page'

export const AuthLogin = createLoadablePage(() => import('./page'))
