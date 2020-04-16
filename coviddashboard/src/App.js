import React from 'react';
import logo from './Assets/logo.png';
import './App.css';
import Dashboard from './Containers/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="caption">COVID-19 Dashboard Coming Soon</h1>
        <h3 className="caption">By Shubham Jain</h3>
      </header> */}
      <Dashboard/>
    </div>
  );
}

export default App;
