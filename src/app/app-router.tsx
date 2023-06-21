import React, { FunctionComponent, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home'
import { Diary } from '../pages/diary'
import { Login } from '../pages/login'
import { CreateAccount } from '../pages/create-account'
import { About } from '../pages/about'
import { Uses } from '../pages/uses'

export const AppRouter: FunctionComponent = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isAuth') === 'true') {
      setIsAuth(true)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/diary/:id' Component={Diary} />
        <Route path='/login' Component={Login} />
        <Route path='/create-account' Component={CreateAccount} />
        <Route path='/about' Component={About} />
        <Route path='/uses' Component={Uses} />
      </Routes>
    </BrowserRouter>
  )
}
