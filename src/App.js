import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/shcher-olha"
            target="_blank"
            rel="noreferrer"
          >
            Shcherbak Olha
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/shcher-olha/react-weather-week-5"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
