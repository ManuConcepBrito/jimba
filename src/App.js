import React from 'react'
import logo from './logo.svg';
import './App.css';
import {RecoilRoot} from 'recoil';

function App() {
  return (
      <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {process.env.REACT_APP_APP_ID}
          </a>
        </header>
      </div>
      </RecoilRoot>
  );
}

export default App;
