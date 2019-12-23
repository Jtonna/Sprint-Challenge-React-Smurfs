import React from 'react';
import axios from 'axios';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
    .post('http://localhost:3333/smurfs', this.state)
    .then(result => {
      this.setState({
        smurfs: result.data,
        name: '',
        age: '',
        height: '',
      })
      this.props.history.push('/');
    })
    .catch(error => {
      console.log('SmurfForm.js says:', error)
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
          <input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
          <input onChange={this.handleInputChange} placeholder="height" value={this.state.height} name="height" />
          <button type="submit">Send request to the Smurf Maker 3000</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
