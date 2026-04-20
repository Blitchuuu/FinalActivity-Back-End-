import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import useAuth from '../context/useAuth';
import VideoPlayer from '../components/VideoPlayer';
import LikeDislike from '../components/LikeDislike';
import CommentSection from '../components/CommentSection';
import { apiVideos, apiUsers } from '../api/axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Watch() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { data } = await apiVideos.getById(id);
        setVideo(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchVideo();
  }, [id, auth.user?.id]);

  const handlePlay = useCallback(async () => {
    if (auth.loading || !auth.user) return;
    try {
      await apiUsers.addToHistory(auth.user.id, id);
      console.log('Added to history');
    } catch (err) {
      console.error('Failed to add to history:', err);
    }
  }, [auth.user?.id, auth.loading, id]);

  const handleDelete = async () => {
    try {
      await apiVideos.deleteVideo(id);
      navigate('/');
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete video');
    }
    setDeleteDialogOpen(false);
  };

  const isOwner = auth.user && video && video.channelId && video.channelId.toString() === auth.user.id;

  if (loading || !video) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <VideoPlayer youtubeUrl={video.youtubeUrl} title={video.title} thumbnail={video.thumbnail} onPlay={handlePlay} />
      <Box sx={{ mt: 2 }}>
        <Typography>{video.description}</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <LikeDislike videoId={video._id} likesCount={video.likesCount} />
          {isOwner && (
            <Button
              variant="contained"
              color="error"
              onClick={() => setDeleteDialogOpen(true)}
              sx={{ ml: 2 }}
            >
              Delete Video
            </Button>
          )}
        </Box>
      </Box>
      <CommentSection videoId={video._id} />
      
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Video?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will permanently delete "{video.title}". This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
