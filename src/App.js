import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import List from './List.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      page: "form",
      ad: ""
    }
     
  }
  showList = () => {
    this.setState({page: "list"})
  };
 
  


  render() {
    
    let pageElement;
    if(this.state.page==="form"){
      pageElement= <Form onSubmit={this.showList} />
    }else if(this.state.page==="list"){
      pageElement= <List />
    }


    return (
      <div className="App">
        <button onClick={() => this.setState({ page: "list"})}>Show List</button>
        <button onClick={() => this.setState({ page: "form"})}>Hide List</button>
       {pageElement}
      </div>
      //looking at one ad specifically, or form or all.
    );
  }
}






export default App;
