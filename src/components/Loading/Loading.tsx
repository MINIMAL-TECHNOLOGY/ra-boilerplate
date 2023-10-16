import { Box, CircularProgress, CircularProgressProps } from '@mui/material'
import { FC } from 'react'

const Loading: FC<CircularProgressProps> = props => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={props.size}
          thickness={props.thickness}
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
          disableShrink
          variant="indeterminate"
          sx={{ animationDuration: '500ms', ...props.sx }}
        />
      </Box>
    </Box>
  )
}

export default Loading
