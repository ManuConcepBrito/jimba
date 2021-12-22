import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import ChatDetail from "./components/ChatDetail";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {createBrowserHistory} from 'history';
import Chats from "./components/ChatEngine";

function App() {
    const historyInstance = createBrowserHistory();

    return (
        <Router history={historyInstance}>
            <Routes>
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/chat" element={<Chats/>} />
            </Routes>
        </Router>
    );
}

export default App;
