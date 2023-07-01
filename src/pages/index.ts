import { Home } from './home'
import { AboutHire } from './about-hire'
import { AboutMe } from './about-me'
import { AboutUses } from './about-uses'
import { BlogHome } from './blog-home'
import { BlogDiaryId } from './blog-diary-id'
import { BlogTagId } from './blog-tag-id'
import { AuthLogin } from './auth-login'
import { AuthRecover } from './auth-recover'
import { AdminHome } from './admin-home'
import { AdminDiaryList } from './admin-diary-list'
import { AdminDiaryId } from './admin-diary-id'
import { AdminTagList } from './admin-tag-list'
import { AdminTagId } from './admin-tag-id'
import { AdminUserList } from './admin-user-list'
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
  aboutUses: {
    path: '/about/uses',
    Component: AboutUses,
  },
  blogHome: {
    path: '/blog',
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
  authRecover: {
    path: '/auth/recover',
    Component: AuthRecover,
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
  adminUserList: {
    path: '/admin/user',
    Component: AdminUserList,
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
