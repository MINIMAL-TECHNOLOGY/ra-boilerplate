import { Loading } from '@/components'
import { Suspense, lazy } from 'react'

const Page = lazy(() => import('./Login'))

const LoginPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  )
}

export { LoginPage }
