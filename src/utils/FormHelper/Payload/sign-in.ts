import { ILoginFormValue } from '@/constants'
// import { detectMobile } from './../../detectMobile'

export const convertInfoLoginToPayload = (login: ILoginFormValue) => {
  const rs: {
    [key: string]: any
  } = {}

  rs['identifier'] = { scheme: 'username', value: login.identifier?.value }
  rs['credential'] = { scheme: 'basic', value: login.credential?.value }
  // rs['framework'] = detectMobile() ? 'MOBILE' : 'WEB'

  return rs
}
