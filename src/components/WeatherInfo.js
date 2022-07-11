import tanktop from '../images/tank-top.svg'
import tshirt from '../images/t-shirt.svg'
import longsleeve from '../images/long-sleeve.svg'
import hoodie from '../images/hoodie.svg'
import raincoat from '../images/raincoat.svg'
import '../cssFiles/WeatherInfo.css'

function WeatherInfo({temperature, condition}) {

    function displayClothesRecommendation() {
        if (condition.includes("rain") || condition.includes("mist") || condition.includes("storm")) {
            return <img className="clothesImg" src={raincoat} alt="Raincoat icon"></img>
        }
        else {
            if (temperature >= 85) {
                return <img className="clothesImg" src={tanktop} alt="Tank top icon"></img>
            }
            else if (temperature < 85 && temperature >= 65) {
                return <img className="clothesImg" src={tshirt} alt="T-shirt icon"></img>
            }
            else if (temperature < 65 && temperature >= 50) {
                return <img className="clothesImg" src={longsleeve} alt="Longsleeve icon"></img>
            }
            else if (temperature < 50) {
                return <img className="clothesImg" src={hoodie} alt="Hoodie icon"></img>
            }
        }
    }

    return (
        <div className="weatherInfo">
            <div className="box tempCondition">
                <h1 className="temperature">{temperature}˚F</h1>
                <h2 className="condition">{condition}</h2>
            </div>
            <div className="box clothingIcon">
                {displayClothesRecommendation()}
            </div>
        </div>
    )
}

export default WeatherInfo