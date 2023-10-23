import { LoginFormKey } from '@/constants'

export const setLoginFormValueHelper = (
  name: string,
  event: any,
  setFormValue: (prev: any) => void,
) => {
  switch (name) {
    case LoginFormKey.identifier:
    case LoginFormKey.credential:
      setFormValue((prev: any) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value: event.target.value,
        },
      }))
      break
    default:
      setFormValue((prev: any) => ({
        ...prev,
        [name]: event.target.value,
      }))
      break
  }
}
