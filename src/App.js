import React, {Component} from 'react';
import './App.css';
import Navigation from '../src/components/navigation/Navigation'
import Logo from '../src/components/logo/Logo'
import Imageform from '../src/components/imageform/Imageform'
import Rank from './components/rank/Rank'
import Particles from 'react-particles-js'
import Facerecog from '../src/components/facerecog/Facerecog'
import SignIn from '../src/components/signin/SignIn'
import Register from '../src/components/register/Register'


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

const initialState = { 
    input: '',
    imageURL: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }
  
loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}

facelocator = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}

displayBox = (box) => {
  this.setState({box: box})
}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmit = () => {
  this.setState({imageURL: this.state.input});
  fetch('http://localhost:3000/imageurl', {
    method: 'post',
    headers: {'Content-type': 'application/json' },
    body: JSON.stringify({
      input: this.state.input
    })
  })
  .then(response => response.json())
  .then(response => {
    if (response) {
      fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-type': 'application/json' },
          body: JSON.stringify({
            id: this.state.user.id
          })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, {entries: count}))
      })
      .catch(console.log)
    }
    this.displayBox(this.facelocator(response))

  })
  .catch(err => console.log(err));
}

onRouteChange = (route) => { 
  if (route === 'signout') {
    this.setState(initialState)
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route})

}

  render() {
    const { isSignedIn, imageURL, route, box } = this.state;
    return (
    <div className="App">
{/* Add bellow is the Particles for the background, inside main div, but before the components per se */}
           <Particles className="particles"
              params={particlesOptions}
            />
     <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
     { route === 'home'  
     ?  <div><Logo/>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <Imageform onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            <Facerecog box={box} imageURL={imageURL}/>
        </div>
      : (
        route === 'signin' 
      ? <SignIn  loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
    }
    </div>
  );}
}

export default App;
