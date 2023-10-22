import { LoadingLogo } from '@/components'
import { Suspense, lazy } from 'react'

const Page = lazy(() => import('./Login'))

const LoginPage = () => {
  return (
    <Suspense fallback={<LoadingLogo />}>
      <Page />
    </Suspense>
  )
}

export { LoginPage }
