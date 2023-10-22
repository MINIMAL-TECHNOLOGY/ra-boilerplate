import { BaseColor } from '../color'

export const TextFieldOverride = () => {
  const labelWidth = '100px'

  return {
    MuiTextField: {
      defaultProps: {},
      styleOverrides: {
        root: {
          '&.MuiFormControl-root': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',

            '& .MuiFormLabel-root': {
              alignSelf: 'center',
              maxWidth: labelWidth,
              transform: 'unset',
              position: 'relative',
              flex: `1 0 ${labelWidth}`,
              color: BaseColor.BLACK,
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1.5,

              '&.Mui-disabled, &.Mui-focused, &.Mui-error': {
                color: BaseColor.BLACK,
              },
            },

            '& .MuiFormLabel-asterisk': {
              color: BaseColor.RED,
            },

            '& .MuiInputBase-root': {
              flex: `1 0 calc(100% - ${labelWidth})`,
              backgroundColor: BaseColor.WHITE,
              borderColor: BaseColor.GREY_E5E5E5,
              minWidth: 100,

              '&.Mui-disabled': {
                backgroundColor: BaseColor.GREY_EEE,
                color: BaseColor.BLACK,
              },

              '&.MuiInputBase-adornedEnd': {
                paddingRight: 8,
              },

              '#login__page &, .web__layout &, .web__layout--modal &': {
                borderRadius: 0,
              },

              '& > fieldset': { top: 0, '& > legend': { display: 'none' } },

              '&.MuiInputBase-adornedEnd input': {
                '#login__page &, .web__layout &, .web__layout--modal &': {
                  paddingRight: 0,
                },
              },

              '& input': {
                '#login__page &, .web__layout &, .web__layout--modal &': {
                  padding: '3.5px 8px',
                },

                fontSize: 12,
                fontWeight: 400,
                lineHeight: 1.5,
                color: BaseColor.BLACK,

                '&.Mui-disabled': {
                  WebkitTextFillColor: BaseColor.BLACK,
                  color: BaseColor.BLACK,
                },

                '&::placeholder': {
                  opacity: 1,
                  color: BaseColor.GREY_9B9B9B,
                  WebkitTextFillColor: BaseColor.GREY_9B9B9B,
                },
              },

              '& .MuiInputAdornment-root': {
                margin: 0,
                width: 24,
                height: 24,
                '& > span, & > span > button': {
                  width: '100%',
                  height: '100%',
                },
                '& svg': {
                  color: BaseColor.BLACK,
                  width: 17,
                  height: 17,
                },
              },
            },

            '& .MuiFormHelperText-root': {
              flex: '1 0 100%',
              margin: 0,
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 1.5,
              color: BaseColor.BLACK,

              '&.Mui-disabled': {
                WebkitTextFillColor: BaseColor.BLACK,
                color: BaseColor.BLACK,
              },

              '&.Mui-error': {
                WebkitTextFillColor: BaseColor.RED,
                color: BaseColor.RED,
              },
            },
          },
        },
      },
    },
  }
}
