import React from "react";

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = { weather: null};
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location){
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    let api = "96109c02f92db1d04b8a4606dfd49f5b";
    let latitude = location.coords.latitude.toString();
    let longitude = location.coords.longitude.toString();
    // api.openweathermap.org/data/2.5/weather?lat=35&lon=139

    url += "lat=";
    url += latitude;
    url += "&lon=";
    url += longitude;
    url += "&APPID=";
    url += api;

    console.log(url);
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === XMLHttpRequest.DONE) {
        let info = JSON.parse(request.responseText);
        this.setState({weather: info});
        console.log(info);
      }
    };

    request.open("GET", url, true);
    request.send();
  }


  render(){
    if (this.state.weather){
      let city = this.state.weather.name,
          ftemp = Math.floor((this.state.weather.main.temp) * 9/5 - 459);
    //name: concord = location
    //weather//main = condition
    //main//temp = temp
      return (
        <h1 className="weather">{city} {ftemp} °F</h1>
      );
    } else {
      return (
        <h1 className="weather">Loading...</h1>
      );
    }
  }

}

export default Weather;

//api key 96109c02f92db1d04b8a4606dfd49f5b
//navigator.geolocation
//To obtain the user's current location, call the getCurrentPosition(success cb) method.
