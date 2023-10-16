import { Checkbox, FormControlLabel } from '@mui/material'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useTranslate } from 'react-admin'

const LoginAuto: FC<{ disabled?: boolean }> = props => {
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
      label={translate('customize.action.remember_me')}
      control={<Checkbox checked={checked} onChange={handleRememberMe} />}
    />
  )
}

export default LoginAuto
