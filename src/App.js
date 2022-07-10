import './App.css';
import { Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './components/Home'
import { useState} from 'react'
import MainPage from './components/MainPage';
import MainPageStart from './components/MainPageStart';


function App() {
  const searchOptions = {
    key: process.env.REACT_APP_WEATHER_KEY,
    api: "http://api.weatherapi.com/v1/current.json?"
  }

  const [searchString, setSearchString] = useState("")
  // const [lastSearch , setLastSearch] = useState("")
  const [city, setCity] = useState("")
  const [temperature, setTemperature] = useState("")
  const [condition, setCondition] = useState("")
  const [dateTime, setDateTime] = useState("")

  function getWeatherData(searchString) {
    const url = `${searchOptions.api}key=${searchOptions.key}&q=${searchString}}&aqi=no`
    fetch(url) 
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setCity(res.location.name)
        setTemperature(res.current.temp_f)
        setCondition(res.current.condition.text)
        setDateTime(res.current.last_updated)
        // setLastSearch(searchString)
        setSearchString("")
      })
      .catch(error => console.log(error))
  }

  function handleSubmit(event) {
    event.preventDefault()
    getWeatherData(searchString)
  }

  function handleChange(event) {
    setSearchString(event.target.value)
  }

  return (
    <main className="main-app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" 
          element={<MainPageStart 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchString={searchString}
            getWeatherData={getWeatherData}
            city={city}
            temperature={temperature}
            condition={condition}
            dateTime={condition}
          />}>
        </Route>
        <Route path="/main/:city" 
          element={<MainPage 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchString={searchString}
            getWeatherData={getWeatherData}
            city={city}
            temperature={temperature}
            condition={condition}
            dateTime={dateTime}
            setSearchString={setSearchString}
          />}>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
