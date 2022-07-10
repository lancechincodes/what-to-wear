import tshirt from '../images/t-shirt.svg'
import '../cssFiles/WeatherInfo.css'

function WeatherInfo({temperature, condition}) {
    if (!temperature || !condition) {
        return null
    }

    return (
        <div className="weatherInfo">
            <div className="box tempCondition">
                <h1 className="temperature">{temperature}˚F</h1>
                <h2 className="condition">{condition}</h2>
            </div>
            <div className="box clothingIcon">
                <img className="clothesImg" src={tshirt} alt="T-shirt"></img>
            </div>
        </div>
    )
}

export default WeatherInfo