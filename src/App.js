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
          The temperature is 
        </p>
      </div>
    );
  }
  componentDidMount(){
    let apiKey = "c033c7d88ddd656c159ed45f9a39923e";
    let city = "London";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(url)
    .then((result) => {
      console.log(result.body);
      return result.json();
    }).then((data) => {
      //console.log(data.main.temp);
      this.setState({
        cityTemp: this.state.cityTemp.concat(data)
      });
    });
  }
}

export default App;
//module.exports = App;
