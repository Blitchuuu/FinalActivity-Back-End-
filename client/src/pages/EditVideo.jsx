import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditVideo() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Video ${id} updated: ${title}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Edit Video {id}
      </Typography>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit">
        Save Changes
      </Button>
    </Box>
  );
}
 
