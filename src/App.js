import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Leigh-Anne Marais and is{" "}
          <a
            href="https://github.com/leighannemarais/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          <span>
            and hosted on{" "}
            <a
              href="https://dainty-croissant-003f65.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
