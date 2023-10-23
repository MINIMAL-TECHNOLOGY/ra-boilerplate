import { FC, useCallback, useState } from 'react'
import { useTranslate } from 'react-admin'
import { VisibilityIcon, VisibilityOffIcon } from '../mui-icons'
import {
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  Tooltip,
} from '../mui-components'

const PasswordInput: FC<{
  value: string
  onChange: (e: any) => void
  label?: string
  size?: any
  sizeIcon?: any
  fullWidth?: boolean
  disabled?: boolean
  error?: boolean
  helperText?: string
  placeholder?: string
  onKeyUp?: (e: any) => void
  sx?: SxProps
}> = ({
  value,
  onChange,
  label = 'ra.auth.password',
  size = 'medium',
  sizeIcon = 'medium',
  fullWidth = false,
  disabled = false,
  error = false,
  helperText = '',
  placeholder = 'Enter your password',
  onKeyUp,
  sx,
}) => {
  const translate = useTranslate()

  const [isShowPassword, setIsShowPassword] = useState(false)

  const toggleShowPassword = useCallback(() => {
    setIsShowPassword(!isShowPassword)
  }, [isShowPassword])

  return (
    <TextField
      fullWidth={fullWidth}
      required
      disabled={disabled}
      size={size}
      error={error}
      type={isShowPassword ? 'text' : 'password'}
      label={translate(label)}
      value={value}
      onChange={(e) => onChange(e)}
      helperText={helperText}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      sx={sx}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip
              title={
                isShowPassword
                  ? translate('ra.input.password.toggle_visible')
                  : translate('ra.input.password.toggle_hidden')
              }>
              <span>
                <IconButton
                  onClick={toggleShowPassword}
                  edge="end"
                  disabled={disabled}>
                  {isShowPassword ? (
                    <VisibilityOffIcon fontSize={sizeIcon} />
                  ) : (
                    <VisibilityIcon fontSize={sizeIcon} />
                  )}
                </IconButton>
              </span>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordInput
