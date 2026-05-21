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
    borderColor: theme.palette.secondary.main,
    boxShadow: `0 0 15px ${theme.palette.secondary.main}66`,
  },
  '&:focus-within': {
    borderColor: theme.palette.secondary.main,
    boxShadow: `0 0 15px ${theme.palette.secondary.main}66`,
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
  color: theme.palette.secondary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: theme.palette.text.primary,
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '55ch',
        color: theme.palette.text.primary,
      },
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.text.secondary,
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
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark} 100%)`,
        boxShadow: `0 0 20px ${theme.palette.secondary.main}4D, 0 0 40px ${theme.palette.primary.main}33`,
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={(theme) => ({
            mr: 2,
            color: theme.palette.text.primary,
            '&:hover': {
              textShadow: `0 0 10px ${theme.palette.secondary.main}`,
            },
          })}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h4"
          sx={(theme) => ({
            flexGrow: 0,
            mr: 4,
            color: theme.palette.text.primary,
            fontWeight: 800,
            textShadow: 'none',
            letterSpacing: 2,
            cursor: 'pointer',
          })}
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
          sx={(theme) => ({
            ml: 2,
            width: 40,
            height: 40,
            color: theme.palette.text.primary,
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            boxShadow: `0 0 10px ${theme.palette.primary.main}80`,
            cursor: 'pointer',
            '&:hover': {
              boxShadow: `0 0 13px ${theme.palette.primary.main}CC`,
            },
          })}
           onClick={() => navigate('/profile')}
        > 
          {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
        </Avatar>
        
      </Toolbar>
    </AppBar>
  );
}
