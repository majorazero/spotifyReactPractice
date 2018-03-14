import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      input: "London",
      city : []
    }
  }
  render() {
    let cities = this._getCity();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's try to fetch an API hahaha.</h1>
        </header>
        <div className="App-intro">
          {cities}
        </div>
          Find out the temperatures at...
          <form onSubmit={this._handleSubmit.bind(this)}>
            <input type="text" ref={(cityName) => this._cityName = cityName}/>
          </form>
      </div>
    );
  }
  _handleSubmit(event){
    event.preventDefault();
    console.log(this._cityName);
    this.setState({
      input: this._cityName
    });
  }
  _getCity(){
    return this.state.city.map((data)=>{
      return <WeatherInfo
            temp = {data.main.temp}
            name = {data.name}
            key = {data.num}
            id = {data.num}
        />
    });
  }
  _getTemp(){
    let apiKey = "c033c7d88ddd656c159ed45f9a39923e";
    let city = this.state.input;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(url)
    .then((result) => {
      return result.json();
    }).then((data) => {
      let temp = data;
      console.log(temp);
      data.num = this.state.city.length+1;
      this.setState({
        cityTemp: this.state.city.push(temp)
      });
      console.log(this.state.city);
    });
  }

    componentDidMount(){
      this._getTemp();
    }

  }

  class WeatherInfo extends Component {
    render(){
      return(
        <h3>It is {this.props.temp} degrees in {this.props.name}.</h3>
      );
    }
  }

export default App;
//module.exports = App;
