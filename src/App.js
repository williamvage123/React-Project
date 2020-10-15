import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import List from './List.js'
import ShowAd from './ShowAd.js'

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
  
  showDetails = (ad) => {
    this.setState({ad: ad})
    this.setState({page: "details"})
  }
  


  render() {
    
    let pageElement;
    if(this.state.page==="form"){
      pageElement= <Form onSubmit={this.showList} />
    }else if(this.state.page==="list"){
      pageElement= <List onAdClick={this.showDetails}/>
    }else if(this.state.page==="details"){
      pageElement= <ShowAd ad={this.state.ad} />
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
