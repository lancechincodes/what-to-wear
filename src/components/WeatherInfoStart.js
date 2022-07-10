import tanktop from '../images/tank-top.svg'
import tshirt from '../images/t-shirt.svg'
import longsleeve from '../images/long-sleeve.svg'
import hoodie from '../images/hoodie.svg'
import raincoat from '../images/raincoat.svg'
import '../cssFiles/WeatherInfo.css'
import { useEffect, useState } from 'react'

const clothes = [tanktop, tshirt, longsleeve, hoodie, raincoat]

function WeatherInfo() {
    const [currentClothingItem, setCurrentClothingItem] = useState(null)
    
    useEffect(() => {
        const clothesInterval = setInterval(() => {
            setCurrentClothingItem(clothes[Math.floor(Math.random() * clothes.length)])
        }, 2000)

        // cleanup function
        return () => clearInterval(clothesInterval)
        }, [])
   
    return (
        <div className="weatherInfo">
            <div className="box tempCondition">
                <h1 className="temperature">? ˚F</h1>
                <h2 className="condition">Condition</h2>
            </div>
            <div className="box clothingIcon">
                {!currentClothingItem 
                    ? <img className="clothesImg" src={tshirt} alt="T-shirt"></img>                  
                    : <img className="clothesImg" src={currentClothingItem} alt="T-shirt"></img>}
            </div>
        </div>
    )
}

export default WeatherInfo