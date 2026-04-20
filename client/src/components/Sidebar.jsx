import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const drawerWidth = 300;
const miniWidth = 70;
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

export { drawerWidth, miniWidth };

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
    if (onClose) onClose();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        padding:0.5,
        width: open ? drawerWidth : miniWidth,
        height: 'calc(100vh - 64px)',
        background: `linear-gradient(180deg, #1A1F3A 0%, #0A0E27 100%)`,
        transition: 'width 0.3s ease',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <List sx={{ width: '100%', pt: 2 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/');
            }}
            sx={{
              color: '#E0E0FF',
              transition: 'all 0.3s ease',
              borderLeft: '3px solid transparent',
              pl: open ? 2.5 : 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 255, 0.1)',
                borderLeftColor: '#FF00FF',
                color: '#FF00FF',
                pl: open ? 2.5 : 1,
                textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
              },
            }}
          >
            <ListItemIcon 
              sx={{ color: 'inherit', 
              minWidth: 40, 
              mt:1, 
              mb:1,
              justifyContent: 'center' 
              }}>
              <HomeIcon sx={{ fontSize: 30}}/>
            </ListItemIcon>
            {open && <ListItemText
              primary="Home"
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '1rem',
              }}
            />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        
        <ListItemButton
                  onClick={() => {
                    navigate('/history');
                  }}
                  sx={{
                    color: '#E0E0FF',
                    transition: 'all 0.3s ease',
                    borderLeft: '3px solid transparent',
                    pl: open ? 2.5 : 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 0, 255, 0.1)',
                      borderLeftColor: '#FF00FF',
                      color: '#FF00FF',
                      pl: open ? 2.5 : 1,
                      textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
                    },
                  }}
        >
            <ListItemIcon 
              sx={{ color: 'inherit', 
              minWidth: 40, 
              mt:1, 
              mb:1,
              justifyContent: 'center' 
            }}>
            <HistoryIcon sx={{ fontSize: 30 }}/>
          </ListItemIcon>
          {open && (
            <ListItemText
              primary="History"
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '1rem',
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
        <ListItem disablePadding>

      <ListItemButton
                  onClick={() => {
                    navigate('/subscriptions');
                  }}
                  sx={{
                    color: '#E0E0FF',
                    transition: 'all 0.3s ease',
                    borderLeft: '3px solid transparent',
                    pl: open ? 2.5 : 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 0, 255, 0.1)',
                      borderLeftColor: '#FF00FF',
                      color: '#FF00FF',
                      pl: open ? 2.5 : 1,
                      textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
                    },
                  }}
        >
            <ListItemIcon 
              sx={{ color: 'inherit', 
              minWidth: 40, 
              mt:1, 
              mb:1,
              justifyContent: 'center' 
            }}>
            <SubscriptionsIcon sx={{ fontSize: 30 }}/>
          </ListItemIcon>
          {open && (
            <ListItemText
              primary="Subscriptions"
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '1rem',
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
          <ListItem disablePadding>
      
      <ListItemButton
            onClick={() => {
              navigate('/profile');
            }}
            sx={{
              color: '#E0E0FF',
              transition: 'all 0.3s ease',
              borderLeft: '3px solid transparent',
              pl: open ? 2.5 : 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 255, 0.1)',
                borderLeftColor: '#FF00FF',
                color: '#FF00FF',
                pl: open ? 2.5 : 1,
                textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
              },
            }}
          >
            <ListItemIcon 
              sx={{ color: 'inherit', 
              minWidth: 40, 
              mt:1, 
              mb:1,
              justifyContent: 'center' 
            }}>
              <AccountCircleIcon sx={{ fontSize: 30 }}/>
            </ListItemIcon>
            {open && <ListItemText
              primary="You"
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '1rem',
              }}
            />}
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding></ListItem>
        
      </List>
      {open && (
        <>
          <Box sx={{ px: 2, py: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#00D9FF',
                fontWeight: 700,
                textShadow: 'none',
                letterSpacing: 1,
                mb: 2,
              }}
            >
              CATEGORIES
            </Typography>
          </Box>
          <List sx={{ width: '100%' }}>
            {categories.map((cat) => (
              <ListItem key={cat} disablePadding>
                <ListItemButton
                  onClick={() => handleClick(cat)}
                  sx={{
                    color: '#E0E0FF',
                    transition: 'all 0.3s ease',
                    borderLeft: '3px solid transparent',
                    pl: 2.5,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 0, 255, 0.1)',
                      borderLeftColor: '#FF00FF',
                      color: '#FF00FF',
                      pl: 3,
                      textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
                    },
                  }}
                >
                  <ListItemText
                    primary={cat}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
 
