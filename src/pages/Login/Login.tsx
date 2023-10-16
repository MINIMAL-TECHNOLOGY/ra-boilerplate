import LoginLeftImage from '@/assets/images/login-left.png'
import { Grid } from '@mui/material'
import { FC, useEffect } from 'react'
import { useLocaleState } from 'react-admin'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login: FC<{}> = () => {
  const [locale] = useLocaleState()
  const navigate = useNavigate()
  const authenticated = localStorage.getItem('auth')

  useEffect(() => {
    if (!authenticated) return
    navigate(`/`, { replace: true })

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container sx={{ height: '100vh', width: '100vw' }}>
      <Grid item xs={6} sx={{ display: { xs: 'none', sm: 'unset' } }}>
        <img
          src={LoginLeftImage}
          alt="login-page-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ p: { xs: 4, sm: 8 } }}>
        <Grid
          item
          xs={12}
          sm={12}
          xl={12}
          container
          rowSpacing={4}
          sx={{ maxWidth: { xs: '100%', sm: '60%' } }}>
          <Grid
            item
            xs={12}
            sm={12}
            xl={12}
            container
            justifyContent="center"
            sx={{ mb: 8 }}>
            <img
              className="logo"
              // src={locale === 'ko' ? LogoKr : LogoEn}
              alt="logo"
            />
          </Grid>

          <LoginForm />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
