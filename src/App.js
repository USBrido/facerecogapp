import React, {Component} from 'react';
import './App.css';
import Navigation from '../src/components/navigation/Navigation'
import Logo from '../src/components/logo/Logo'
import Imageform from '../src/components/imageform/Imageform'
import Rank from './components/rank/Rank'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Facerecog from '../src/components/facerecog/Facerecog'

const app = new Clarifai.App({
  apiKey: 'e2c6184910e14da5ba9b7ed7ec42a0ad'
 });

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
  }
  }

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmit = () => {
  this.setState({imageURL: this.state.input});
  app.models
  .predict(Clarifai.COLOR_MODEL, 
  this.state.input)
  .then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
}


  render() {
    return (
    <div className="App">
{/* Add bellow is the Particles for the background, inside main div, but before the components per se */}
           <Particles className="particles"
              params={particlesOptions}
            />
     <Navigation/>
     <Logo/>
     <Rank/>
     <Imageform onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
     <Facerecog imageURL={this.state.imageURL}/>
    </div>
  );}
}

export default App;
