import React, { useState, useEffect } from 'react'
import { Sun, Cloud, CloudRain, Wind, Droplets, Search, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const WeatherIcon = ({ type, className }) => {
  const icons = {
    sun: <Sun className={className} />,
    cloud: <Cloud className={className} />,
    rain: <CloudRain className={className} />,
    wind: <Wind className={className} />,
    humidity: <Droplets className={className} />
  }
  return icons[type] || null
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWeather, setCurrentWeather] = useState('sun')
  const [city, setCity] = useState('')

  useEffect(() => {
    setIsVisible(true)
    const weatherTypes = ['sun', 'cloud', 'rain']
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % weatherTypes.length
      setCurrentWeather(weatherTypes[index])
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <main className="container mx-auto px-4 py-12">
        <section className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Your Metro Weather Assistant</h2>
          <p className="text-xl text-gray-600 mb-8">Get real-time weather updates, forecasts, and personalized insights for major metro areas.</p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your metro area"
              className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
              <Search className="w-5 h-5" 
              onClick={() => {
                window.location.href = `/dashboard/${city}`
              } }
            />
              
            </button>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-64">
              <WeatherIcon
                type="sun"
                className={`absolute top-0 left-0 w-full h-full text-yellow-400 transition-opacity duration-1000 ${currentWeather === 'sun' ? 'opacity-100' : 'opacity-0'}`}
              />
              <WeatherIcon
                type="cloud"
                className={`absolute top-0 left-0 w-full h-full text-gray-400 transition-opacity duration-1000 ${currentWeather === 'cloud' ? 'opacity-100' : 'opacity-0'}`}
              />
              <WeatherIcon
                type="rain"
                className={`absolute top-0 left-0 w-full h-full text-blue-400 transition-opacity duration-1000 ${currentWeather === 'rain' ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<WeatherIcon type="sun" className="w-12 h-12 text-yellow-400" />}
              title="Real-time Updates"
              description="Get the latest weather information for major metro areas as it happens, ensuring you're always prepared."
            />
            <FeatureCard
              icon={<WeatherIcon type="cloud" className="w-12 h-12 text-gray-400" />}
              title="5-Day Forecast"
              description="Plan ahead with our accurate 5-day weather predictions for any metro location."
            />
            <FeatureCard
              icon={<WeatherIcon type="wind" className="w-12 h-12 text-blue-300" />}
              title="Detailed Insights"
              description="Access comprehensive weather data including temperature, humidity, wind speed, and more for urban areas."
            />
          </div>
        </section>

        {/* <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to stay ahead of metro weather?</h2>
          <Link to="/dashboard" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300 inline-flex items-center">
            Go to Dashboard
            <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
          </Link>
        </section> */}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Metro Weather. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}