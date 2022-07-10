import tshirt from '../images/t-shirt.svg'
import '../cssFiles/WeatherInfo.css'

function WeatherInfo() {
    return (
        <div className="weatherInfo">
            <div className="box tempCondition">
                <h1 className="temperature">75˚F</h1>
                <h2 className="condition">Raining</h2>
            </div>
            <div className="box clothingIcon">
                <img className="clothesImg" src={tshirt} alt="T-shirt"></img>
            </div>
        </div>
    )
}

export default WeatherInfo