import React, { FunctionComponent } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { routeMap } from '../pages'

// prettier-ignore
const router = createBrowserRouter([
  ...Object.values(routeMap),
  { path: '*', element: <Navigate to='/404' /> }]
)

export const AppRouter: FunctionComponent = () => <RouterProvider router={router} />
