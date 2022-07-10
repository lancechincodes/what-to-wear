import '../cssFiles/HeadingSearch.css'
import { Link } from 'react-router-dom'
import { SearchIcon } from './shared/SearchIcon'
import '../cssFiles/SearchForm.css'

function HeadingSearch({handleChange, handleSubmit, searchString, city}) {
    // if (!city) {
    //     return null
    // }

    return (
        <div className="headingSearch">
            <h1 className="heading">What to Wear <br/><span className="inCity">in {city}</span></h1>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input 
                    name="searchString"
                    className="inputField" 
                    type="text" 
                    placeholder="Search for a city..."
                    onChange={handleChange}
                    value={searchString}
                />
                {/* <Link to={`/main/city`}> */}
                <button className="searchButton" type="submit">
                    <SearchIcon height="15px" width="30px" />
                </button>
                {/* </Link> */}
            </form>
        </div>
    )
}

export default HeadingSearch