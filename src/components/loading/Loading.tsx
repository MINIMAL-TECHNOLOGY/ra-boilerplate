import { FC } from 'react'
import { Box, CircularProgress, CircularProgressProps } from '../mui-components'

const Loading: FC<CircularProgressProps> = (props) => {
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
