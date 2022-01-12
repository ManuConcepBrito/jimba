import React from 'react'
import './App.css';
import CarList from './components/CarList';
import {AuthRequired} from "./components/auth/ProtectedRoutes";
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
import {AuthProvider} from "./context/AuthContext";

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
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    {/* Auth */}
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/chat" element={
                        <AuthRequired>
                            <Chats/>
                        </AuthRequired>
                    }/>
                    <Route path="/car-list" element={
                        <AuthRequired>
                            <CarList store={assetStore}/>
                        </AuthRequired>
                    }/>
                    <Route path="/asset/:uid" element={
                        <AuthRequired>
                            <CarDetail store={assetStore}/>
                        </AuthRequired>
                    }/>
                    {/* Different parts of the car: exterior, interior, etc*/}
                    <Route path="/inbound-check/:uid" element={
                        <AuthRequired>
                            <DamageScreen areaStore={areaStore}/>
                        </AuthRequired>
                    }/>
                    {/* Parts within a car location: In the exterior e.g., left/right headlights, etc*/}
                    <Route path="/detail/:uid/:areaId" element={
                        <AuthRequired>
                            <InspectionPart areaStore={areaStore}/>
                        </AuthRequired>
                    }
                    />
                    <Route path="/proof/:uid/:areaId/:partId" element={
                        <AuthRequired>
                            <VisualProof areaStore={areaStore}/>
                        </AuthRequired>
                    }/>
                </Routes>
            </ThemeProvider>
        </AuthProvider>

    );
}

export default App;
