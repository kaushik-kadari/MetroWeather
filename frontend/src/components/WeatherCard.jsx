import React from 'react'

const WeatherCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
      {icon}
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}

export default WeatherCard

