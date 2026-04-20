import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AuthContext from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login({ email, password });
        navigate('/');
      } catch (err) {
        alert('Login failed');
      }
    };

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
          LOGIN
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
          Welcome back to CloneTube
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderColor: '#7C4DFF',
                '&:hover': {
                  boxShadow: '0 0 10px rgba(255, 0, 255, 0.3)',
                },
              },
            }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderColor: '#7C4DFF',
                '&:hover': {
                  boxShadow: '0 0 10px rgba(255, 0, 255, 0.3)',
                },
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              background: `linear-gradient(135deg, #FF00FF 0%, #7C4DFF 100%)`,
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.1rem',
              py: 1.5,
              '&:hover': {
                boxShadow: '0 0 13px rgba(255, 0, 255, 0.8)',
              },
            }}
          >
            Sign In
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 3,
            textAlign: 'center',
            color: '#A0A0E0',
          }}
        >
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#a837dd', fontWeight: 600, color: '#ffffff' }}>
            Sign Up Now
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
 
