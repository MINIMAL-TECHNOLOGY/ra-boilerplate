import { ConstantPathNavigation } from '@/constants'
import { enMessages, krMessages } from '@/locales'
import Login from '@/pages/Login'
import { checkAuth } from '@/services/auth.service'
import { Theme } from '@/themes'
import { BASE_URL } from '@/utils'
import { getAuthProvider, getDataProvider, getI18nProvider } from '@ra/infra'
import { Admin, CustomRoutes } from 'react-admin'
import { Route } from 'react-router-dom'
import './themes/index.css'

//---------------------------------------------------
const listLanguages = [
  { locale: 'en', name: 'English' },
  { locale: 'ko', name: 'Korean' },
]

const i18n = {
  en: { ...enMessages },
  kr: { ...krMessages },
}

//---------------------------------------------------
const dataProvider = getDataProvider({
  baseUrl: BASE_URL,
  authPath: '/auth/signIn',
})

//---------------------------------------------------
const authProvider = getAuthProvider({
  dataProvider,
  authPath: '/auth/signIn',
  checkAuth,
})

//---------------------------------------------------
const i18nProvider = getI18nProvider({
  i18n,
  listLanguages,
})

const customRoutes = [
  { path: ConstantPathNavigation.USER, element: <h1>User Component </h1> },
]

const SemStudioApp = () => {
  return (
    <Admin
      title="STUDIO SAMICK 정산 관리 시스템"
      requireAuth
      disableTelemetry
      i18nProvider={i18nProvider}
      dataProvider={dataProvider}
      loginPage={Login}
      authProvider={authProvider}
      theme={Theme.LIGHT}
      darkTheme={Theme.DARK}
      defaultTheme="light">
      <CustomRoutes>
        {customRoutes.map((route) => {
          return (
            <Route
              key={`${route.path}`}
              path={route.path}
              element={route.element}
            />
          )
        })}
      </CustomRoutes>
    </Admin>
  )
}

export default SemStudioApp
