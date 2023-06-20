import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-css-reset'

import './full-size-page.css'

import { AppRouter } from './app-router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
