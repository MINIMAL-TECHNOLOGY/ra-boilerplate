import { Components, createTheme } from '@mui/material'
import {
  AutocompleteOverride,
  ButtonOverride,
  TextFieldOverride,
} from './overrides'

// DEFAULT THEME - COMPONENTS
export const getOverrideComponents = (): Components<
  Omit<ReturnType<typeof createTheme>, 'components'>
> => {
  return {
    ...ButtonOverride(),
    ...TextFieldOverride(),
    ...AutocompleteOverride(),
  }
}
