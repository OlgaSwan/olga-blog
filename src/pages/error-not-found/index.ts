import { createLoadablePage } from '../../shared/loadable-page'

export const ErrorNotFound = createLoadablePage(() => import('./page'))
