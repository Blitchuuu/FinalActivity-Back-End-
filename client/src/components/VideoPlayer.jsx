import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function VideoPlayer({ youtubeUrl, title, thumbnail, onPlay }) {
  const theme = useTheme();

  const handlePlay = () => {
    window.open(youtubeUrl, '_blank');
    onPlay?.();
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: 2,
          border: '1px solid #7C4DFF',
          boxShadow: '0 0 13px rgba(255, 0, 255, 0.4), inset 0 0 20px rgba(124, 77, 255, 0.1)',
          mb: 2,
          backgroundColor: '#0A0E27',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0 0 25px rgba(0, 217, 255, 0.6)',
          },
        }}
        onClick={handlePlay}
      >
        <img
          src={thumbnail || 'https://picsum.photos/1280/720?random=1'}
          alt="Thumbnail"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.9rem',
          }}
        >
          ▶ Play on YouTube
        </Box>
      </Box>
      <Typography
        variant="h5"
        sx={{
          color: '#E0E0FF',
          fontWeight: 600,
          paddingBottom: 2,
          mt: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

 
