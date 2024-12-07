import React, { useEffect, useRef, useState } from 'react'
import './weather.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import clear_icon from '../assets/download.png';
import AirIcon from '@mui/icons-material/Air';
import cloud from '../assets/cloud.png';
import cloudsunny from '../assets/cloud sunny.png'
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';


import { Water } from '@mui/icons-material';

const Weather = () => {
    const inputref = useRef()
    const [weatherData, setWeatherData] = useState(false)
    const allIcons = {
        '01d': clear_icon,
        '01n': clear_icon,
        '02d': cloudsunny,
        '02n': cloudsunny,
        '03d': cloud,
        '03n': cloud,
        '04d': cloud,
        '04n': cloud,
        '09d': rain,
        '09n': rain,
        '10d': rain,
        '10n': rain,
        "13d": snow,
        '13n': snow

    }
    const search = async (city) => {
        if (city === "") {
            alert('Enter city name')
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_Weather_ID}`;

            const response = await fetch(url)
            const data = await response.json();
            if(!response.ok)
            {
                alert(data.message)
            }
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            });
        }
        catch (error) {
            setWeatherData(false);
        }
    }
    useEffect(() => {
        search('Kathmandu');
    }, [])
    return (
        <div className='weather'>
            <div className='searchbar'>
                <input ref={inputref} type="text" placeholder='Search' />
                <SearchOutlinedIcon onClick={() => search(inputref.current.value)
                } sx={{
                    cursor: 'pointer'
                }} />
            </div>
            {weatherData ? <>
                <img src={weatherData.icon} alt="" className='weather-icon' />
                <p className='temp'>{weatherData.temperature}°C</p>
                <p className='location'>{weatherData.location}</p>
                <div className="weather-data">
                    <div className="col">
                        <Water />
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <AirIcon />
                        <div>
                            <p>{weatherData.windSpeed}</p>
                            <span>Wind speed</span>
                        </div>
                    </div>
                </div>

            </> : <></>}

        </div>
    )
}

export default Weather