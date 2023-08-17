import React from "react";
import WeatherCard from "./WeatherCard";

function Location(props) {
    const loc = props.data.find((city) => city.city == props.location)
    return (
        <>
        {
            loc &&
                <WeatherCard city={`Your location (${loc.city})`} temperature={loc.temperature} forecast={loc.forecast} />
        }
        </>
    )
}
export default Location;