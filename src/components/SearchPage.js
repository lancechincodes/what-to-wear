// import '../cssFiles/SearchPage.css'
import DateTimeStart from './DateTimeStart'
import SearchForm from './SearchForm'
import WeatherInfoStart from './WeatherInfoStart'

function SearchPage() {
    return (
        <div className="search-page">
            <DateTimeStart />
            <SearchForm />
            <WeatherInfoStart />
        </div>
    )
}

export default SearchPage