import '../cssFiles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-page">
            <h1 className="title">What to Wear</h1>
            <Link className="search-link" to="/search">
                <div className="enter-button">
                    <p className="enter">Enter</p>
                </div>
            </Link>
        </div>
    )
}

export default Home