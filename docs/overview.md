# Application guideline

## I. Code structure of Studio Samick web client (using Regex patterns for file name's template)

```
.
├── .github/
│   └── workflows/
│       └── deployments.yml
├── nginx
├── docs/
│   └── overview.md
├── .storybook
├── public
├── src/
│   ├── apis
│   ├── assets/
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
│   ├── redux/
│   │   ├── fetch
│   │   ├── reducer
│   │   ├── saga
│   │   └── store.ts
│   ├── stories
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
├── start.sh
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
  - **_stories_**: document for components with ([StoryBook](https://storybook.ts.org/docs/react/writing-stories/introduction)).
  - **_utils_**: utility classes/functions (Classes/functions that can be reused for another project).
    - **_lodash-helper_**: contains some lodash function, which have already re-exported for reusable in project.

## II. Naming convention ([Wikipedia](<https://en.wikipedia.org/wiki/Naming_convention_(programming)>))

##### Naming rule for EPR application

1. **Folders**:
   - Use hyphen-delimiter, show specific name of the folder
   - Parent folder contains multiple files/folders that have the same meaning will be plural (end by `"s"`/`"es"`)
   - Sub-folder will not reshow type/purpose of parent
   - Example:
     - Correct: `pages`, `pages/not-found` (`not-found` is a sub-folder of `pages`)
     - Incorrect: ~~`page`~~ (missing `"s"`) , ~~`pageNotFound`~~ (invalid naming convention), ~~`pages/not-found-page`~~ (no need to add suffix `-page` because its meaning is clear at parent folder)
2. **Files**:
   - Use PascalCase (UpperCamelCase)
   - Files must show the type/purpose of parent folder and will be singular (the only exception is `Component` - to be consistent with Material UI library)
   - Example:
     - Correct: `UserService.ts`, `LoginPage.ts`, `LoginPage.css`, `MainRoute.ts`, `CookieUtil.ts`, `ProfileOverview.ts` (this is a component), `CounterSlice.ts`, etc.
     - Incorrect: ~~`loginPage.ts`~~ (invalid naming convention), ~~`login-page.ts`~~ (invalid naming convention), ~~`Login.ts`~~ (the correct 1 is `LoginPage.ts`), ~~`User.ts`~~ (the correct 1 is `UserService.ts`)
3. Properties / Variables:
   - Use (lower) camelCase for global properties/variables
   - User SCREAMING_SNAKE_CASE for constants
   - Optional: \_underScoreAndCamelCase is good to use as local variables
   - Name consists of `n words (n > 2)` should use abbreviation (3-4 letters) for first `(n-1) word(s)`
   - Example:
     - Properties/Variables: `name`, `country`, `phoneNumber`, `emailAddress`, `userImgUrl`
     - Constants: `URL_PATH`, `FILE_NAME`, `USER_IMG_URL`
4. Images/Icons:
   - Use hyphen-delimiter
   - Example:
     - Correct: `google-icon.svg`, `avatar.png`, `general-profile-background.jpg`
     - Incorrect: ~~`googleIcon.svg`~~, ~~`newImage.jpeg`~~, ~~`NoName.jpg`~~
