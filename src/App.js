import React from 'react';
import './App.css';
import Navigation from '../src/components/navigation/Navigation'
import Logo from '../src/components/logo/Logo'
import Imageform from '../src/components/imageform/Imageform'
import Rank from './components/rank/Rank'
import Particles from 'react-particles-js'

const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800,
        factor: 200
        }
      }
    }
  }

function App() {
  return (
    <div className="App">
{/* Add bellow is the Particles for the background, inside main div, but before the components per se */}
           <Particles className="particles"
              params={particlesOptions}
            />
     <Navigation/>
     <Logo/>
     <Rank/>
     <Imageform/>
     {/* <Facerecog/> */}
    </div>
  );
}

export default App;
