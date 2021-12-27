import React from 'react'
import './App.css';
import CarList from './components/CarList';
import {ThemeProvider, createTheme} from '@mui/material/styles';
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
import DamageScreen from './components/DamageScreen';
import InspectionPart from './components/InspectionPart';
import {AREAS} from "./static/Areas";

const test = {
    header: 'Inbound Check',
    screenTitle: 'Template Title',
    screenDescription: 'His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos,'
}

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
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/chat" element={<Chats/>}/>
                    <Route path="/car-list" element={<CarList/>}/>
                    <Route path="/asset/:uid" element={<AssetDetail/>}/>
                    <Route path="/proof" element={<VisualProof/>}/>
                    <Route path="/" element={<DamageScreen/>}/>
                    {
                        AREAS.map((area) => (
                            <Route path={area.route} element={<InspectionPart parts={area.parts} header={area.header}
                                                                              screenTitle={area.screenTitle}
                                                                              screenDescription={area.screenDescription}/>}/>
                        ))
                    }
                    <Route path="/template" element={<InspectionPart header={test.header} screenTitle={test.screenTitle}
                                                                     screenDescription={test.screenDescription}/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
