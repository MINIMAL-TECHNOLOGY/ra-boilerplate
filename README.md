# React-admin boilerplate:

## Application guideline

```
.
├── nginx
├── docs
│   ├── conventions
│   │   ├── commit.md
│   │   ├── naming.md
├── public
├── src
│   ├── apis
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   │   └── svgs
│   ├── components
│   ├── constants
│   ├── helpers
│   ├── hooks
│   ├── interfaces
│   ├── locales
│   ├── layouts
│   ├── pages
│   ├── provider
│   ├── redux
│   │   ├── fetch
│   │   ├── reducer
│   │   ├── saga
│   │   └── store.ts
│   ├── themes
│   ├── utils
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── ...
├── ...
├── package.json
├── index.html
├── .env
├── vite.config.ts
├── reconfig.sh
└── clean.sh
```

### Explanation:

- **_public_**
- **_src_**:
  - **_main.tsx_** (by default): the file is responsible for rendering the root component and mounting it to the DOM.
  - **_App.tsx_**: file contains the root component of the app (including routing logic between pages).
  - **_apis_**: API request declarations.
  - **_assets_**: global static assets of project.
    - **_icons_**: format: svg,...
    - **_images_**: format: png, jpg, jpeg, ico.
    - **_svgs_**: format: svg.
  - **_components_**: common and reusable components.
    - **_button_**
    - **_input_**
    - **_table_**
    - ...
    - **_mui-components_**: This contains Components from Material UI (MUI), which have already re-exported for reusable in project.
    - **_mui-icons_**: This contains icons Components from Icons Material UI (MUI), which have already re-exported for reusable project.
  - **_constants_**: folder save static/unchanged values.
  - **_helpers_**: helper functions (Only used in this project).
  - **_hooks_**:
  - **_interfaces_**:
  - **_locales_**: Holds internationalization config, entries and messages for each language.
  - **_layouts_**:
  - **_pages_**: for the contains DOM element for all pages in the application (each page is a child folder inside)
    - **_login_**: folders represent for the pages
      - **_mobile_**: contains layout of mobile components (`.tsx` files) inside a page.
      - **_web_**: contains layout of big screen devices components (`.tsx` files) inside a page.
      - **_context.tsx_**
      - **_LoginPage.tsx_**
      - **_index.ts_**
    - ...
  - **_providers_**: list providers config must have when use `React-Admin`
    - **_dataProvider_**: handling request and response data inside `React-Admin`
    - **_authProvider_**: handling authentication of **App**
    - **_i18nProvider (i18n)_** : help us easy to config translation for our application
    - **_fetch_**:
    - **_storage_**:
  - **_redux_**: Reducer logics and actions handler (`Typescript files`)
    - **_sagas_**: folder contains side effect of saga.
    - **_slices_**: folder contains reducers, action.
    - **_store.ts_**: store setup.
  - **_themes_**: Themes/styles of the app.
    - **_overrides_**: folder contains override components.
    - **_color.ts_**: color constants.
    - **_component.ts_**: including override components for the App.
    - **_palette_**: define color for the App.
    - **_typography_**: define typography, font size,... for the App.
  - **_utils_**: utility classes/functions (Classes/functions that can be reused for another project).
    - **_lodash-helper_**: contains some lodash function, which have already re-exported for reusable in project.

## Packages inside:

- Vite
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- React-admin
- Redux-toolkit
- Mui

## Config steps:

1. You can use npm, yarn or pnpm by your own. Currently, ra-boilerplate use yarn
2. Run command `(npm/yarn/pnpm) run reconfig <your-github-link>`: which will help you change the git remote
   Eg: `pnpm reconfig https://github.com/MINIMAL-TECHNOLOGY/ra-boilerplate.git`

## Deployment and Documentation:

3. We have already have documents for commit convention and nginx, you can re-config & re-define by your own also.
4. We also have husky:

   1. Usage for check syntax by the rules which is defined in eslint, so consider to re-config the rules for your team.
   2. Currently husky will only check the commit changes not whole the project.

5. Checkout the file `environment.ts` to re-config your endpoint to your back-end
6. Checkout the script `dev:local`, which you can use your React with your own local back-end that need the file `.env.dev-local`
7. Happy Coding!!
