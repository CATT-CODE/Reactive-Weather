import React from "react";
import sunny from "../assets/Sunny.svg"


function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
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