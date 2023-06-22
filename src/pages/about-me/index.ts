import { createLoadablePage } from '../../shared/loadable-page'

export const AboutMe = createLoadablePage(() => import('./page'))
