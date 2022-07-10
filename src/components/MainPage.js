import DateTime from './DateTime'
import HeadingSearch from './HeadingSearch'
import WeatherInfo from './WeatherInfo'
import { useEffect } from 'react'

function MainPage({handleChange, handleSubmit, setSearchString, searchString, getWeatherData, city, temperature, condition, dateTime}) {
    console.log(searchString)
    
    useEffect(() => {
        getWeatherData(searchString)
    },[])
    
    if (!city || !temperature || !condition || !dateTime) {
        return null
    }
    return (
        <div className="main-page">
            <DateTime dateTime={dateTime}/>
            <HeadingSearch 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchString={searchString}
                getWeatherData={getWeatherData}
                city={city}            
            />
            <WeatherInfo 
                temperature={temperature}
                condition={condition}
            />
        </div>
    )
}

export default MainPage