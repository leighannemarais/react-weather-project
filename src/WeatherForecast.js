import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max-temp"> 19° </span>{" "}
            <span className="WeatherForecast-min-temp">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
