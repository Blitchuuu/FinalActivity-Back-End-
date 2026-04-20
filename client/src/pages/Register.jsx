import { Box, TextField, Button, Typography } from '@mui/material';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

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
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Register</Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <TextField name="username" fullWidth label="Username" onChange={handleChange} sx={{ mb: 2 }} />
      <TextField name="email" fullWidth label="Email" onChange={handleChange} sx={{ mb: 2 }} />
      <TextField name="password" fullWidth type="password" label="Password" onChange={handleChange} sx={{ mb: 2 }} />
      <Button variant="contained" type="submit" fullWidth>Register</Button>
    </Box>
  );
}
