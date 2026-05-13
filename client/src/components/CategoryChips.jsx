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
                ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
                : `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.background.paper} 100%)`,
              border: selectedCategory === cat
                ? `1px solid ${theme.palette.secondary.main}`
                : `1.5px solid ${theme.palette.primary.main}`,
              color: theme.palette.text.primary,
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: selectedCategory === cat 
                ? `0 0 13px ${theme.palette.success.main}66`
                : 'none',
              '&:hover': {
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                boxShadow: `0 0 13px ${theme.palette.secondary.main}80`,
                borderColor: theme.palette.secondary.main,
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
 
