import { useLocation } from 'react-router-dom';
import VideoGrid from '../components/VideoGrid';
import videos from '../data/videos';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const q = query.get('q') || '';
  const category = query.get('category') || '';

  const filtered = videos.filter((v) => {
    if (q && !v.title.toLowerCase().includes(q.toLowerCase())) return false;
    if (category && category !== 'All' && !v.channel.toLowerCase().includes(category.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <VideoGrid videos={filtered} />
    </>
  );
}
 
