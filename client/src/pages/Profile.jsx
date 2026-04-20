import { Typography, Box, Button } from '@mui/material';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Box>
      <Typography variant="h4">Profile</Typography>
  {user ? (
        <>
          <Typography variant="h5">Welcome, {user.username || 'User'}!</Typography>
          <Typography>Email: {user.email || user.username || 'N/A'}</Typography>
          <Button onClick={logout} variant="contained" sx={{ mt: 2 }}>Logout</Button>
        </>
      ) : (
        <Typography>You are not logged in.</Typography>
      )}
    </Box>
  );
}
 
