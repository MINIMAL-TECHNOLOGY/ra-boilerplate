import {
  BreakpointsOptions,
  PaletteMode,
  PaletteOptions,
  ThemeOptions,
  TransitionsOptions,
} from "@mui/material";
import { MixinsOptions } from "@mui/material/styles/createMixins";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { ZIndexOptions } from "@mui/material/styles/zIndex";
import { getOverrideComponents } from "./component";
import { getPalette } from "./palette";
import { getTypography } from "./typography";

// DEFAULT THEME - BREAKPOINTS
const getBreakPoints = (): BreakpointsOptions => {
  return {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 768, md: 1024, lg: 1266, xl: 1536 },
    unit: "px",
  };
};

// DEFAULT THEME - TRANSITIONS
const getTransitions = (): TransitionsOptions => {
  return {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  };
};

// DEFAULT THEME - Z INDEX
const getZIndex = (): ZIndexOptions => {
  return {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  };
};

// DEFAULT THEME - MIXINS
const getMixins = (): MixinsOptions => {
  return {
    toolbar: { minHeight: 48, paddingTop: 4, paddingBottom: 4 },
  };
};

// DEFAULT THEME
const renderTheme = (opts: { mode: PaletteMode }): ThemeOptions => {
  const { mode } = opts;

  return {
    breakpoints: getBreakPoints(),
    direction: "ltr",
    palette: getPalette({ mode: mode }) as PaletteOptions,
    spacing: 4,
    shape: { borderRadius: 4 },
    transitions: getTransitions(),
    mixins: getMixins(),
    typography: getTypography() as TypographyOptions,
    zIndex: getZIndex(),
    components: getOverrideComponents(),
  };
};

export const Theme = {
  LIGHT: renderTheme({ mode: "light" }),
  DARK: renderTheme({ mode: "dark" }),
};
