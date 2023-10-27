import type { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => {
  return useDispatch<AppDispatch>()
}

export const useMultipleAppDispatch = () => {
  const dispatch = useAppDispatch()

  return (actions: any[]) => actions.forEach((action) => dispatch(action))
}
