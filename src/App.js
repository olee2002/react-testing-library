import React from 'react';
import logo from './logo.svg';
import './App.css';

import Fetch from './components/Fetch';

function App() {
   const url = '/greeting'
  return (
    <div className="App">
       <Fetch url/>
    </div>
  );
}

export default App;
