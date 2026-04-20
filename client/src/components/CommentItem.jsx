import { Box, Avatar, Typography } from '@mui/material';

export default function CommentItem({ comment }) {
  return (
    <Box sx={{ display: 'flex', mb: 2 }}>
      <Avatar sx={{ mr: 2 }}>U</Avatar>
      <Box>
        <Typography variant="subtitle2">{comment.author}</Typography>
        <Typography variant="body2" color="text.secondary">
          {comment.text}
        </Typography>
      </Box>
    </Box>
  );
}
 
