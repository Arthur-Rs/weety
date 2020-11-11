import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/AuthHook'

interface PrivateRouteProps {
  isPrivate: boolean
}

export const PrivateRoute = ({ isPrivate }: PrivateRouteProps) => {
  const { user, tokens } = useAuth()
  const { push } = useRouter()

  useEffect(() => {
    const isLogged = !!(user && tokens)

    if (isPrivate && !isLogged) {
      push('/login')
    } else if (!isPrivate && isLogged) {
      push('/')
    }
  }, [])

  return <></>
}

export function getServerSideProps({ resolvedUrl }) {
  console.log('sd')
  return {}
}
