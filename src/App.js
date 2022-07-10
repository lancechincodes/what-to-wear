import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import SearchPageDetails from './components/SearchPageDetails';


function App() {
  return (
    <main className="main-app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/search/details" element={<SearchPageDetails />}></Route>
      </Routes>
    </main>
  );
}

export default App;
