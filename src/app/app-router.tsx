import React, { FunctionComponent } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { routeMap } from 'src/shared/route-map'

import { Home } from 'src/pages/home'
import { AboutMe } from 'src/pages/about-me'
import { AboutHire } from 'src/pages/about-hire'
import { BlogHome } from 'src/pages/blog-home'
import { BlogDiaryId } from 'src/pages/blog-diary-id'
import { AuthLogin } from 'src/pages/auth-login'
import { AdminHome } from 'src/pages/admin-home'
import { AdminDiaryList } from 'src/pages/admin-diary-list'
import { AdminDiaryId } from 'src/pages/admin-diary-id'
import { AdminTagList } from 'src/pages/admin-tag-list'
import { ErrorForbidden } from 'src/pages/error-forbidden'
import { ErrorNotFound } from 'src/pages/error-not-found'

const router = createBrowserRouter([
  { path: routeMap.home, Component: Home },
  { path: routeMap.aboutMe, Component: AboutMe },
  { path: routeMap.aboutHire, Component: AboutHire },
  { path: routeMap.blogHome, Component: BlogHome },
  { path: routeMap.blogDiaryId(':id'), Component: BlogDiaryId },
  { path: routeMap.authLogin, Component: AuthLogin },
  { path: routeMap.adminHome, Component: AdminHome },
  { path: routeMap.adminDiaryList, Component: AdminDiaryList },
  { path: routeMap.adminDiaryId(':id'), Component: AdminDiaryId },
  { path: routeMap.adminTagList, Component: AdminTagList },
  { path: routeMap.errorForbidden, Component: ErrorForbidden },
  { path: routeMap.errorNotFound, Component: ErrorNotFound },
  { path: '*', element: <Navigate to='/404' /> }
])

export const AppRouter: FunctionComponent = () => <RouterProvider router={router} />
