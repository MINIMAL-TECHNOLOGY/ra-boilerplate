import { ReactNode, Suspense } from 'react'
import { Loading } from '../loading'

type TProps = {
  children?: ReactNode
  fn?: () => Promise<{
    default: React.ComponentType<any>
  }>
  props?: any
}

const LazyLoading = ({ children }: TProps) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default LazyLoading
