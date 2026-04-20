import { createTheme } from '@mui/material/styles';

// Neon/Gaming Theme - Dark background with purple primary, neon pink/cyan accents
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C4DFF', // Neon purple
      light: '#B39DDB',
      dark: '#5E35B1',
    },
    secondary: {
      main: '#FF00FF', // Neon pink/magenta
      light: '#FF66FF',
      dark: '#CC00CC',
    },
    background: {
      default: '#0A0E27', // Deep dark blue/purple
      paper: '#1A1F3A', // Slightly lighter dark
    },
    text: {
      primary: '#E0E0FF', // Soft light blue-white
      secondary: '#A0A0E0', // Softer blue-violet
    },
    accent: '#00D9FF', // Neon cyan
    success: {
      main: '#00D9FF',
    },
    warning: {
      main: '#FF00FF',
    },
    error: {
      main: '#FF0080',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#00D9FF',
      textShadow: 'none',
    },
    h2: {
      fontWeight: 700,
      color: '#00D9FF',
      textShadow: 'none',
    },
    h3: {
      fontWeight: 600,
      color: '#00D9FF',
    },
    h4: {
      fontWeight: 600,
      color: '#E0E0FF',
      letterSpacing: 1,
    },
    h5: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h6: {
      fontWeight: 600,
      color: '#E0E0FF',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: 1,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: `linear-gradient(135deg, #1A1F3A 0%, #2D1B69 100%)`,
          boxShadow: '0 0 20px rgba(255, 0, 255, 0.3), 0 0 40px rgba(124, 77, 255, 0.2)',
          borderBottom: '2px solid #FF00FF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 15px rgba(255, 0, 255, 0.6), 0 0 30px rgba(124, 77, 255, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, #7C4DFF 0%, #9C27B0 100%)`,
          boxShadow: '0 0 10px rgba(124, 77, 255, 0.5)',
          '&:hover': {
            background: `linear-gradient(135deg, #9C27B0 0%, #7C4DFF 100%)`,
            boxShadow: '0 0 13px rgba(124, 77, 255, 0.8)',
          },
        },
        outlined: {
          '&:hover': {
            backgroundColor: 'rgba(255, 0, 255, 0.1)',
            boxShadow: '0 0 13px rgba(255, 0, 255, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: `linear-gradient(135deg, #1A1F3A 0%, #2D1B69 100%)`,
          border: '1px solid rgba(124, 77, 255, 0.3)',
          boxShadow: '0 0 13px rgba(124, 77, 255, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 13px rgba(255, 0, 255, 0.5), 0 0 40px rgba(124, 77, 255, 0.3)',
            borderColor: '#FF00FF',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: `linear-gradient(135deg, #2D1B69 0%, #1A1F3A 100%)`,
          border: '1px solid #7C4DFF',
          color: '#E0E0FF',
          fontWeight: 600,
          '&:hover': {
            background: `linear-gradient(135deg, #7C4DFF 0%, #FF00FF 100%)`,
            borderColor: '#FF00FF',
            boxShadow: '0 0 13px rgba(255, 0, 255, 0.6)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#E0E0FF',
          fontSize: '1rem',
        },
        input: {
          '&::placeholder': {
            color: '#A0A0E0',
            opacity: 0.7,
          },
          '&:focus': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderColor: '#7C4DFF',
            '&:hover': {
              borderColor: '#FF00FF',
              boxShadow: '0 0 10px rgba(255, 0, 255, 0.3)',
            },
            '&.Mui-focused': {
              borderColor: '#FF00FF',
              boxShadow: '0 0 13px rgba(255, 0, 255, 0.5)',
            },
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: `linear-gradient(180deg, #1A1F3A 0%, #0A0E27 100%)`,
          borderRight: '2px solid #FF00FF',
          boxShadow: '2px 0 20px rgba(255, 0, 255, 0.2)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#E0E0FF',
          '&:hover': {
            backgroundColor: 'rgba(255, 0, 255, 0.1)',
            borderLeft: '3px solid #FF00FF',
            paddingLeft: 'calc(1rem - 3px)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(124, 77, 255, 0.2)',
            borderLeft: '3px solid #FF00FF',
            paddingLeft: 'calc(1rem - 3px)',
          },
        },
      },
    },
   
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#E0E0FF',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#FF00FF',
            textShadow: '0 0 10px #FF00FF',
          },
        },
      },
    },
  },
});

export default theme;
 

