import { createLoadablePage } from 'src/shared/loadable-page'

export const Home = createLoadablePage(() => import('./page'))
