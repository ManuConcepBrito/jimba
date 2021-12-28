import React from 'react'
import './App.css';
import CarList from './components/CarList';

import {
    Routes,
    Route, useLocation
} from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Chats from "./components/ChatEngine";
import AssetDetail from "./components/AssetDetail";
import VisualProof from "./components/VisualProof/VisualProof";
import DamageScreen from './components/DamageScreen';
import InspectionPart from './components/InspectionPart';
import {AREAS} from "./static/Areas";
import {ThemeProvider, createTheme} from '@mui/material/styles';

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
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/chat" element={<Chats/>}/>
                    <Route path="/car-list" element={<CarList/>}/>
                    <Route path="/asset/:uid" element={<AssetDetail/>}/>
                    <Route path="/inbound-check/:uid" element={<DamageScreen/>}/>
                    <Route path="/detail/:assetLocation/:uid" element={<InspectionPart/>}/>
                    <Route path="/proof/:uid" element={<VisualProof/>}/>
                </Routes>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
