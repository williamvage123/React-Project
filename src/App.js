import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import List from './List.js'

class App extends Component {

  onSubmit = fields => {
    console.log('App component got  ', fields)
    fetch('https://awacademy-classifieds.herokuapp.com/ad',)
    .then(response => response.json()) 
    .then(json => console.log(json))
    
  };
 
 

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <List />
      </div>
      //looking at one ad specifically, or form or all.
    );
  }
}






export default App;
