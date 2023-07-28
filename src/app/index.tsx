import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import 'modern-css-reset'

import { AppRouter } from './app-router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </React.StrictMode>,
)
