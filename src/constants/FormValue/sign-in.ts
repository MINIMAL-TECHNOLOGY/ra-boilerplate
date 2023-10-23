import { ILoginFormValue } from '@/interfaces'

export const defaultLoginFormValue: ILoginFormValue = {
  identifier: { scheme: 'username', value: '' },
  credential: { scheme: 'basic', value: '' },
}

export const defaultLoginErrorFormValue = {
  identifier: '',
  credential: '',
}
