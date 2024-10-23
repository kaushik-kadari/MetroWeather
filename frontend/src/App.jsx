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
    </>
  )
}

export default App
