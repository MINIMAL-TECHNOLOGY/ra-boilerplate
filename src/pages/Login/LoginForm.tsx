import { Loading, PasswordInput } from '@/components'
import {
  defaultLoginErrorFormValue,
  defaultLoginFormValue,
  ILoginErrorFormValue,
  ILoginFormValue,
  LoginFormKey,
} from '@/constants'
import { convertInfoLoginToPayload } from '@/utils'
import { Button, Grid, TextField } from '@mui/material'
import { FC, Fragment, useCallback, useState } from 'react'
import { useLogin, useNotify, useTranslate } from 'react-admin'
import LoginAuto from './LoginAuto'

const LoginForm: FC<{}> = () => {
  const login = useLogin()
  const notify = useNotify()
  const translate = useTranslate()

  const [formValue, setFormValue] = useState<ILoginFormValue>(
    defaultLoginFormValue,
  )

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState<ILoginErrorFormValue>(
    defaultLoginErrorFormValue,
  )

  const validateLoginForm = useCallback(() => {
    const rs: ILoginErrorFormValue = { ...defaultLoginErrorFormValue }

    if (formValue.identifier?.value === '') {
      rs['identifier'] = translate('customize.validation.is_required', {
        name: translate('ra.auth.username'),
      })
    }

    if (formValue.credential?.value === '') {
      rs['credential'] = translate('customize.validation.is_required', {
        name: translate('ra.auth.password'),
      })
    }

    return rs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue.identifier?.value, formValue.credential?.value])

  const setLoginFormValueHelper = (
    name: string,
    event: any,
    // formValue: ILoginFormValue,
    // eslint-disable-next-line no-unused-vars
    setFormValue: (prev: any) => void,
  ) => {
    switch (name) {
      case LoginFormKey.identifier:
      case LoginFormKey.credential:
        setFormValue((prev: any) => ({
          ...prev,
          [name]: {
            ...prev[name],
            value: event.target.value,
          },
        }))
        break
      default:
        setFormValue((prev: any) => ({
          ...prev,
          [name]: event.target.value,
        }))
        break
    }
  }

  const handleSubmit = useCallback(() => {
    const err = validateLoginForm()

    const hasError = Object.values(err).some((e) => e !== '')

    if (hasError) {
      setError(err)
      return
    }

    const data = convertInfoLoginToPayload({ ...formValue })

    setIsLoading(true)

    login(data)
      .catch(() => {
        notify('ra.auth.sign_in_error', {
          type: 'error',
          autoHideDuration: 5000,
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue, validateLoginForm])

  const onFormValueChange = useCallback((name: string, payload: any) => {
    setError((prev) => ({ ...prev, [name]: '' }))

    setLoginFormValueHelper(name, payload, setFormValue)
  }, [])

  const handlePressEnter = useCallback(
    (e: any) => {
      if (e.key !== 'Enter') {
        return
      }
      handleSubmit()
    },
    [handleSubmit],
  )

  return (
    <Fragment>
      <Grid item xs={12} sm={12} xl={12}>
        <TextField
          autoComplete="off"
          disabled={isLoading}
          fullWidth
          required
          size="medium"
          error={Boolean(error.identifier)}
          label={translate('ra.auth.username')}
          value={formValue.identifier?.value}
          onChange={(e) => onFormValueChange(LoginFormKey.identifier, e)}
          helperText={error.identifier}
          // placeholder="Enter your username"
          onKeyUp={handlePressEnter}
          autoFocus
          sx={{ '& .MuiInputBase-root': { bgcolor: 'unset', border: 'unset' } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} xl={12}>
        <PasswordInput
          disabled={isLoading}
          fullWidth
          size="medium"
          sizeIcon="medium"
          error={Boolean(error.credential)}
          value={formValue.credential?.value ?? ''}
          onChange={(e: any) => onFormValueChange(LoginFormKey.credential, e)}
          helperText={error.credential}
          onKeyUp={handlePressEnter}
          sx={{ '& .MuiInputBase-root': { bgcolor: 'unset', border: 'unset' } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} xl={12} sx={{ textAlign: 'left' }}>
        <LoginAuto disabled={isLoading} />
      </Grid>

      <Grid item xs={12} sm={12} xl={12}>
        <Button
          disabled={isLoading}
          fullWidth
          size="large"
          variant="contained"
          onClick={handleSubmit}>
          {isLoading ? <Loading size={24} /> : translate('ra.auth.sign_in')}
        </Button>
      </Grid>
    </Fragment>
  )
}

export default LoginForm
