import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      cityTemp : []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's try to fetch an API hahaha.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  ComponentDidMount(){
    console.log(2);
    let apiKey = "c033c7d88ddd656c159ed45f9a39923e";
    let city = "London";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(url)
    .then((result) => {
      return JSON.parse(result);
    }).then((data) => {
      console.log(data);
      console.log(3);
    });
  }
}

export default App;
//module.exports = App;
