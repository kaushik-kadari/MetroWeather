import React from 'react'
import { Sun, Cloud, CloudRain } from 'lucide-react'

const WeatherLoader = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    default: 'w-24 h-24',
    large: 'w-32 h-32'
  }

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto`}>
      <div className="absolute inset-0 flex items-center justify-center animate-pulse">
        <Sun className="text-yellow-400 w-full h-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
        <Cloud className="text-gray-400 w-3/4 h-3/4" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
        <CloudRain className="text-blue-400 w-1/2 h-1/2" />
      </div>
    </div>
  )
}

export default WeatherLoader