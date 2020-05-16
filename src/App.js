import React from 'react';
import './App.css';
import Navigation from '../src/components/navigation/Navigation'
import Logo from '../src/components/logo/Logo'
import Imageform from '../src/components/imageform/Imageform'
import Rank from './components/'


function App() {
  return (
    <div className="App">
     <Navigation/>
     <Logo/>
     <Rank/>
     <Imageform/>
     {/* <Facerecog/> */}
    </div>
  );
}

export default App;
