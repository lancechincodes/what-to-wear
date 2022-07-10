// import '../cssFiles/SearchPage.css'
import DateTimeStart from './DateTimeStart'
import HeadingSearchStart from './HeadingSearchStart'
import WeatherInfoStart from './WeatherInfoStart'

function SearchPage() {
    return (
        <div className="search-page">
            <DateTimeStart />
            <HeadingSearchStart />
            <WeatherInfoStart />
        </div>
    )
}

export default SearchPage