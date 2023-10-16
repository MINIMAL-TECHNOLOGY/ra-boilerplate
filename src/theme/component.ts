import { Components, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { BaseColor } from "./color";

// DEFAULT THEME - COMPONENTS
export const getOverrideComponents = (): Components<
  Omit<ReturnType<typeof createTheme>, "components">
> => {
  return {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiInputLabel: { styleOverrides: { asterisk: { color: red[700] } } },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ".web__layout &, .web__layout--modal &": {
            border: BaseColor.grey.main,
            backgroundColor: BaseColor.grey.ground,
          },
        },
      },
    },
  };
};
