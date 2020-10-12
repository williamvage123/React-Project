import React from 'react';
import logo from './logo.svg';
import './App.css';




function App() {

function createAd () {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      title:"string",
      description:"string",
      name:"string",
      location:"string",
    })
};
fetch('https://awacademy-classifieds.herokuapp.com/ad', requestOptions)
    .then(response => response.json())
    .then(json => console.log(json))
}

  return (
    <div className="App">
      <header className="App-header">
       <div>
       <button onClick={createAd}>Ad</button>
       </div>
       </header>
       
    </div>
  );
}

export default App;
