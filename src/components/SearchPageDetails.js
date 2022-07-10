import DateTime from './DateTime'
import HeadingSearch from './HeadingSearch'
import WeatherInfo from './WeatherInfo'

function SearchPageDetails() {
    return (
        <div className="SearchPageDetails">
            <DateTime />
            <HeadingSearch />
            <WeatherInfo />
        </div>
    )
}

export default SearchPageDetails