import '../cssFiles/HeadingSearch.css'
import SearchForm from './SearchForm'

function HeadingSearch() {
    return (
        <div className="headingSearch">
            <h1 className="heading">What to Wear <span className="inCity">in Houston</span></h1>
            <SearchForm />
        </div>
    )
}

export default HeadingSearch