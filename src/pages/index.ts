import { Home } from './home'
import { AboutHire } from './about-hire'
import { AboutMe } from './about-me'
import { AboutUses } from './about-uses'
import { BlogHome } from './blog-home'
import { BlogDiaryId } from './blog-diary-id'
import { BlogTagId } from './blog-tag-id'
import { AuthLogin } from './auth-login'
import { AuthRegister } from './auth-register'
import { AuthRecover } from './auth-recover'
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
  authRegister: {
    path: '/auth/register',
    Component: AuthRegister,
  },
  authRecover: {
    path: '/auth/recover',
    Component: AuthRecover,
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
