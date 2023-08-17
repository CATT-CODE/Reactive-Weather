import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"

const icons = {
  'Sunny': sunny,
  'Rainy': rainy,
  'Partly cloudy': partlyCloudy,
  'Cloudy': cloudy
}

function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {icons[props.forecast]} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">City: {props.city}</h3>
            <h5 className="card-text">Temp: {props.temperature}</h5>
            <h5 className="card-text">Forecast: {props.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;