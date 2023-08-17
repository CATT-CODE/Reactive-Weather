import React, {useState} from 'react';
import WeatherCard from './components/WeatherCard';
import cities from './data';
import Location from './components/Location';
// Import data and WeatherCard here



function App() {
    const [location, setLocation] = useState("Paris")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
        {cities.map((city, index) => (
            <div className = "app">
                <Location data={cities} location={location} setLocation={setLocation}/>
                <WeatherCard key={index} city={city.city} temperature={city.temperature} forecast={city.forecast} />

            </div>
        ))}
            
        </>
    )
}

export default App;