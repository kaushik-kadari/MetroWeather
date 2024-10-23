import { Sun, Cloud, CloudRain, Wind, Droplets, Thermometer } from 'lucide-react'

const WeatherIcon = ({ main }) => {
  let icon;

  switch (main.toLowerCase()) {
    case 'clear':
      icon = <Sun className="w-12 h-12 text-yellow-400" />;
      break;
    case 'clouds':
      icon = <Cloud className="w-12 h-12 text-gray-400" />;
      break;
    case 'rain':
      icon = <CloudRain className="w-12 h-12 text-blue-400" />;
      break;
    default:
      icon = <Thermometer className="w-12 h-12 text-red-400" />;
      break;
  }

  return (
    <>
      {icon}
    </>
  );
}

export default WeatherIcon
