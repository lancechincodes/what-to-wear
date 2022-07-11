import HeadingSearchStart from './HeadingSearchStart'
import WeatherInfoStart from './WeatherInfoStart'

function MainPageStart({handleChange, handleSubmit, searchString, getWeatherData}) {
    
    return (
        <div className="main-page">
            <HeadingSearchStart 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchString={searchString}
                getWeatherData={getWeatherData}
            />
            <WeatherInfoStart />
        </div>
    )
}

export default MainPageStart