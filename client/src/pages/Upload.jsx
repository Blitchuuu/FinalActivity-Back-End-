import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { apiVideos } from '../api/axios';

export default function Upload() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
    youtubeUrl: '',
    channel: user?.name || ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('Please login first');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await apiVideos.create(formData);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <Alert severity="warning">Please login to upload videos.</Alert>;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Upload Video
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField
        fullWidth
        name="title"
        label="Title"
        value={formData.title}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="description"
        label="Description"
        multiline
        rows={4}
        value={formData.description}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="thumbnail"
        label="Thumbnail URL (e.g. https://picsum.photos/320/180)"
        value={formData.thumbnail}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="youtubeUrl"
        label="YouTube Link"
        value={formData.youtubeUrl}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="channel"
        label="Channel Name"
        value={formData.channel}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <Button 
        variant="contained" 
        type="submit" 
        disabled={loading}
        fullWidth
      >
        {loading ? 'Uploading...' : 'Upload'}
      </Button>
    </Box>
  );
}
 
