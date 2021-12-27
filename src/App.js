import React from 'react'
import './App.css';
import CarList from './components/CarList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Chats from "./components/ChatEngine";
import AssetDetail from "./components/AssetDetail";
import VisualProof from "./components/VisualProof/VisualProof";
<<<<<<< HEAD
import Header from "./components/Header";
import DamageScreen from './components/DamageScreen/DamageScreen';
import ExteriorDamage from './components/DamageScreen/ExteriorDamage';
=======
>>>>>>> origin/master

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/chat" element={<Chats/>} />
          <Route path="/car-list" element={<CarList/>} />
          <Route path="/asset/:uid" element={<AssetDetail/>} />
          <Route path="/proof" element={<VisualProof/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/" element={<DamageScreen/>} />
          <Route path="/exterior" element={<ExteriorDamage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
