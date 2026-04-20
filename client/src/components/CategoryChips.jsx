import { Chip, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const categories = [
  'All',
  'Music',
  'Gaming',
  'News',
  'Sports',
  'Education',
  'Comedy',
  'Technology',
];

export default function CategoryChips({ selectedCategory = 'All', onCategoryChange }) {
  const theme = useTheme();

  const handleChipClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <Box
      sx={{
        mb: 3,
        width: '100%',
        pb: 1,
      }}
    >
      <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'center', flexWrap: 'wrap', px: 1 }}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => handleChipClick(cat)}
            sx={{
              background: selectedCategory === cat 
                ? `linear-gradient(135deg, #7C4DFF 0%, #FF00FF 100%)`
                : `linear-gradient(135deg, #2D1B69 0%, #1A1F3A 100%)`,
              border: selectedCategory === cat
                ? '1px solid #FF00FF'
                : '1.5px solid #7C4DFF',
              color: '#E0E0FF',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: selectedCategory === cat 
                ? '0 0 13px rgba(0, 217, 255, 0.4)'
                : 'none',
              '&:hover': {
                background: `linear-gradient(135deg, #7C4DFF 0%, #FF00FF 100%)`,
                boxShadow: '0 0 13px rgba(255, 0, 255, 0.5)',
                borderColor: '#FF00FF',
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
 
