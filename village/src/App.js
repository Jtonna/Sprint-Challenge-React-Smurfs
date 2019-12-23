import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import './App.css';

const baseUrl = 'http://localhost:3333'

const emptySmurf = {
  name: '',
  age: '',
  height: '',
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: emptySmurf,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  componentDidMount(){
    axios.get(`${baseUrl}/smurfs`)
      .then(response => {
        this.setState({
          smurfs: response.data,
        })
      })
      .catch(error => {
        console.log('looks like we have an', error)
      })
  }
  
  render() {
    return (
      <div className="App">
        <nav>
          <div className='navLinks'>
          <NavLink exact to='/'> Meet the Village </NavLink>
          <NavLink to='/smurf-form'> Smurf Maker 3000 </NavLink>
          </div>
        </nav>
        <Route path='/smurf-form' render={props => (<SmurfForm  {...props} /> )} />
        <Route exact path='/' render={props => (<Smurfs {...props} smurfs={this.state.smurfs} /> )}/>
      </div>
    );
  }
}

export default App;
