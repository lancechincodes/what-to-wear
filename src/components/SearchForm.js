import { Link } from 'react-router-dom'
import { SearchIcon } from './SearchIcon'
import '../cssFiles/SearchForm.css'

function SearchForm() {
    return (
        <form className="searchForm">
            <input className="inputField" type="text" placeholder="Search for a city..."/>
            <Link to={`/search/details`}>
                <button className="searchButton" type="submit">
                    <SearchIcon height="15px" width="30px" />
                </button>
            </Link>
        </form>
    )
}

export default SearchForm