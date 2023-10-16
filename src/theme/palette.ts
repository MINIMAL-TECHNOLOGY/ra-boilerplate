import { PaletteMode } from '@mui/material'
import { amber, cyan, green, grey, red } from '@mui/material/colors'
import { BaseColor, primaryColor } from './color'

// DEFAULT THEME - PALETTE
export const getPalette = (opts: { mode: PaletteMode }) => {
  const { mode } = opts

  return {
    mode,
    common: {
      black: BaseColor.black,
      white: BaseColor.white,
    },
    primary: {
      ...primaryColor,
      lighter: BaseColor.primary.lighter,
      light: BaseColor.primary.light,
      main: BaseColor.primary.main,
      dark: BaseColor.primary.main,
      darker: BaseColor.primary.main,
      contrastText: BaseColor.white,
    },
    secondary: {
      ...primaryColor,
      lighter: BaseColor.primary.lighter,
      light: BaseColor.primary.light,
      main: BaseColor.primary.main,
      dark: BaseColor.primary.main,
      darker: BaseColor.primary.main,
      contrastText: BaseColor.white,
    },
    error: {
      lighter: red[100],
      light: red[400],
      main: red[700],
      dark: red[800],
      darker: red[900],
      contrastText: BaseColor.white,
    },
    warning: {
      lighter: amber[100],
      light: amber[400],
      main: amber[700],
      dark: amber[800],
      darker: amber[900],
      contrastText: BaseColor.white,
    },
    info: {
      lighter: cyan[100],
      light: cyan[400],
      main: cyan[700],
      dark: cyan[800],
      darker: cyan[900],
      contrastText: BaseColor.white,
    },
    success: {
      lighter: green[100],
      light: green[400],
      main: green[700],
      dark: green[800],
      darker: green[900],
      contrastText: BaseColor.white,
    },
    grey: {
      ...grey,
      ground: BaseColor.grey.ground,
      dark: BaseColor.grey.dark,
      main: BaseColor.grey.main,
    },
    text: {
      primary: BaseColor.black,
      secondary: grey[700],
      disabled: grey[400],
    },
    divider: grey[300],
    background: {
      paper: BaseColor.white,
      default: BaseColor.white,
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

