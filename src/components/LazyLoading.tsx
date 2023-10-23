import { ReactNode, Suspense } from 'react'
import { LoadingLogo } from './loading'

type TProps = {
  children?: ReactNode
  fn?: () => Promise<{
    default: React.ComponentType<any>
  }>
  isLoadingLogoComponent?: boolean
  props?: any
}

const LazyLoading = ({ children }: TProps) => {
  return <Suspense fallback={<LoadingLogo />}>{children}</Suspense>
}

export default LazyLoading
