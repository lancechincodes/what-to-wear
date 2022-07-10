import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './components/Home'
import SearchPage from './components/SearchPage'


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
