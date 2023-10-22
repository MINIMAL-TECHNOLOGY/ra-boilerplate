import { BaseColor } from '../color'

export const AutocompleteOverride = () => {
  return {
    MuiAutocomplete: {
      defaultProps: { autoHighlight: true },
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-inputRoot': {
            '#login__page &, .web__layout &, .web__layout--modal &': {
              padding: 0,
            },

            '& .MuiAutocomplete-endAdornment': {
              position: 'relative',
              height: 24,
              '& button': {
                width: 24,
                height: '100%',
                padding: 2,
              },
              '& svg': {
                color: BaseColor.BLACK,
                width: 17,
                height: 17,
              },
            },
          },
        },
        listbox: {
          maxHeight: 500,
        },
      },
    },
  }
}
