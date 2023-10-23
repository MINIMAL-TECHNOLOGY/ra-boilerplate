import { BaseColor } from '@/themes/color'
import { Checkbox, FormControlLabel } from '@mui/material'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useTranslate } from 'react-admin'

const LoginAuto: FC<{ disabled?: boolean }> = (props) => {
  const { disabled } = props

  const translate = useTranslate()

  const [checked, setChecked] = useState(true)

  const handleRememberMe = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked)

      // TODO: handle auto login when go back website
      // CASE: user check remember me and login last time
    },
    [],
  )

  return (
    <FormControlLabel
      disabled={disabled}
      label={translate('customize.auth.remember_me')}
      sx={{
        height: 17,
        color: BaseColor.GREY_9B9B9B,
        '& .MuiFormControlLabel-label': {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 1.5,
        },
      }}
      control={
        <Checkbox
          checked={checked}
          onChange={handleRememberMe}
          size="small"
          sx={{
            color: BaseColor.GREY_9B9B9B,
            '& .MuiSvgIcon-root': { fontSize: 17 },
          }}
        />
      }
    />
  )
}

export default LoginAuto
