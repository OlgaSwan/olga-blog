import { createLoadablePage } from '../../shared/loadable-page'

export const ErrorForbidden = createLoadablePage(() => import('./page'))
