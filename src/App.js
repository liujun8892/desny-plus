import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Detial from './components/Detial'
import Login from './components/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/detail" element={<Detial />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
