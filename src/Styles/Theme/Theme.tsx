// Styles/Theme/Theme.tsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: 'auto',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        },
        '*::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, Opera
        },
      },
    },
  },
});

export default theme;
