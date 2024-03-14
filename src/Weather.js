import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  
  const [wetherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
     iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name
    });
    
    
  }
  if (wetherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{wetherData.city}</h1>
        <ul>
          <li>{wetherData.date}</li>
          <li className="text-capitalize">{wetherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={wetherData.iconUrl}
                alt={wetherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(wetherData.temperature)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              
              <li>Humidity: {wetherData.humidity}%</li>
              <li>Wind: {wetherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bafee8d108b96bf9b52a4f368eba89e2";
  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
  }
  
}
