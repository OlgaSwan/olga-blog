import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@nanostores/react'

import { authStore } from './store'

export const useAuthRedirect = (mustBeAuthorized: boolean, redirectTo: string) => {
  const auth = useStore(authStore.store)
  const navigate = useNavigate()
  useEffect(() => {
    if (auth && !mustBeAuthorized) navigate(redirectTo)
    if (!auth && mustBeAuthorized) navigate(redirectTo)
  }, [auth, navigate, mustBeAuthorized, redirectTo])
}
