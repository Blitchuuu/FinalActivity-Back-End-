import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

export default function VideoGrid({ videos }) {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'stretch' }}>
{videos.map((v, index) => (
        <Grid
          item
          key={v._id || v.id || index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <VideoCard video={v} />
        </Grid>
      ))}
    </Grid>
  );
}
 
