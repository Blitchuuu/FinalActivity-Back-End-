import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useAuth from '../context/useAuth';
import { apiUsers } from '../api/axios';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function SubscribeButton({ channelId, onSubscribe }) {
  const theme = useTheme();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    const checkSubscription = async () => {
      if (!channelId || !auth.user) {
        setIsSubscribed(false);
        return;
      }
      try {
        const response = await apiUsers.checkSubscription(channelId);
        setIsSubscribed(response.data.subscribed);
      } catch (err) {
        console.error('Error checking subscription:', err);
        setIsSubscribed(false);
      }
    };
    checkSubscription();
  }, [channelId, auth.user]);

  const handleClick = async () => {
    if (!auth.user || isLoading) return;
    
    setIsLoading(true);
    try {
      if (isSubscribed) {
        await apiUsers.unsubscribeFromChannel(channelId);
      } else {
        await apiUsers.subscribeToChannel(channelId);
      }
      setIsSubscribed(!isSubscribed);
      if (onSubscribe) {
        onSubscribe(channelId, !isSubscribed);
      }
    } catch (err) {
      console.error('Subscription error:', err);
      alert('Subscription failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={isSubscribed ? 'outlined' : 'contained'}
      onClick={handleClick}
      disabled={isLoading}
      startIcon={isSubscribed ? <NotificationsActiveIcon /> : <NotificationsIcon />}
      sx={{
        mb: 2,
        background: isSubscribed
          ? 'transparent'
          : `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
        color: isSubscribed ? theme.palette.text.primary : theme.palette.background.default,
        borderColor: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        fontWeight: 500,
        fontSize: '1rem',
        px: 3,
        py: 1,
        textTransform: 'capitalize',
        letterSpacing: 1,
        boxShadow: isSubscribed
          ? `0 0 15px ${theme.palette.secondary.main}4D`
          : `0 0 20px ${theme.palette.secondary.main}80`,
        '&:hover': {
          background: isSubscribed
            ? `${theme.palette.secondary.main}1A`
            : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          boxShadow: `0 0 25px ${theme.palette.secondary.main}CC`,
          transform: 'translateY(-2px)',
        },
      }}
    >
      {isLoading ? '...' : (isSubscribed ? 'Subscribed' : 'Subscribe')}
    </Button>
  );
}
 
 

