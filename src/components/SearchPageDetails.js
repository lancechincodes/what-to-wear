import DateTime from './DateTime'
import SearchForm from './SearchForm'
import WeatherInfo from './WeatherInfo'

function SearchPageDetails() {
    return (
        <div className="SearchPageDetails">
            <DateTime />
            <SearchForm />
            <WeatherInfo />
        </div>
    )
}

export default SearchPageDetails