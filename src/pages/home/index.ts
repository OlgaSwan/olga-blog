import { createLoadablePage } from '../../shared/loadable-page'

export const Home = createLoadablePage(() => import('./page'))
