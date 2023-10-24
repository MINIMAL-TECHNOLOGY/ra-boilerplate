import { BASE_URL } from '@/utils'
import { AuthService, LbProviderGetter, LocalStorageKeys } from '@ra/infra'
const authService = AuthService.getInstance()

export const checkAuth = () => {
  const token = authService.getAuthToken()

  if (!token) {
    return Promise.reject({ redirectTo: `/login` })
  }

  return new Promise<void>((resolve, reject) => {
    const tokenValue = JSON.parse(
      localStorage.getItem(LocalStorageKeys.KEY_AUTH_TOKEN) ?? '',
    )?.value

    LbProviderGetter({ baseUrl: BASE_URL })
      .send(`auth/who-am-i`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenValue}`,
          'Content-type': 'application/json',
        },
      })
      .then((rs: any) => {
        if (!rs?.data?.userId) {
          return reject({ redirectTo: `/login` })
        }

        resolve()
      })
      .catch((error) => {
        console.error('[checkAuth] Error: ', error)
      })
  })
}
