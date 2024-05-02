import { useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useAuth } from '@lib/context/auth-context';
import type { User } from '@lib/types/user'
import { useSession } from 'next-auth/react'

export function useRequireAuth(redirectUrl?: string): User | null {
//   const { user, loading } = useAuth()
  const { data: { user } } = useSession()
  const { replace } = useRouter()

  useEffect(() => {
    if (!loading && !user)
      void replace(redirectUrl ?? '/')
  }, [user, loading])

  return user
}
