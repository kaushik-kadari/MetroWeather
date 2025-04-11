import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './Homepage.jsx'
import WeatherDashboard from './components/WeatherDashboard.jsx'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/dashboard/:city' element={<WeatherDashboard />} />
      </Routes>

      <footer className="bg-gray-800 text-white py-4 bottom-0 left-0 right-0">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Metro Weather. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
