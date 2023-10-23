import Logo from '@/assets/svg/logo.svg'
import { FC } from 'react'
import {
  Avatar,
  Box,
  CircularProgress,
  CircularProgressProps,
} from '../mui-components'

const LoadingLogo: FC<CircularProgressProps> = (props) => {
  const { size = 75, thickness = 1 } = props
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        height: 1,
        position: 'relative',
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Avatar
          variant="square"
          sx={{ width: 50, height: 'auto' }}
          src={Logo}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={thickness}
          sx={{ color: 'grey.300' }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <CircularProgress
          {...props}
          size={size}
          thickness={thickness}
          disableShrink
          variant="indeterminate"
          sx={{ animationDuration: '500ms' }}
        />
      </Box>
    </Box>
  )
}

export default LoadingLogo
