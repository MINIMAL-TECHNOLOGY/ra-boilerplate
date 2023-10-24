# Application guideline

## I. Naming convention ([Wikipedia](<https://en.wikipedia.org/wiki/Naming_convention_(programming)>))

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
