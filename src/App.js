import React from 'react'
import './App.css';
import CarList from './components/CarList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {RecoilRoot} from 'recoil';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
        'Poppins',
        'Helvetica Neue',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      }
  },
});

function App() {
  return (
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CarList></CarList>
        </ThemeProvider>
      </RecoilRoot>
  );
}

export default App;
