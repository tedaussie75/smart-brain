import React, {Component} from 'react';
import Particles from 'react-particles-js';
import {ParticulesParams} from '../Particules/ParticulesParams';
import {ParticlesStyle} from '../Particules/ParticlesStyle';
import {Navigation} from '../Navigation/Navigation';
import {SignIn} from '../SignIn/SignIn';
import {Register} from '../Register/Register';
import {ImageLinkForm} from '../ImageLinkForm/ImageLinkForm';
import {Rank} from '../Rank/Rank';
import {FaceRecognition} from '../FaceRecognition/FaceRecognition';


const initialState = {
  inputValue: '',
  imgUrl : '',
  box : '',
  route : 'signin',
  isSignedIn : false,
  user : {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined : ''
  }
}

class App extends Component{
  constructor(){
    super();
    this.state =  initialState
  }

  loadUser = (data) => {
    this.setState({user :{
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined : data.joined
    }
    })
  }

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.querySelector("#imageInput");

    this.setState({box: {
      leftCol : clarifaiFace.left_col * +img.width,
      topRow : clarifaiFace.top_row * +img.height,
      rightCol : +img.width - (clarifaiFace.right_col * +img.width),
      bottomRow : +img.height - (clarifaiFace.bottom_row * +img.height)
    }})
  };

  getInputValue = input => this.setState({inputValue: input.target.value});

  onSubmit = () => {
    this.setState({imgUrl: this.state.inputValue});

    fetch('http://localhost:4000/imageurl',{
      method : "post",
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify({
        input : this.state.inputValue
      })
    })
    .then(response => response.json())
    .then( response => {
      if(response) {
        fetch("http://localhost:4000/image", {
          method : "put",
          headers : {"Content-Type" : "application/json"},
          body: JSON.stringify({
            id : this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => { this.setState(
            Object.assign(this.state.user, { entries : count })
          )
        })
        .catch(console.log)
      }
      this.calculateFaceLocation(response)
    })
    .catch( error => error);
  }

  onRouteChange = route => {  if(route === 'signout') {
    this.setState({initialState})
    this.setState({isSignedIn : false})
  }else if(route === 'home') {
    this.setState({isSignedIn : true})
  }
    this.setState({route: route})
  }
  
  render() {
    const {route,isSignedIn,user, box,imgUrl} = this.state;
    return (
      <div className={route === 'home' ? 'App' : ''}>
      <Particles params={ParticulesParams} style={ParticlesStyle}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'home' ?
            <div>
              <Rank currentUser={user}/>
              <ImageLinkForm getInputValue={this.getInputValue} onSubmit={this.onSubmit}/>
              <FaceRecognition box={box} detectedPicture={imgUrl} />
            </div>
          :
          (
            (this.state.route === 'signin' || this.state.route === 'signout') ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
          
        }
      </div>
    );
  }
}

export default App;
