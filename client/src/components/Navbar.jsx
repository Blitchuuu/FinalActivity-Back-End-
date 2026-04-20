import { AppBar, Toolbar, IconButton, Typography, Box, InputBase, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.35),
    borderColor: '#FF00FF',
    boxShadow: '0 0 15px rgba(255, 0, 255, 0.4)',
  },
  '&:focus-within': {
    borderColor: '#FF00FF',
    boxShadow: '0 0 15px rgba(255, 0, 255, 0.4)',
  },
  marginLeft: 0,
  width: '100%',
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FF00FF',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#E0E0FF',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '55ch',
        color: '#f5f5f5',
      },
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#A0A0E0',
    opacity: 0.7,
  },
}));

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const user = auth?.user;
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: `linear-gradient(135deg, #1A1F3A 0%, #2D1B69 100%)`,
        boxShadow: '0 0 20px rgba(255, 0, 255, 0.3), 0 0 40px rgba(124, 77, 255, 0.2)',
        borderBottom: '2px solid #FF00FF',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{
            mr: 2,
            color: '#ffffff',
            '&:hover': {
              textShadow: '0 0 10px #FF00FF',
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h4"
          sx={{
            flexGrow: 0,
            mr: 4,
            color: '#b4d2ff',
            fontWeight: 800,
            textShadow: 'none',
            letterSpacing: 2,
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          CloneTube
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', alignItems: 'center' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search videos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Search>
        </Box>
        
        <Box sx={{ flexGrow: 1 }} />

        <Button
          variant='contained'
          sx={{
            ml: 2, 
          }}
          onClick={() => navigate('/upload')}
        >
          Upload
        </Button>
        <Avatar
          sx={{
            ml: 2,
            width: 40,
            height: 40,
            color: '#E0E0FF',
            background: `linear-gradient(135deg, #FF00FF 0%, #7C4DFF 100%)`,
            boxShadow: '0 0 10px rgba(124, 77, 255, 0.5)',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0 0 13px rgba(124, 77, 255, 0.8)',
            },
          }}
           onClick={() => navigate('/profile')}
        > 
          {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
        </Avatar>
        
      </Toolbar>
    </AppBar>
  );
}
