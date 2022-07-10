import '../cssFiles/Home.css'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

function Home() {
    return (
        <div className="home-page">
            <h1 className="title">What to Wear
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
            <Link className="search-link" to="/search">
                <div className="enter-button">
                    <p className="enter">Find Out</p>
                </div>
            </Link>
        </div>
    )
}

export default Home