import { Typography, Box, Button, Container, Paper } from '@mui/material';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import AuthContext from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, #1A1F3A 0%, #2D1B69 100%)`,
          borderRadius: 2,
          p: 4,
          boxShadow: '0 0 13px rgba(0, 0, 0, 0.42), inset 0 0 20px rgba(124, 77, 255, 0.1)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 1,
            fontWeight: 800,
            color: '#ffffff',
            textShadow: 'none',
            textAlign: 'center',
            letterSpacing: 2,
          }}
        >
          PROFILE
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: '#A0A0E0',
            textAlign: 'center',
            letterSpacing: 1,
          }}
        >
          Your account information
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {user ? (
            <>
              <Typography
                variant="h5"
                sx={{
                  color: '#ffffff',
                  mb: 2,
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                Welcome, {user.username || 'User'}!
              </Typography>
              <Typography
                sx={{
                  color: '#A0A0E0',
                  mb: 3,
                  textAlign: 'center',
                  fontSize: '1.05rem',
                }}
              >
                Email: {user.email || user.username || 'N/A'}
              </Typography>
              <Button
                onClick={logout}
                variant="contained"
                sx={{
                  background: `linear-gradient(135deg, #FF00FF 0%, #7C4DFF 100%)`,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  py: 1.5,
                  borderRadius: 1,
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                  },
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Typography sx={{ color: '#A0A0E0', textAlign: 'center' }}>
              You are not logged in.
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
 
