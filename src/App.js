import React from 'react'
import './App.css';
import CarList from './components/CarList';

import {
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Chats from "./components/ChatEngine";
import CarDetail from "./components/CarDetail";
import VisualProof from "./components/VisualProof/VisualProof";
import DamageScreen from './components/DamageScreen';
import InspectionPart from './components/InspectionPart';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import AssetStore from './state/assetStore';
import AreaStore from './state/areasStore'

const assetStore = new AssetStore();
const areaStore = new AreaStore()
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
        <Routes>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/chat" element={<Chats/>}/>
            <Route path="/car-list" element={<CarList store={assetStore}/>}/>
            <Route path="/asset/:uid" element={<CarDetail store={assetStore}/>}/>
            {/* Different parts of the car: exterior, interior, etc*/}
            <Route path="/inbound-check/:uid" element={<DamageScreen areaStore={areaStore}/>}/>
            {/* Parts within a car location: In the exterior e.g., left/right headlights, etc*/}
            <Route path="/detail/:uid/:areaId" element={<InspectionPart areaStore={areaStore} />}/>
            <Route path="/proof/:uid/:areaId/:partId" element={<VisualProof areaStore={areaStore}/>}/>
        </Routes>
    </ThemeProvider>
    );
}

export default App;
