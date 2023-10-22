import { BaseColor } from '../color'

export const ButtonOverride = () => {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: 12,
          fontWeight: 700,
          lineHeight: 1.5,
          padding: 0,
        },
        sizeSmall: {
          height: 24,
        },
        contained: {
          '&.Mui-disabled': {
            backgroundColor: BaseColor.GREY_9B9B9B,
          },
        },
        outlined: {
          '&.Mui-disabled': {
            borderColor: BaseColor.GREY_9B9B9B,
          },
        },
      },
    },
  }
}
