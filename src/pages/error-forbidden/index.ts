import { createLoadablePage } from 'src/shared/loadable-page'

export const ErrorForbidden = createLoadablePage(() => import('./page'))
