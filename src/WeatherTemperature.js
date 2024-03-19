import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, Setunit] = useState("celsius");
  function convertToFar(event) {
    event.preventDefault();
    Setunit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    Setunit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <strong>°C</strong> |{" "}
          <a href="/" onClick={convertToFar}>
            <strong>°F</strong>
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            <strong>°C</strong>
          </a>{" "}
          | <strong>°F</strong>
        </span>
      </span>
    );
  }
}
