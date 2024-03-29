import { ConstantPathNavigation } from '@/constants'
import { LoginPage } from '@/pages/Login'
import { store } from '@/redux/store'
import { Theme } from '@/themes'
import '@/themes/index.css'
import { Admin, CustomRoutes, Resource, ResourceProps } from 'react-admin'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

// Add resource for react-admin
const resourceRoutes: ResourceProps[] = [
  {
    name: '/login',
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
    <Provider store={store}>
      <Admin
        title="React-Admin Boilerplate"
        requireAuth
        disableTelemetry
        // i18nProvider={i18nProvider}
        // dataProvider={dataProvider}
        // authProvider={authProvider}
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
    </Provider>
  )
}

export default MainApplication
