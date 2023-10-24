import { ConstantPathNavigation } from '@/constants'
import { en, ko } from '@/locales'
import { LoginPage } from '@/pages/Login'
import { checkAuth } from '@/services/auth.service'
import { Theme } from '@/themes'
import '@/themes/index.css'
import { getAuthProvider, getDataProvider, getI18nProvider } from '@ra/infra'
import { BASE_URL } from '@/utils'
import { Admin, CustomRoutes, Resource, ResourceProps } from 'react-admin'
import { Route } from 'react-router-dom'

//---------------------------------------------------
const listLanguages = [
  { locale: 'en', name: 'English' },
  { locale: 'ko', name: 'Korean' },
]

const i18n = { en, ko }

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

// Add resource for react-admin
const resourceRoutes: ResourceProps[] = [
  {
    name: '/',
    list: <h1>List Component </h1>,
    show: <h1>Show Component </h1>,
    edit: <h1>Edit Component </h1>,
    create: <h1>Create Component </h1>,
  },
]

const customRoutes = [
  { path: ConstantPathNavigation.USER, element: <h1>User Component </h1> },
]

const MainApplication = () => {
  return (
    <Admin
      title="React-Admin Boilerplate"
      requireAuth
      disableTelemetry
      i18nProvider={i18nProvider}
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      theme={Theme.LIGHT}
      darkTheme={Theme.DARK}
      defaultTheme="light">
      {resourceRoutes.map((props: ResourceProps) => {
        // eslint-disable-next-line react/prop-types
        return <Resource {...props} key={props.name} />
      })}

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

export default MainApplication
