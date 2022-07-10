import '../cssFiles/HeadingSearch.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import { SearchIcon } from './shared/SearchIcon'
import '../cssFiles/SearchForm.css'
import { useEffect } from 'react'

function HeadingSearchStart({handleChange, handleSubmit, searchString, getWeatherData}) {

    return (
        <div className="headingSearch">
            <h1 className="heading">What to Wear 
               <span className="inCity">
                    <Typewriter 
                    options={{
                        loop: true,
                        autoStart: true
                    }}
                    onInit={(typer) => 
                        typer
                            .typeString("in Houston")
                            .deleteAll(100)
                            .typeString("in San Francisco")
                            .deleteAll(100)
                            .typeString("in Tokyo")
                            .deleteAll(100)
                            .typeString("in Paris")
                            .deleteAll(100)
                            .typeString("in London")
                            .deleteAll(100)
                            .pause(1000)
                            .start()
                    }/>
                </span> 
            </h1>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input 
                    className="inputField" 
                    type="text" 
                    placeholder="Search for a city..."
                    onChange={handleChange}
                    value={searchString}
                />
                <Link to={`/main/${searchString}`}>
                    <button className="searchButton" type="submit">
                        <SearchIcon height="15px" width="30px" />
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default HeadingSearchStart