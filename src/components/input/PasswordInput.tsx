import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  Tooltip,
} from '@mui/material'
import { FC, useCallback, useState } from 'react'
import { useTranslate } from 'react-admin'

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
                    <VisibilityOff fontSize={sizeIcon} />
                  ) : (
                    <Visibility fontSize={sizeIcon} />
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
