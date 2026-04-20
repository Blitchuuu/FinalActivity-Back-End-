import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function Subscription() {
  const [subscriptions, setSubscriptions] = useState([]);

 useEffect(() => {
  const loadSubs = () => {
    const subs = JSON.parse(localStorage.getItem('subscriptions') || '[]');
    setSubscriptions(subs);
  };

  loadSubs(); // initial load
  window.addEventListener('storage', loadSubs);
  return () => window.removeEventListener('storage', loadSubs);
}, []);


  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, color: '#E0E0FF' }}>
        Your Subscriptions will appear here
      </Typography>
      {subscriptions.length === 0 ? (
        <Typography>No subscriptions yet.</Typography>
      ) : (
        subscriptions.map((channel, idx) => (
          <Typography key={idx} sx={{ color: '#A0A0E0' }}>
            {channel}
          </Typography>
        ))
      )}
    </Box>
  );
}
