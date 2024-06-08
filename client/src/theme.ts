import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#7C93C3',
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#A25772',
    },
    background: {
      default: '#ffffff', 
      paper: '#E6E6E6',   
    }
  },

  typography: {
    fontFamily: 'Roboto, sans-serif', 
    h1: {
      fontSize: '2rem',
      color: '#3f51b5', 
    },
    h2: {
      fontSize: '1.75rem',
      color: '#f50057',
    },
  },
  spacing: 8,
});

export default theme;

