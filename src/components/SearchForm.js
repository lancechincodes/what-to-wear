import '../cssFiles/SearchForm.css'
import { Link } from 'react-router-dom'

function SearchForm() {
    return (
        <div className="form">
            <h1 className="heading">What to Wear <span className="inCity">in Houston</span></h1>
            <form className="searchForm">
                <input className="inputField" type="text" placeholder="Search for a city..."/>
                <Link to={`/search/details`}>
                    <button className="searchButton" type="submit">Search</button>
                </Link>
            </form>
        </div>
    )
}

export default SearchForm