import { Cloud, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const cities = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Hyderabad"
  ]

  return (
    <nav className="bg-[#1a1a1a] text-primary-foreground shadow-lg text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <Cloud className="h-8 w-8 mr-2" />
                <span className="font-semibold text-lg">Metro Weather</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {cities.map((city) => (
              <a
                key={city}
                href={"/dashboard/" + city}
                className="py-4 px-2 hover:text-secondary transition duration-300"
              >
                {city}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {cities.map((city) => (
            <a
              key={city}
              href={"/dashboard/" + city}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-secondary hover:bg-primary-foreground transition duration-300"
            >
              {city}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}