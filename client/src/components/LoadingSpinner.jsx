import { CircularProgress, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function LoadingSpinner() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 4,
        py: 4,
      }}
    >
      <CircularProgress
        sx={{
          color: '#FF00FF',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
        thickness={4}
        size={60}
      />
    </Box>
  );
}
 
