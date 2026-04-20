import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AuthContext from '../context/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Register failed');
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
          REGISTER
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
          Create your CloneTube account
        </Typography>

        {error && (
          <Typography color="#FF6B6B" sx={{ mb: 2, textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
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
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
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
              borderRadius: 1,
              '&:hover': {
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
