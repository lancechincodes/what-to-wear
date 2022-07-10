import '../cssFiles/HeadingSearch.css'
import SearchForm from './SearchForm'
import Typewriter from 'typewriter-effect'

function HeadingSearchStart() {
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
            <SearchForm />
        </div>
    )
}

export default HeadingSearchStart