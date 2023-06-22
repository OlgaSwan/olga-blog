import { createLoadablePage } from '../../shared/loadable-page'

export const AuthRecover = createLoadablePage(() => import('./page'))
