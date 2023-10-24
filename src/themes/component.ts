import { Components, Theme } from '@/components'
// import {
//   AutocompleteOverride,
//   ButtonOverride,
//   TextFieldOverride,
// } from './overrides'

// DEFAULT THEME - COMPONENTS
export const getOverrideComponents = (): Components<
  Omit<Theme, 'components'>
> => {
  return {
    // ...ButtonOverride(),
    // ...TextFieldOverride(),
    // ...AutocompleteOverride(),
  }
}
