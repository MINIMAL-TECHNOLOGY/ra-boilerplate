import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Grid } from '@/components'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login: FC<{}> = () => {
  const navigate = useNavigate()

  const authenticated = localStorage.getItem('auth')

  useEffect(() => {
    if (!authenticated) {
      return
    }

    navigate(`/`, { replace: true })

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid id="login__page" container sx={{ height: '100vh', width: '100vw' }}>
      <Grid
        item
        sm={8}
        sx={{
          width: 1,
          height: 1,
          display: { xs: 'none', sm: 'unset' },
          bgcolor: 'grey.500',
        }}>
        <img
          loading="lazy"
          src={'https://source.unsplash.com/random?wallpapers'}
          alt="login-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ px: { xs: 8, sm: 10, xl: 13.5 } }}>
        <Grid
          item
          xs={12}
          container
          rowGap={25}
          sx={{ maxWidth: { xs: 1, sm: 0.8 } }}>
          <Grid item xs={12} container justifyContent="center">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>

          <Grid item xs={12}>
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
