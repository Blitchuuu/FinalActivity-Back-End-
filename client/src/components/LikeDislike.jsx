import { IconButton, Stack, Typography, Box } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';
import { apiVideos } from '../api/axios';


export default function LikeButton({ 
  videoId, 
  likesCount = 0, 
  liked: initialLiked = false,
  onCountChange
 }) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(likesCount);

  const handleToggle = async () => {
    try {
      const isLiked = !liked;
      setLiked(isLiked);
      setCount(isLiked ? count + 1 : Math.max(0, count - 1));
      
      const response = await apiVideos.toggleLike(videoId, isLiked);
      
      setCount(response.data.likesCount);
      
      if (onCountChange) {
        onCountChange(response.data.likesCount);
      }
    } catch (err) {
      console.error('Like toggle failed', err);
      setLiked(!liked);
      setCount(likesCount);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={0}
      alignItems="center"
      sx={{
        background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}0D 100%)`,
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        p: 1,
        boxShadow: (theme) => `0 0 15px ${theme.palette.primary.main}33`,
      }}
    >
      <IconButton
        onClick={handleToggle}
        sx={(theme) => ({
          color: liked ? theme.palette.secondary.main : theme.palette.text.secondary,
          transition: 'all 0.3s ease',
          textShadow: liked ? `0 0 10px ${theme.palette.secondary.main}` : 'none',
          '&:hover': {
            color: theme.palette.secondary.main,
            textShadow: `0 0 10px ${theme.palette.secondary.main}`,
          },
        })}
      >
        <ThumbUpIcon />
      </IconButton>
      <Typography
        sx={(theme) => ({
          color: liked ? theme.palette.secondary.main : theme.palette.text.primary,
          fontWeight: 700,
          minWidth: '40px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        })}
      >
        {count}
      </Typography>
    </Stack>
  );
}

