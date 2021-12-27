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
import Header from "./components/Header";
import DamageScreen from './components/DamageScreen/DamageScreen';
import ExteriorDamage from './components/DamageScreen/ExteriorDamage';
import InteriorDamage from './components/DamageScreen/InteriorDamage';
import WindowDamage from './components/DamageScreen/WindowDamage';
import TireDamage from './components/DamageScreen/TireDamage';
import TechnicalDefect from './components/DamageScreen/TechnicalDefect';
import SparePartsDamage from './components/DamageScreen/SparePartsDamage';

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
          <Route path="/interior" element={<InteriorDamage/>} />
          <Route path="/windows" element={<WindowDamage/>} />
          <Route path="/tires" element={<TireDamage/>} />
          <Route path="/technical-defect" element={<TechnicalDefect/>} />
          <Route path="/spare-parts" element={<SparePartsDamage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
