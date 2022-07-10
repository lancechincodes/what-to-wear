import tshirt from '../images/t-shirt.svg'
import '../cssFiles/WeatherInfo.css'

function WeatherInfo() {
    return (
        <div className="weatherInfo">
            <div className="tempCondition">

            </div>
            <div className="clothingIcon">
                <img src={tshirt} alt="T-shirt"></img>
            </div>
        </div>
    )
}

export default WeatherInfo