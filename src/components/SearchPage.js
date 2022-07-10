import DateTime from './DateTime'
import SearchForm from './SearchForm'
import WeatherInfo from './WeatherInfo'

function SearchPage() {
    return (
        <div className="search-page">
            <DateTime />
            <SearchForm />
            <WeatherInfo />
        </div>
    )
}

export default SearchPage