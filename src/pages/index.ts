import { Home } from './home'
import { AboutHire } from './about-hire'
import { AboutMe } from './about-me'
import { BlogHome } from './blog-home'
import { BlogDiaryId } from './blog-diary-id'
import { BlogTagId } from './blog-tag-id'
import { AuthLogin } from './auth-login'
import { AdminHome } from './admin-home'
import { AdminDiaryList } from './admin-diary-list'
import { AdminDiaryId } from './admin-diary-id'
import { AdminTagList } from './admin-tag-list'
import { AdminTagId } from './admin-tag-id'
import { ErrorNotFound } from './error-not-found'
import { ErrorForbidden } from './error-forbidden'

export const routeMap = {
  home: {
    path: '/',
    Component: Home,
  },
  aboutHire: {
    path: '/about/hire',
    Component: AboutHire,
  },
  aboutMe: {
    path: '/about/me',
    Component: AboutMe,
  },
  blogHome: {
    path: '/blog',
    Component: BlogHome,
  },
  blogHomeTag: {
    path: '/blog/:tag?',
    Component: BlogHome,
  },
  blogDiaryId: {
    path: '/blog/diary/:id',
    Component: BlogDiaryId,
  },
  blogTagId: {
    path: '/blog/tag/:id',
    Component: BlogTagId,
  },
  authLogin: {
    path: '/auth/login',
    Component: AuthLogin,
  },
  adminHome: {
    path: '/admin/home',
    Component: AdminHome,
  },
  adminDiaryList: {
    path: '/admin/diary',
    Component: AdminDiaryList,
  },
  adminDiaryId: {
    path: '/admin/diary/:id',
    Component: AdminDiaryId,
  },
  adminTagList: {
    path: '/admin/tag',
    Component: AdminTagList,
  },
  adminTagId: {
    path: '/admin/tag/:id',
    Component: AdminTagId,
  },
  errorForbidden: {
    path: '/403',
    Component: ErrorForbidden,
  },
  errorNotFound: {
    path: '/404',
    Component: ErrorNotFound,
  },
}
