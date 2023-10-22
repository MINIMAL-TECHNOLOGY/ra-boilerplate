import { PaletteMode } from '@mui/material'
import { amber, cyan, green, grey, red } from '@mui/material/colors'
import { BaseColor, primaryColor } from './color'

// DEFAULT THEME - PALETTE
export const getPalette = (opts: { mode: PaletteMode }) => {
  const { mode } = opts

  return {
    mode,
    common: {
      black: BaseColor.BLACK,
      white: BaseColor.WHITE,
    },
    primary: {
      ...primaryColor,
      light: BaseColor.PRIMARY.light,
      main: BaseColor.PRIMARY.main,
      dark: BaseColor.PRIMARY.dark,
      contrastText: BaseColor.WHITE,
    },
    secondary: {
      ...primaryColor,
      light: BaseColor.PRIMARY.light,
      main: BaseColor.PRIMARY.main,
      dark: BaseColor.PRIMARY.dark,
      contrastText: BaseColor.WHITE,
    },
    error: {
      light: red[400],
      main: BaseColor.RED,
      dark: red[800],
      contrastText: BaseColor.WHITE,
    },
    warning: {
      light: amber[400],
      main: amber[700],
      dark: amber[800],
      contrastText: BaseColor.WHITE,
    },
    info: {
      light: cyan[400],
      main: cyan[700],
      dark: cyan[800],
      contrastText: BaseColor.WHITE,
    },
    success: {
      light: green[400],
      main: green[700],
      dark: green[800],
      contrastText: BaseColor.WHITE,
    },
    grey: grey,
    text: {
      primary: BaseColor.BLACK,
      secondary: grey[700],
      disabled: grey[400],
    },
    divider: grey[300],
    background: {
      paper: BaseColor.WHITE,
      default: BaseColor.WHITE,
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: grey[400],
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  }
}
