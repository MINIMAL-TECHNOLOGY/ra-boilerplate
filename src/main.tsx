import { ConstantPathNavigation } from '@/constants'
import { enMessages, krMessages } from '@/locales'
import { checkAuth } from '@/services/auth.service'
import { Theme } from '@/theme'
import { getAuthProvider, getDataProvider, getI18nProvider } from '@ra/infra'
import React from 'react'
import { Admin, CustomRoutes } from 'react-admin'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import { BASE_URL } from './utils'

//---------------------------------------------------
const listLanguages = [{ locale: 'en', name: 'English' }]

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

const SemStudioApplication = () => {
  return (
    <Admin
      requireAuth
      i18nProvider={i18nProvider}
      dataProvider={dataProvider}
      loginPage={Login}
      authProvider={authProvider}
      theme={Theme.LIGHT}
      darkTheme={Theme.DARK}>
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

const root = ReactDOM.createRoot(document.getElementById('root')!)

//----------------------------------------------
root.render(
  <React.StrictMode>
    <SemStudioApplication />
  </React.StrictMode>,
)
