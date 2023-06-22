import { createLoadablePage } from '../../shared/loadable-page'

export const AuthRegister = createLoadablePage(() => import('./page'))
